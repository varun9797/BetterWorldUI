var database = require('../../../../database/database');
var cors = require('cors')
var jwt = require('jsonwebtoken');
import SocietyModel from './../models/societyModel'
process.env.SECRET_KEY = "varunv";

class SocietyController {
    constructor(){
         this.societyModel = new SocietyModel();
    }

    registerOwner= (req, res) =>{
        this.societyModel.registerOwner(req).then((dbResponse)=>{
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch((err)=>{
            console.log("catch block of registerOwner ",err);
            res.status(err.satusCode).json(err);
        })
    }
    getDetails= (req, res) =>{
        this.societyModel.getDetails(req).then((dbResponse)=>{
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch((err)=>{
            console.log("catch block of getDetails",err);
            res.status(err.satusCode).json(err);
        })
    }
    getDetailsUsingQueryParam= (req, res) =>{
        console.log(`select * from ${req.params.tableName} where ${req.params.columnName} = ${req.query.value}`)
        this.societyModel.getDetailsUsingQueryParam(req).then((dbResponse)=>{
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch((err)=>{
            console.log("catch block of getDetailsUsingQueryParam",err);
            res.status(err.satusCode).json(err);
        }) 
    }
    updatePendingPaymentOfFlat= (req, res) =>{
        console.log(`update flat set pendingpayment = '${req.body.pendingPayment}' where ownerid =${req.body.ownerid} and flatId =${req.body.flatid};`)
        this.societyModel.updatePendingPaymentOfFlat(req).then((dbResponse)=>{
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch((err)=>{
            console.log("catch block of updatePendingPaymentOfFlat",err);
            res.status(err.satusCode).json(err);
        }) 
    }
}

export default SocietyController;