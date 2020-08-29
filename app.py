from flask import Flask, render_template, request, jsonify
from werkzeug.utils import secure_filename
from LRClass import LRClass 
import os,json,re, math

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
    N =False
    if 'file' in request.files:
        filecsv = request.files['file']
        N = request.form["n"]
        print(filecsv, N)
        if filecsv and allowed_file(filecsv.filename):
            filename = secure_filename(filecsv.filename)
            filecsv.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        else:
            return "error"
    
    datatestPath = 'data/' + filecsv.filename
    
    c = LRClass(datatestPath)
    df = c.datatest
    df = df if df.index.name == 'date' else df.set_index('date')
    n_bulan = int(N)

    print(df)

    columns = df.columns
    columns_prediction = ['KD','SW','DD']
    result = {}
    for col in columns_prediction:
        X_train, X_test, y_train, y_test = c.train_test_plit_data(df,col,columns)
        model = c.model(X_train,y_train)

        y_pred = model.predict(X_test)
        print('ypred',y_pred)
        forecast_pred = c.get_data_forecast(df,col,columns,n_bulan)
        forecast_pred = model.predict(forecast_pred)
        result_ = c.plot_data(df,col,forecast_pred,n_bulan)

        listData = result_.values.tolist()
        json_data = []
        for i in range(len(listData)):
            json_data.append({
                'date':listData[i][0],
                col: '-' if math.isnan(listData[i][1]) else listData[i][1],
                'forecast': '-' if math.isnan(listData[i][2]) else listData[i][2],
            })
        
        result[col] = json_data

    return jsonify({
        'n_bulan': n_bulan,
        'result':result
    }),200

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080)) # port local env 
    app.run(host="0.0.0.0", port=port) #env for heroku
    # app.run(port=port, debug=True) # running appp with debug (auto load) 