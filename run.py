import json, time
from   cfg   import *
from   flask import Flask

app = Flask(
            __name__, 
            static_folder   = STATIC_FOLDER, 
            static_url_path = STATIC_PATH, 
            )

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/get_commts')
def get_commts():
    time.sleep(1)
    return json.dumps(DATA)

if __name__ == '__main__':
   app.run(host = IP , port = PORT , debug = DEBUG)