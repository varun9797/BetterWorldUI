process.env.SECRET_KEY = 'varunv';
import QueryMediator from '../models/queryConnection';



class SocietyModel {

    constructor() {
        this.queryMediator = new QueryMediator();
    }

    
    getOwner = (req, searchData) => new Promise((resolve, reject) => {
        let query = `select ownerid from owner where phonenumber = ${searchData[0]} and email = \'${searchData[1]}\' `;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('getOwner : Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            reject(err);
        });
    })

    callStoredProc = (req) => new Promise((resolve, reject) => {
        let query = `call ${req.body.storedProc}`;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('callStoredProc : Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            reject(err);
        });
    })

    getOwnerList = (req) => new Promise((resolve, reject) => {
        var societyIds = (req.body.societyIds && req.body.societyIds.length > 0) ? `'${req.body.societyIds}'` : null;
        var buildingNames = (req.body.buildingNames && req.body.buildingNames.length > 0) ? `'${req.body.buildingNames}'` : null;
        var flatIds = (req.body.flatIds && req.body.flatIds.length > 0) ? `'${req.body.flatIds}'` : null;

        let query = `call get_owner_details(${societyIds}, ${buildingNames}, ${flatIds})`;
        console.log(`call get_owner_details(${societyIds}, ${buildingNames}, ${flatIds})`);
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('getOwnerList : Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            reject(err);
        });
    })

    updateFlat = (req, searchData, updateValue) => new Promise((resolve, reject) => {
        console.log('searchData is ', searchData);
        console.log('update value is ', updateValue);

        let query = `update flat set ownerid = ${updateValue} where societyid = ${searchData[0]} and buildingname = '${searchData[1]}' and flatname = '${searchData[2]}'`;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('updateFlat : Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            console.log(`query is ------------ update flat set ownerid = ${updateValue} where societyid = ${searchData[0]} and buildingname = ${searchData[1]} and flatname = ${searchData[2]}`);
            reject(err);
        });
    })

    registerOwner = (req) =>  new Promise(async (resolve, reject) => {
        var flatData = [req.body.societyId, req.body.buildingName, req.body.flatName];
        var ownerSearchData = [req.body.phoneNumber, req.body.email];
        var ownerInsertData = [[req.body.ownerName, req.body.type, req.body.phoneNumber, req.body.email, req.body.age, req.body.gender, req.body.password]];

        let query = 'insert into owner(ownername,type,phonenumber,email, age, gender, password) values ?';
        try {
            await this.queryMediator.queryConnection(query, ownerInsertData);
            let fetchOwnerResponse = await this.getOwner(null, ownerSearchData);
            if(fetchOwnerResponse.dbResponse && fetchOwnerResponse.dbResponse[0] && fetchOwnerResponse.dbResponse[0].ownerid) {
                let insertMappingResponse = await this.updateFlat(null, flatData, fetchOwnerResponse.dbResponse[0].ownerid);
                fetchOwnerResponse.dbResponse = 'new owner record inserted and updated flat sucessfully';
                resolve(insertMappingResponse);
            } else {
                fetchOwnerResponse.dbResponse = 'new owner record inserted sucessfully';
                resolve(fetchOwnerResponse);
            }
        } catch (err) {
            console.log('got query error ', err);
            reject(err);
            //return err;
        }
    })

    getDetails = (req) => new Promise((resolve, reject) => {
        console.log('req.params.tableName', req.params.tableName);
        let query = `select * from ${req.params.tableName}`;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('getDetails : Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            reject(err);
        });
    })

    getDetailsUsingQueryParam = (req) => new Promise((resolve, reject) => {
        console.log('req.params.tableName', req.params.tableName);
        let query = `select * from ${req.params.tableName} where ${req.params.columnName} = ${req.query.value}`;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('select query working fine : Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            reject(err);
        });
    })

    // updatePendingPaymentOfFlat = (req) => new Promise((resolve, reject) => {
    //     console.log('req.params.tableName', req.params.tableName);

    //     let query = `update flat set pendingpayment = '${req.body.pendingPayment}' where ownerid =${req.body.ownerid} and flatId =${req.body.flatid}`;
    //     this.queryMediator.queryConnection(query).then((result) => {
    //         console.log('pending payment successfully updated : Ok ');
    //         resolve(result);
    //     }).catch((err) => {
    //         console.log('got query error ', err);
    //         reject(err);
    //     });
    // })

    updatePendingPaymentOfFlat = (req) => new Promise((resolve, reject) => {
        //console.log('req.params.tableName', req.params.tableName);

        //let query = `update flat set pendingpayment = '${req.body.pendingPayment}' where ownerid =${req.body.ownerid} and flatId =${req.body.flatid}`;
        let query = `call update_pending_payment(${req.body.flatid}, ${req.body.pendingPayment}, ${req.body.ownerid})`;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('pending payment successfully updated : Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            reject(err);
        });
    })

    updatePaymentHistory = (req) => new Promise((resolve, reject) => {
        const currentDate = new Date();

        let query = `insert into paymenthistory(flatid,paid,ownerid) values (${req.body.flatid},${req.body.pendingPayment},${req.body.ownerid});`;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('pending payment history successfully updated : Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            reject(err);
        });
    });

    registerBuilding = (req) => new Promise((resolve, reject) => {
        let query = `insert into building(buildingname, societyid) values('${req.body.buildingName}',${req.body.societyid});`;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('Building is successfully Inserted: Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            reject(err);
        });
    });

    registerSociety = (req) => new Promise((resolve, reject) => {
        let query = `insert into society(societyName, address, pincode) values ('${req.body.societyName}', '${req.body.address}', '${req.body.pincode}');`;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('Society is successfully Inserted : Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            reject(err);
        });
    });

    registerFlat = (req) => new Promise((resolve, reject) => {
        let query = `insert into flat(flatname, buildingname, societyid) values ('${req.body.flatName}', '${req.body.buildingName}', ${req.body.societyId});`;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('Flat is successfully Inserted : Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            reject(err);
        });
    });

    updateBuilding = (req) => new Promise((resolve, reject) => {
        let query = `insert into building(buildingname, societyid) values('${req.body.buildingName}',${req.body.societyid});`;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('Building is successfully Updated: Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            reject(err);
        });
    });

    updateSociety = (req) => new Promise((resolve, reject) => {
        let query = `insert into society(societyName, address, pincode) values ('${req.body.societyName}', '${req.body.address}', '${req.body.pincode}');`;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('Society is successfully Updated : Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            reject(err);
        });
    });

    // updateFlat = (req) => new Promise((resolve, reject) => {
    //     let query = `insert into flat(flatname, buildingname, societyid) values ('${req.body.flatName}', '${req.body.buildingName}', ${req.body.societyId});`;
    //     this.queryMediator.queryConnection(query).then((result) => {
    //         console.log('Flat is successfully Updated : Ok ');
    //         resolve(result);
    //     }).catch((err) => {
    //         console.log('got query error ', err);
    //         reject(err);
    //     });
    // });

    updateOwner = (req) => new Promise((resolve, reject) => {
        let query = `insert into flat(flatname, buildingname, societyid) values ('${req.body.flatName}', '${req.body.buildingName}', ${req.body.societyId});`;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('Flat is successfully Updated : Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            reject(err);
        });
    });

    getDetailsUsingMultiParam = (req) => new Promise((resolve, reject) => {
        let query = `select * from ${req.params.tableName} where ${req.params.columnName1} = ${req.query.value1} and ${req.params.columnName2} = ${req.query.value2}`;
        console.log(query);
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('getDetailsUsingMultiParam : Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error ', err);
            reject(err);
        });
    });

    deleteRow = (req) => new Promise((resolve, reject) => {
        let query = `delete from ${req.body.tableName} where ${req.body.columnName} = ${req.body.columnValue}`;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('delete successfully : Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('got query error while deleting ', err);
            reject(err);
        });
    });

    IsCurrentMonthPaymentStructureExist = async () => {
        let query = `select count(id) as count from dev_society.paymentstructure  where MONTH(createdDate) = MONTH(CURRENT_DATE())
        AND YEAR(createdDate) = YEAR(CURRENT_DATE());`;
        try {
            const recordCount = await this.queryMediator.queryConnection(query);
            console.log('IsCurrentMonthPaymentStructureExist: Ok ', recordCount.dbResponse[0].count); 
            if(recordCount >0){
                return true;
            } else {
                return false;
            }
        } catch(err){
            console.error('IsCurrentMonthPaymentStructureExist : Error',err);
            throw err;
        }
    }

    insertOrUpdatePaymentStructure = (req) => new Promise((resolve, reject) => {
        let body = req.body;
        let query;
        let valuesArray=null;
        console.log("req.method---",req.method);
        if(req.method == 'POST'){
            query = `insert into paymentstructure(buildingMaintenance, parkingMaintenance, municipalDue, sinkingFund, electricityCharge, updatedBy) values (${body.buildingMaintenance},${body.parkingMaintenance},${body.municipalDue},${body.sinkingFund},${body.electricityCharge},${body.updatedBy});`;
        } else if(req.method == 'PUT'){
            query = `update paymentstructure set buildingMaintenance =${body.buildingMaintenance}, parkingMaintenance=${body.parkingMaintenance}, municipalDue=${body.municipalDue}, sinkingFund=${body.sinkingFund}, electricityCharge=${body.electricityCharge}, updatedBy=${body.updatedBy} where id = ${body.id}`;
            // valuesArray = [body.buildingMaintenance, body.parkingMaintenance, body.municipalDue, body.sinkingFund, body.electricityCharge, body.updatedBy, body.id];
        }
        this.queryMediator.queryConnection(query, valuesArray).then((result) => {
            console.log('insertOrUpdatePaymentStructure: Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('insertOrUpdatePaymentStructure : Error ', err);
            reject(err);
        });
    });

    insertRecieptArray = (recieptArray) => new Promise((resolve, reject) => {
        let query = 'insert into paymentreceipt(flatid, monthlyamount, paymentStructureid) values ?';
        this.queryMediator.queryConnection(query, recieptArray).then((result) => {
            console.log('insertOrUpdateRecieptArray: Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('insertOrUpdateRecieptArray : Error ', err);
            reject(err);
        });
    });

    getFlatIdsByOwnerId = (ownerId) => new Promise((resolve, reject) => {
        let query = `SELECT flatid FROM flat where ownerid = ${ownerId}`;
        this.queryMediator.queryConnection(query).then((result) => {
            console.log('insertPaymentReceipt: Ok ');
            resolve(result);
        }).catch((err) => {
            console.log('insertPaymentReceipt : Error ', err);
            reject(err);
        });
    });

    disableCurrentRecieptIds =async (paymentStructureId)=>{
        const recieptIdsArray = await this.getCurrentReciepts(paymentStructureId);
        //const query = `DELETE FROM paymentreceipt WHERE id IN (${recieptIdsArray})`;
        const query = `update paymentreceipt set isActive = 0 WHERE id IN (${recieptIdsArray})`;
        try {
            const deleteResponse = await this.queryMediator.queryConnection(query);  
            console.log('disableCurrentRecieptIds: Ok ', deleteResponse);    
            return deleteResponse;
        } catch(err){
            console.error('disableCurrentRecieptIds : Error',err);
            throw err;
        }

    }

    getCurrentReciepts = async (paymentStructureId)=>{
        let query = `SELECT id FROM paymentreceipt where paymentStructureid = ${paymentStructureId} and MONTH(createdDate) = MONTH(CURRENT_DATE())
        AND YEAR(createdDate) = YEAR(CURRENT_DATE())`;
        try {
            const recieptIdsArray = await this.queryMediator.queryConnection(query);
            console.log('getCurrentReciepts: Ok ', recieptIdsArray); 
            let idsArray = [];
            recieptIdsArray.dbResponse.forEach((element)=>{
                idsArray.push(element.id);
            })
            return idsArray;
        } catch(err){
            console.error('getCurrentReciepts : Error',err);
            throw err;
        }
    }


}

export default SocietyModel;