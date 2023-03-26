from flask import Flask,redirect,url_for,render_template,request, jsonify
from flask_cors import CORS
import joblib

app=Flask(__name__)
cors=CORS(app, resources={r"/api/*":{"origins":"*"}})

@app.route('/api/approveLoan',methods=['GET','POST'])
def approveLoan():
    print(request.json['married'])
    married = request.json['married']
    dependents = request.json['dependents']
    education = request.json['education']
    selfEmployed = request.json['selfEmployed']
    applicantIncome = request.json['applicantIncome']
    loanAmount = request.json['loanAmount']
    creditHistory = request.json['creditHistory']

    print(loanAmount)
    
    modal=joblib.load("./model.pkl")

    own_pred = modal.predict([[married,dependents,education,selfEmployed,applicantIncome,loanAmount,creditHistory]])
    if own_pred[0] == 1:
        return "Loan Approved"
    else : 
        return "Loan Rejected"
    
    


if __name__ == '__main__':
    #DEBUG is SET to TRUE. CHANGE FOR PROD
    app.run(port=5000,debug=True)
