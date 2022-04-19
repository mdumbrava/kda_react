import json, time
from   cfg   import *
from   flask import Flask, redirect, request, render_template, url_for

app = Flask(
            __name__, 
            static_folder   = STATIC_FOLDER, 
            static_url_path = STATIC_PATH, 
            )

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['ENV'] = 'development'
# for x in app.config:
#     print(str(x) + '\t' + str(app.config[x]))

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/get_commts/<page>')
def get_commts(page):
    page_size = 2
    print(page)
    f = open('./comments.txt', 'r')
    val_DATA = f.read()
    f.close
    lst_DATA = json.loads(val_DATA)
    lst_DATA.reverse()
    lst_NEW = []
    if page_size >= len(lst_DATA):
        lst_NEW = lst_DATA
    else:
        for x in range(0, page_size):
            lst_NEW.append(lst_DATA[x])
    return json.dumps(lst_NEW)

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
    # return redirect('http://127.0.0.1:3000')
    return redirect('/')

if __name__ == '__main__':
   app.run(host = IP , port = PORT , debug = DEBUG)