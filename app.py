from flask import Flask, render_template, request, jsonify
from werkzeug.utils import secure_filename
from LRClass import LRClass 
import os,json,re

UPLOAD_FOLDER = 'data'
ALLOWED_EXTENSIONS = set(['csv','xlsx'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def allowed_file(filename): # allowed function type extention data
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/') # index route
def index():
    return render_template('index.html')
    # return "INDEX"


@app.route('/process/',methods=["GET","POST"]) # function cluster after send data
def cluster_result():

    if 'file' in request.files:
        filecsv = request.files['file']

        print(filecsv)
        if filecsv and allowed_file(filecsv.filename):
            filename = secure_filename(filecsv.filename)
            filecsv.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        else:
            return "error"
    
    datatestPath = 'data/' + filecsv.filename
    
    c = LRClass(datatestPath)
    datatest = c.datatest
    data = []
    for i in range(len(datatest.values)):

        data.append({
            'date':str(datatest.values[i][0]).split(' ')[0],
            'KD':datatest.values[i][1],
            'SW':datatest.values[i][2],
            'DD':datatest.values[i][3]
        })

    return jsonify({
        'data': data,
    })

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080)) # port local env 
    app.run(host="0.0.0.0", port=port) #env for heroku
    # app.run(port=port, debug=True) # running appp with debug (auto load) 