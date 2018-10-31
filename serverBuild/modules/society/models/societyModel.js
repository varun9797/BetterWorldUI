'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var database = require('./../../../../database/database');
var cors = require('cors');
var jwt = require('jsonwebtoken');
process.env.SECRET_KEY = "varunv";

var SocietyModel = function SocietyModel() {
    var _this = this;

    _classCallCheck(this, SocietyModel);

    this.getOwner = function (req, searchData) {
        return new Promise(function (resolve, reject) {
            var appData = {
                "error": 1,
                "data": "",
                "satusCode": "",
                "dbResponse": ""
            };
            database.connection.query("select ownerid from owner where phonenumber = $1 and email = $2 ", searchData, function (err, rows) {
                //console.log(temp.sql);
                if (!err) {
                    console.log("select owner query working fine " + rows);
                    appData.error = 0;
                    appData["data"] = "User registered successfully!";
                    appData["dbResponse"] = rows;
                    appData["satusCode"] = 201;
                    resolve(appData);
                    //res.status(201).json(appData);
                } else {
                    console.log("got error " + err);
                    appData["data"] = "Error Occured!";
                    appData["satusCode"] = 400;
                    appData.error = err;
                    reject(appData);
                    //res.status(400).json(err);
                }
            });
        });
    };

    this.updateFlat = function (req, searchData, updateValue) {
        return new Promise(function (resolve, reject) {
            var appData = {
                "error": 1,
                "data": "",
                "satusCode": "",
                "dbResponse": ""
            };
            console.log("searchData is ", searchData);
            console.log("update value is ", updateValue);
            try {

                database.connection.query('update flat set ownerid = ' + updateValue + ' where \n        societyid = ' + searchData[0] + ' and buildingname = \'' + searchData[1] + '\' and \n        flatname = \'' + searchData[2] + '\'', function (err, rows) {
                    //console.log(temp.sql);
                    if (!err) {
                        console.log("select owner query working fine " + rows);
                        appData.error = 0;
                        appData["data"] = "User registered successfully!";
                        appData["dbResponse"] = rows;
                        appData["satusCode"] = 201;
                        resolve(appData);
                        //res.status(201).json(appData);
                    } else {
                        console.log("got error " + err);
                        console.log('query is ------------ update flat set ownerid = ' + updateValue + ' where \n                societyid = ' + searchData[0] + ' and buildingname = ' + searchData[1] + ' and \n                flatname = ' + searchData[2]);
                        appData["data"] = "Error Occured!";
                        appData["satusCode"] = 400;
                        appData.error = err;
                        reject(appData);
                        //res.status(400).json(err);
                    }
                });
            } catch (error) {
                console.log("got error------", error);
                reject(error);
            }
        });
    };

    this.registerOwner = function (req) {
        return new Promise(function (resolve, reject) {
            var today = new Date();
            var appData = {
                "error": 1,
                "data": "",
                "satusCode": "",
                "dbResponse": ""
            };
            var flatData = [req.body.societyId, req.body.buildingName, req.body.flatNumber];
            var ownerSearchData = [req.body.phoneNumber, req.body.email];
            var ownerInsertData = [req.body.ownerName, req.body.isAdmin, req.body.phoneNumber, req.body.email, req.body.age, req.body.gender, req.body.password];
            database.connection.query('insert into owner(ownername,isadmin,phonenumber,email, age, gender, password) values ($1, $2, $3, $4, $5, $6, $7)', ownerInsertData, function (err, rows) {
                //console.log(temp.sql);
                if (!err) {

                    _this.getOwner(null, ownerSearchData).then(function (response) {
                        console.log("select owner query is working fine " + JSON.stringify(response));
                        console.log("dbResponse.rows is ", JSON.stringify(response.dbResponse.rows));
                        console.log("dbResponse.rows[0] is ", JSON.stringify(response.dbResponse.rows[0]));
                        console.log("dbResponse.rows[0].ownerid is ", JSON.stringify(response.dbResponse.rows[0].ownerid));

                        appData.error = 0;
                        //appData["data"] = "Owner id is "+dbResponse.rows[0].ownerid;
                        appData["ownerid"] = response.dbResponse.rows[0].ownerid;
                        appData["satusCode"] = 201;
                        //resolve(appData);
                        return appData;
                        // res.status(dbResponse.satusCode).json(dbResponse);
                    }).then(function (appData) {
                        resolve(_this.updateFlat(null, flatData, appData.ownerid));
                    }).catch(function (err) {
                        console.log("got error " + err);
                        appData["data"] = "Error Occured!";
                        appData["satusCode"] = 400;
                        appData.error = err;
                        reject(appData);
                        // res.status(err.satusCode).json(err);
                    });
                    //res.status(201).json(appData);
                } else {
                    console.log("got error " + err);
                    appData["data"] = "Error Occured!";
                    appData["satusCode"] = 400;
                    appData.error = err;
                    reject(appData);
                    //res.status(400).json(err);
                }
            });
        });
    };

    this.getDetails = function (req) {
        return new Promise(function (resolve, reject) {
            var appData = {
                "error": 1,
                "data": "",
                "satusCode": "",
                "dbResponse": ""
            };

            console.log("req.params.tableName", req.params.tableName);
            database.connection.query('select * from ' + req.params.tableName, function (err, rows) {
                //console.log(temp.sql);
                if (!err) {
                    console.log("select query working fine " + rows);
                    appData.error = 0;
                    appData["dbResponse"] = rows;
                    appData["satusCode"] = 201;
                    resolve(appData);
                    //res.status(201).json(appData);
                } else {
                    console.log("got error " + err);
                    appData["satusCode"] = 400;
                    appData.error = err;
                    reject(appData);
                    //res.status(400).json(err);
                }
            });
        });
    };

    this.getDetailsUsingQueryParam = function (req) {
        return new Promise(function (resolve, reject) {
            var appData = {
                "error": 1,
                "data": "",
                "satusCode": "",
                "dbResponse": ""
            };

            console.log("req.params.tableName", req.params.tableName);
            database.connection.query('select * from ' + req.params.tableName + ' where ' + req.params.columnName + ' = ' + req.query.value, function (err, rows) {
                //console.log(temp.sql);
                if (!err) {
                    console.log("select query working fine " + rows);
                    appData.error = 0;
                    appData["dbResponse"] = rows;
                    appData["satusCode"] = 201;
                    resolve(appData);
                    //res.status(201).json(appData);
                } else {
                    console.log("got error " + err);
                    appData["satusCode"] = 400;
                    appData.error = err;
                    reject(appData);
                    //res.status(400).json(err);
                }
            });
        });
    };

    this.updatePendingPaymentOfFlat = function (req) {
        return new Promise(function (resolve, reject) {
            var appData = {
                "error": 1,
                "data": "",
                "satusCode": "",
                "dbResponse": ""
            };

            console.log("req.params.tableName", req.params.tableName);
            database.connection.query('update flat set pendingpayment = \'' + req.body.pendingPayment + '\' where ownerid =' + req.body.ownerid + ' and flatId =' + req.body.flatid, function (err, rows) {
                //console.log(temp.sql);
                if (!err) {
                    console.log("pending payment successfully updated " + rows);
                    appData.error = 0;
                    appData["dbResponse"] = rows;
                    appData["satusCode"] = 201;
                    resolve(appData);
                    //res.status(201).json(appData);
                } else {
                    console.log("got error " + err);
                    appData["satusCode"] = 400;
                    appData.error = err;
                    reject(appData);
                    //res.status(400).json(err);
                }
            });
        });
    };

    this.updatePaymentHistory = function (req) {
        return new Promise(function (resolve, reject) {
            var appData = {
                "error": 1,
                "data": "",
                "satusCode": "",
                "dbResponse": ""
            };
            var currentDate = new Date();

            database.connection.query('insert into paymenthistory(flatid,paid,createddate,updateddate,ownerid) values (' + reqBody.body.flatid + ',' + reqBody.body.pendingPayment + ',' + currentDate.toISOString() + ',' + currentDate.toISOString() + ',' + reqBody.body.ownerid + ');', function (err, rows) {
                //console.log(temp.sql);
                if (!err) {
                    console.log("pending payment history successfully updated " + rows);
                    appData.error = 0;
                    appData["dbResponse"] = rows;
                    appData["satusCode"] = 201;
                    resolve(appData);
                    //res.status(201).json(appData);
                } else {
                    console.log("got error " + err);
                    appData["satusCode"] = 400;
                    appData.error = err;
                    reject(appData);
                    //res.status(400).json(err);
                }
            });
        });
    };
};

exports.default = SocietyModel;
//# sourceMappingURL=societyModel.js.map