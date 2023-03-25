from flask import Flask,redirect,url_for,render_template,request, jsonify
from flask_cors import CORS
import joblib

app=Flask(__name__)
cors=CORS(app, resources={r"/api/*":{"origins":"*"}})

@app.route('/api/approveLoan',methods=['GET','POST'])
def approveLoan():
    married = request.args.get('married')
    dependents = request.args.get('dependents')
    education = request.args.get('education')
    selfEmployed = request.args.get('selfEmployed')
    applicantIncome = request.args.get('applicantIncome')
    loanAmount = request.args.get('loanAmount')
    creditHistory = request.args.get('creditHistory')

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
