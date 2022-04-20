import json, time, math, logging
from   cfg       import *
from   flask     import Flask, redirect, request, render_template, url_for
from   datetime  import datetime

app = Flask(
            __name__, 
            static_folder   = STATIC_FOLDER, 
            static_url_path = STATIC_PATH, 
            )

if not LOG_FLASK:
    log = logging.getLogger('werkzeug')
    log.disabled = True

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['ENV'] = MODE

# for x in app.config:
#     print(str(x) + '\t' + str(app.config[x]))

@app.route('/')
@app.route('/ahri')
@app.route('/akali')
@app.route('/evelynn')
@app.route('/kaisa')
@app.route('/seraphine')
def index():
    return app.send_static_file('index.html')

@app.route('/get_commts/<page>')
def get_commts(page):
    page_size = 2
    # print(page)
    f = open('./comments.txt', 'r')
    val_DATA = f.read()
    f.close
    lst_DATA = json.loads(val_DATA)
    lst_DATA.reverse()
    val_pages = len(lst_DATA) / page_size
    val_pages = math.ceil(val_pages)
    # print(val_pages)
    lst_NEW = []
    if page_size >= len(lst_DATA) or int(page) > val_pages:
        page = 1
    val_start = page_size*(int(page)-1)
    val_stop  = val_start + page_size
    lst_NEW = lst_DATA[val_start:val_stop]
    dct_comments = {}
    dct_comments["comments"] = lst_NEW
    dct_comments["page"] = page
    return json.dumps(dct_comments)

@app.route('/save_commts', methods=['POST'])
def save_commts():
    f = open('./comments.txt', 'r')
    val_DATA = f.read()
    f.close
    lst_DATA = json.loads(val_DATA)
    dct_DATA =  {
                'id'     : len(lst_DATA) + 1,
                'name'   : request.form['name'],
                'Comment': request.form['comment'],
                }
    lst_DATA.append(dct_DATA)
    f = open('./comments.txt', 'w')
    f.write(json.dumps(lst_DATA))
    f.close
    return redirect('/')

def log_console(ip, time, path):
    print(  '' + ip + '\t' + time + '\t' + '' + path)

if NICE_LOG:
    @app.after_request
    def after_request_func(response):
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