import SocietyModel from './../models/societyModel';
process.env.SECRET_KEY = 'varunv';

class SocietyController {
    constructor(){
         this.societyModel = new SocietyModel();
    }

    registerOwner= (req, res) =>{
        this.societyModel.registerOwner(req).then((dbResponse)=>{
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch((err)=>{
            console.log('catch block of registerOwner ',err);
            res.status(err.satusCode).json(err);
        });
    }
    getDetails= (req, res) =>{
        console.log('checking auto deploye1111');
        this.societyModel.getDetails(req).then((dbResponse)=>{
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch((err)=>{
            console.log('catch block of getDetails',err);
            res.status(err.satusCode).json(err);
        });
    }
    getDetailsUsingQueryParam= (req, res) =>{
        console.log(`select * from ${req.params.tableName} where ${req.params.columnName} = ${req.query.value}`);
        this.societyModel.getDetailsUsingQueryParam(req).then((dbResponse)=>{
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch((err)=>{
            console.log('catch block of getDetailsUsingQueryParam',err);
            res.status(err.satusCode).json(err);
        }); 
    }
    updatePendingPaymentOfFlat= (req, res) =>{
        console.log(`update flat set pendingpayment = '${req.body.pendingPayment}' where ownerid =${req.body.ownerid} and flatId =${req.body.flatid};`);
        this.societyModel.updatePendingPaymentOfFlat(req).then((dbResponse)=>{
            console.log('updatePendingPaymentOfFlat successfully done!!');
            this.updatePaymentHistory(req, (resFlag, responseData)=>{
                if(resFlag){
                    res.status(dbResponse.satusCode).json(responseData);
                } else {
                    
                    res.status(400).json(responseData);
                }
            });
        }).catch((err)=>{
            console.log('catch block of updatePendingPaymentOfFlat',err);
            res.status(err.satusCode).json(err);
        }); 
    }

    updatePaymentHistory= (reqBody,callback) =>{
        const currentDate = new Date();
        //console.log(`update paymentHistory set paymentHistory = '${req.body.pendingPayment}' where ownerid =${req.body.ownerid} and flatId =${req.body.flatid};`)
        console.log(`insert into paymenthistory(flatid,paid,createddate,updateddate,ownerid) values (${reqBody.body.flatid},${reqBody.body.pendingPayment},'${currentDate.toISOString()}','${currentDate.toISOString()}',${reqBody.body.ownerid});`);
        this.societyModel.updatePaymentHistory(reqBody).then((dbResponse)=>{
            callback(true, dbResponse);
        }).catch((err)=>{
            console.log('catch block of updatePaymentHistory',err);
            callback(false, err);
        }); 
    }

    registerBuilding = (req, res) => {
        console.log(`insert into building(buildingname, societyid) values
        (${req.body.buildingName},'${req.body.societyid}');`);
        this.societyModel.registerBuilding(req).then((dbResponse)=>{
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch((err)=>{
            console.log('catch block of registerOwner ',err);
            res.status(err.satusCode).json(err);
        });
    }

    registerSociety = (req, res) => {
        console.log(`society register query is--- 
        insert into society(societyName, address, pincode) values 
        ('${req.body.societyName}', '${req.body.address}', '${req.body.pincode}'`);
        this.societyModel.registerSociety(req).then((dbResponse)=>{
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch((err)=>{
            console.log('catch block of registerOwner ',err);
            res.status(err.satusCode).json(err);
        });
    }

    getOwnerList = (req, res) => {
        console.log(`call get_owner_details(${req.body.societyIds}, ${req.body.buildingNames}, ${req.body.flatIds})`);
        this.societyModel.getOwnerList(req).then((dbResponse)=>{
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch((err)=>{
            console.log('catch block of getOwnerList ',err);
            res.status(err.satusCode).json(err);
        });
    }

    registerFlat = (req, res) => {
        console.log(`insert into flat(flatname, buildingname, societyid, ownerid) 
        values (${req.body.flatName}, ${req.body.buildingName}, ${req.body.societyId},
             ${req.body.ownerId});`);
        this.societyModel.registerFlat(req).then((dbResponse)=>{
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch((err)=>{
            console.log('catch block of registerOwner ',err);
            res.status(err.satusCode).json(err);
        });
    }
}

export default SocietyController;