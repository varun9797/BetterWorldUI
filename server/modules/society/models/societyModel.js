var database = require('./../../../../database/database');
process.env.SECRET_KEY = 'varunv';

class SocietyModel {

    getOwner = (req, searchData) => new Promise((resolve, reject)=>{
        var appData = {
            'error': 1,
            'data': '',
            'satusCode':'',
            'dbResponse':''
        };
        database.connection.getConnection((err, connection)=> {
            connection.query('select ownerid from owner where phonenumber = ? and email = ? ', searchData ,function(err, rows) {
                //console.log(temp.sql);
                connection.release();
                if (!err) {
                    console.log('getOwner : Ok ');
                    appData.error = 0;
                    appData['data'] = 'User registered successfully!';
                    appData['dbResponse'] = rows;
                    appData['satusCode'] = 201;
                    resolve(appData);
                    //res.status(201).json(appData);
                } else {
                    console.log('got error '+err);
                    appData['data'] = 'Error Occured!';
                    appData['satusCode'] = 400;
                    appData.error = err;
                    reject(appData);
                    //res.status(400).json(err);
                }
            });
        });
        
    })

    getOwnerList = (req) => new Promise((resolve, reject)=>{
        var appData = {
            'error': 1,
            'satusCode':'',
            'dbResponse':''
        };
        var societyIds = (req.body.societyIds && req.body.societyIds.length>0) ? `'${req.body.societyIds}'`:null;
        var buildingNames = (req.body.buildingNames && req.body.buildingNames.length>0)?`'${req.body.buildingNames}'`:null;
        var flatIds =  (req.body.flatIds && req.body.flatIds.length>0)?`'${req.body.flatIds}'`:null;

        database.connection.getConnection((err, connection)=> {
           const query =  connection.query(`call get_owner_details(${societyIds}, ${buildingNames}, ${flatIds})` ,function(err, rows) {
                console.log(query.sql);
                connection.release();
                if (!err) {
                    console.log('getOwnerList : Ok ');
                    appData.error = 0;
                    appData['dbResponse'] = rows;
                    appData['satusCode'] = 201;
                    resolve(appData);
                    //res.status(201).json(appData);
                } else {
                    console.log('got error '+err);
                    appData['data'] = 'Error Occured!';
                    appData['satusCode'] = 400;
                    appData.error = err;
                    reject(appData);
                    //res.status(400).json(err);
                }
            });
        });
        
    })

    updateFlat = (req, searchData, updateValue) => new Promise((resolve, reject)=>{
        var appData = {
            'error': 1,
            'data': '',
            'satusCode':'',
            'dbResponse':''
        };
        console.log('searchData is ',searchData);
        console.log('update value is ', updateValue);
        try {

            database.connection.getConnection((err, connection)=> {
                connection.query(`update flat set ownerid = ${updateValue} where 
        societyid = ${searchData[0]} and buildingname = '${searchData[1]}' and 
        flatname = '${searchData[2]}'` ,function(err, rows) {
            connection.release();
            //console.log(temp.sql);
            if (!err) {
                console.log('updateFlat : Ok ');
                appData.error = 0;
                appData['data'] = 'User registered successfully!';
                appData['dbResponse'] = rows;
                appData['satusCode'] = 201;
                resolve(appData);
                //res.status(201).json(appData);
            } else {
                console.log('got error '+err);
                console.log(`query is ------------ update flat set ownerid = ${updateValue} where 
                societyid = ${searchData[0]} and buildingname = ${searchData[1]} and 
                flatname = ${searchData[2]}`);
                appData['data'] = 'Error Occured!';
                appData['satusCode'] = 400;
                appData.error = err;
                reject(appData);
                //res.status(400).json(err);
            }
        });
            });
        
        } catch(error){
            console.log('got error------',error);
            reject(error);

        }
    })


    registerOwner = (req) => new Promise((resolve, reject)=>{
        var appData = {
            'error': 1,
            'data': '',
            'satusCode':'',
            'dbResponse':''
        };
        var flatData = [req.body.societyId,req.body.buildingName, req.body.flatNumber];
        var ownerSearchData = [req.body.phoneNumber, req.body.email];
        var ownerInsertData =[req.body.ownerName, req.body.isAdmin, req.body.phoneNumber, 
            req.body.email, req.body.age, req.body.gender, req.body.password
            ];
            database.connection.getConnection((err, connection) => {
                connection.query('insert into owner(ownername,isadmin,phonenumber,email, age, gender, password) values (?,?,?,?,?,?,?)', ownerInsertData, (err) => {
                    //console.log(temp.sql);
                    connection.release();
                    if (!err) {
        
                        this.getOwner(null, ownerSearchData).then((response)=>{
                            console.log('this.getOwner : Ok ');

        
                            appData.error = 0;
                            //appData["data"] = "Owner id is "+dbResponse.rows[0].ownerid;
                            appData['ownerid'] = response.dbResponse[0].ownerid;
                            appData['satusCode'] = 201;                      
                            //resolve(appData);
                            return appData;
                           // res.status(dbResponse.satusCode).json(dbResponse);
                        }).then((appData)=>{
                            resolve(this.updateFlat(null, flatData, appData.ownerid));
                        }).catch((err)=>{
                            console.log('got error '+err);
                            appData['data'] = 'Error Occured!';
                            appData['satusCode'] = 400;
                            appData.error = err;
                            reject(appData);
                           // res.status(err.satusCode).json(err);
                        });
                        //res.status(201).json(appData);
                    } else {
                        console.log('got error '+err);
                        appData['data'] = 'Error Occured!';
                        appData['satusCode'] = 400;
                        appData.error = err;
                        reject(appData);
                        //res.status(400).json(err);
                    }
                });
            });
        
    })

    getDetails = (req) => new Promise((resolve, reject)=>{
        var appData = {
            'error': 1,
            'data': '',
            'satusCode':'',
            'dbResponse':''
        };

        console.log('req.params.tableName', req.params.tableName);
        database.connection.getConnection((err, connection) => {
            if(err){
                console.log('got error '+err);
                appData['satusCode'] = 500;
                appData.error = err;
                reject(appData);
            } else {
            connection.query(`select * from ${req.params.tableName}` ,function(err, rows) {
                //console.log(temp.sql);
                connection.release();
                if (!err) {
                    console.log('select query working fine '+rows);
                    appData.error = 0;
                    appData['dbResponse'] = rows;
                    appData['satusCode'] = 201;
                    resolve(appData);
                    //res.status(201).json(appData);
                } else {
                    console.log('got error '+err);
                    appData['satusCode'] = 400;
                    appData.error = err;
                    reject(appData);
                    //res.status(400).json(err);
                }
            });
        }
        });
        
    })

    getDetailsUsingQueryParam = (req) => new Promise((resolve, reject)=>{
        var appData = {
            'error': 1,
            'data': '',
            'satusCode':'',
            'dbResponse':''
        };

        console.log('req.params.tableName', req.params.tableName);
        database.connection.getConnection((err, connection)=> {
            connection.query(`select * from ${req.params.tableName} where ${req.params.columnName} = ${req.query.value}` ,function(err, rows) {
                //console.log(temp.sql);
                connection.release();
                if (!err) {
                    console.log('select query working fine '+rows);
                    appData.error = 0;
                    appData['dbResponse'] = rows;
                    appData['satusCode'] = 201;
                    resolve(appData);
                    //res.status(201).json(appData);
                } else {
                    console.log('got error '+err);
                    appData['satusCode'] = 400;
                    appData.error = err;
                    reject(appData);
                    //res.status(400).json(err);
                }
            });
        });
        
    })

    updatePendingPaymentOfFlat = (req) => new Promise((resolve, reject)=>{
        var appData = {
            'error': 1,
            'data': '',
            'satusCode':'',
            'dbResponse':''
        };

        console.log('req.params.tableName', req.params.tableName);
        database.connection.getConnection((err, connection) =>{
            connection.query(`update flat set pendingpayment = '${req.body.pendingPayment}' where ownerid =${req.body.ownerid} and flatId =${req.body.flatid}` ,function(err, rows) {
                //console.log(temp.sql);
                connection.release();
                if (!err) {
                    
                        console.log('pending payment successfully updated '+rows);
                        appData.error = 0;
                        appData['dbResponse'] = rows;
                        appData['satusCode'] = 201;
                        resolve(appData);
                    

                    //res.status(201).json(appData);
                } else {
                    console.log('got error '+err);
                    appData['satusCode'] = 400;
                    appData.error = err;
                    reject(appData);
                    //res.status(400).json(err);
                }
            });
        });
        
    })

    updatePaymentHistory = (req) => new Promise((resolve, reject)=>{
        var appData = {
            'error': 1,
            'data': '',
            'satusCode':'',
            'dbResponse':''
        };
        const currentDate = new Date();
        database.connection.getConnection((err, connection) => {
            connection.query(`insert into paymenthistory(flatid,paid,createddate,updateddate,ownerid) values (${req.body.flatid},${req.body.pendingPayment},'${currentDate.toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1 $2') }','${currentDate.toISOString().replace(/([^T]+)T([^\.]+).*/g, '$1 $2') }',${req.body.ownerid});`,function(err, rows) {
                //console.log(temp.sql);
                connection.release();
                if (!err) {
                    console.log('pending payment history successfully updated '+rows);
                    appData.error = 0;
                    appData['dbResponse'] = rows;
                    appData['satusCode'] = 201;
                    resolve(appData);
                    //res.status(201).json(appData);
                } else {
                    console.log('got error '+err);
                    appData['satusCode'] = 400;
                    appData.error = err;
                    reject(appData);
                    //res.status(400).json(err);
                }
            });
        });
        
    })
    registerBuilding = (req) => new Promise((resolve, reject)=>{
        var appData = {
            'error': 1,
            'data': '',
            'satusCode':'',
            'dbResponse':''
        };
        database.connection.getConnection((err, connection)=> {
            connection.query(`insert into building(buildingname, societyid) values
         ('${req.body.buildingName}',${req.body.societyid});`,function(err, rows) {
            //console.log(temp.sql);
            connection.release();
            if (!err) {
                console.log('pending payment history successfully updated '+rows);
                appData.error = 0;
                appData['dbResponse'] = rows;
                appData['satusCode'] = 201;
                resolve(appData);
                //res.status(201).json(appData);
            } else {
                console.log('got error '+err);
                appData['satusCode'] = 400;
                appData.error = err;
                reject(appData);
                //res.status(400).json(err);
            }
        });
        });
        
    })

    registerSociety = (req) => new Promise((resolve, reject)=>{
        var appData = {
            'error': 1,
            'data': '',
            'satusCode':'',
            'dbResponse':''
        };
        database.connection.getConnection((err, connection) =>{
            connection.query(`insert into society(societyName, address, pincode) values ('${req.body.societyName}', '${req.body.address}', '${req.body.pincode}');`,function(err, rows) {
                //console.log(temp.sql);
                connection.release();
                if (!err) {
                    console.log('Society is successfully Inserted'+rows);
                    appData.error = 0;
                    appData['dbResponse'] = rows;
                    appData['satusCode'] = 201;
                    resolve(appData);
                    //res.status(201).json(appData);
                } else {
                    console.log('got error '+err);
                    appData['satusCode'] = 400;
                    appData.error = err;
                    reject(appData);
                    //res.status(400).json(err);
                }
            });
        });
        
    })

    registerFlat = (req) => new Promise((resolve, reject)=>{
        var appData = {
            'error': 1,
            'data': '',
            'satusCode':'',
            'dbResponse':''
        };
        database.connection.getConnection((err, connection) =>{
            connection.query(`insert into flat(flatname, buildingname, societyid, ownerid) values ('${req.body.flatName}', '${req.body.buildingName}', ${req.body.societyId}, ${req.body.ownerId});`,function(err, rows) {
                //console.log(temp.sql);
                connection.release();
                if (!err) {
                    console.log('flat is successfully Inserted'+rows);
                    appData.error = 0;
                    appData['dbResponse'] = rows;
                    appData['satusCode'] = 201;
                    resolve(appData);
                    //res.status(201).json(appData);
                } else {
                    console.log('got error '+err);
                    appData['satusCode'] = 400;
                    appData.error = err;
                    reject(appData);
                    //res.status(400).json(err);
                }
            });
        });
        
    })
}

export default SocietyModel;