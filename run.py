import json, time, math, logging
from   cfg       import *
from   flask     import Flask, redirect, request, render_template, url_for
from   datetime  import datetime
from   flask     import make_response
from   functools import wraps, update_wrapper


app = Flask(
            __name__, 
            static_folder   = STATIC_FOLDER, 
            static_url_path = STATIC_PATH, 
            )

if not LOG_FLASK:
    log = logging.getLogger('werkzeug')
    log.disabled = True

# this helps with caching
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 43200
app.config['ENV'] = MODE

# for x in app.config:
#     print(str(x) + '\t' + str(app.config[x]))

# this helps with route not caching files
def nocache(view):
    @wraps(view)
    def no_cache(*args, **kwargs):
        response = make_response(view(*args, **kwargs))
        response.headers['Last-Modified'] = datetime.now()
        response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '-1'
        return response
    return update_wrapper(no_cache, view)

@app.route('/')
@app.route('/ahri')
@app.route('/akali')
@app.route('/evelynn')
@app.route('/kaisa')
@app.route('/seraphine')
# @nocache
def index():
    return app.send_static_file('index.html')

@app.route('/apikda/get_commts/<page>')
def get_commts(page):
    try:
        f = open(COMM_FILE, 'r')
        val_DATA = f.read()
        f.close
    except:
        val_DATA = '[]'
    lst_DATA = json.loads(val_DATA)
    lst_DATA.reverse()
    val_pages = len(lst_DATA) / PAGE_SIZE
    val_pages = math.ceil(val_pages)
    # print(val_pages)
    lst_NEW = []
    if PAGE_SIZE >= len(lst_DATA) or int(page) > val_pages:
        page = 1
    val_start = PAGE_SIZE*(int(page)-1)
    val_stop  = val_start + PAGE_SIZE
    lst_NEW = lst_DATA[val_start:val_stop]
    dct_comments = {}
    dct_comments["comments"] = lst_NEW
    dct_comments["page"] = page
    return json.dumps(dct_comments)

@app.route('/apikda/save_commts', methods=['POST'])
def save_commts():
    try:
        f = open(COMM_FILE, 'r')
        val_DATA = f.read()
        f.close
    except:
        val_DATA = '[]'
    lst_DATA = json.loads(val_DATA)
    dct_DATA =  {
                'id'     : len(lst_DATA) + 1,
                'name'   : request.form['name'],
                'Comment': request.form['comment'],
                }
    lst_DATA.append(dct_DATA)
    f = open(COMM_FILE, 'w')
    f.write(json.dumps(lst_DATA))
    f.close
    return redirect('/')

def log_console(ip, time, path):
    print(  '' + ip + '\t' + time + '\t' + '' + path)

if NICE_LOG:
    @app.after_request
    def after_request_func(response):
        if PROXY:
            val_ip   = request.environ.get('HTTP_X_REAL_IP')
        else:
            val_ip   = request.environ.get('REMOTE_ADDR')
        val_path = request.path
        val_time = str(datetime.now())[:19]
        if HIDE_STATIC:
            if 'static' not in request.path:
                log_console(val_ip, val_time, val_path)
        else:
            log_console(val_ip, val_time, val_path)
        return response

if __name__ == '__main__':
   app.run(host = IP , port = PORT , debug = DEBUG)