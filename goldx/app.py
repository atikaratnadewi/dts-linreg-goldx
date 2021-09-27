from flask import Flask, render_template, url_for, request
from joblib import load

app = Flask(__name__)

model = load('model.joblib')

@app.route("/")
def home():
    return render_template('app.html')

@app.route("/predict", methods=["POST"])
def predict():
    request_data_open = request.form['data_open']
    request_data_high = request.form['data_high']
    request_data_low = request.form['data_low']
    
    predict_result = str(model.predict([[request_data_open,request_data_high, request_data_low]])[0])
    return predict_result

if __name__ == '__main__':
    app.run(debug=True)