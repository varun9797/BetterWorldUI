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
            database.connection.query("select ownerid from owner where phonenumber = $1, email = $2 ", searchData, function (err, rows) {
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
            var ownerInsertData = [req.body.ownerName, req.body.isAdmin, req.body.phoneNumber, req.body.email, req.body.age, req.body.gender];
            database.connection.query('insert into owner(ownername,isadmin,phonenumber,email, age, gender) values ($1, $2, $3, $4, $5, $6)', ownerInsertData, function (err, rows) {
                if (!err) {

                    _this.getOwner(null, ownerSearchData).then(function (dbResponse) {
                        console.log("select query is working fine " + dbResponse);
                        appData.error = 0;
                        appData["data"] = "User registered successfully!";
                        appData["dbResponse"] = dbResponse;
                        appData["satusCode"] = 201;
                        resolve(appData);
                        // res.status(dbResponse.satusCode).json(dbResponse);
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
};

exports.default = SocietyModel;
//# sourceMappingURL=societyModel.js.map