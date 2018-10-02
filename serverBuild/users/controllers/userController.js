'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var database = require('./../../../database/database');
var cors = require('cors');
var jwt = require('jsonwebtoken');
process.env.SECRET_KEY = "varunv";

var UserController = function UserController() {
    _classCallCheck(this, UserController);

    this.createTable = function (req, res) {
        var appData = {
            "error": 1,
            "data": ""
        };
        var query = req.body.query;
        console.log("query is " + query);
        console.log("query in stringify is " + JSON.stringify(query));
        database.connection.query(query, function (err, rows, fields) {
            if (!err) {
                console.log("query executed successfully successfully " + JSON.stringify(rows));
                appData.error = 0;
                appData["data"] = "User registered successfully!";
                res.status(201).json(appData);
            } else {
                console.log("Query Exception " + err);
                appData["data"] = "Error Occured!";
                res.status(400).json(err);
            }
        });
    };

    this.registerUser = function (req, res) {
        var today = new Date();
        var appData = {
            "error": 1,
            "data": ""
        };
        var userData = {
            "id": req.body.id,
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "email": req.body.email,
            "password": req.body.password

            /*database.connection.getConnection(function(err, connection) {
                if (err) {
                    appData["error"] = 1;
                    appData["data"] = "Internal Server Error";
                    res.status(500).json(appData);
                } else {
                    connection.query('INSERT INTO users SET ?', userData, function(err, rows, fields) {
                        if (!err) {
                            appData.error = 0;
                            appData["data"] = "User registered successfully!";
                            res.status(201).json(appData);
                        } else {
                            appData["data"] = "Error Occured!";
                            res.status(400).json(err);
                        }
                    });
                    connection.release();
                }
            });*/
        };database.connection.query('INSERT INTO users SET ?', userData, function (err, rows, fields) {
            if (!err) {
                console.log("query is working fine " + rows);
                appData.error = 0;
                appData["data"] = "User registered successfully!";
                res.status(201).json(appData);
            } else {
                console.log("got error " + err);
                appData["data"] = "Error Occured!";
                res.status(400).json(err);
            }
        });
    };

    this.loginUser = function (req, res) {
        var appData = {};
        var email = req.body.email;
        var password = req.body.password;

        database.connection.getConnection(function (err, connection) {
            if (err) {
                appData["error"] = 1;
                appData["data"] = "Internal Server Error";
                res.status(500).json(appData);
            } else {
                connection.query('SELECT * FROM users WHERE email = ?', [email], function (err, rows, fields) {
                    if (err) {
                        appData.error = 1;
                        appData["data"] = "Error Occured!";
                        res.status(400).json(appData);
                    } else {
                        if (rows.length > 0) {
                            if (rows[0].password == password) {
                                console.log("rows[0] " + JSON.stringify(rows[0]));
                                var token = jwt.sign(rows[0], process.env.SECRET_KEY, {
                                    expiresIn: 1440
                                });
                                appData.error = 0;
                                appData["token"] = token;
                                res.status(200).json(appData);
                            } else {
                                appData.error = 1;
                                appData["data"] = "Email and Password does not match";
                                res.status(204).json(appData);
                            }
                        } else {
                            appData.error = 1;
                            appData["data"] = "Email does not exists!";
                            res.status(204).json(appData);
                        }
                    }
                });
                connection.release();
            }
        });
    };

    this.getUser = function (req, res) {
        var appData = {};

        database.connection.getConnection(function (err, connection) {
            if (err) {
                appData["error"] = 1;
                appData["data"] = "Internal Server Error";
                res.status(500).json(appData);
            } else {
                connection.query('SELECT *FROM users', function (err, rows, fields) {
                    if (!err) {
                        appData["error"] = 0;
                        appData["data"] = rows;
                        res.status(200).json(appData);
                    } else {
                        appData["data"] = "No data found";
                        res.status(204).json(appData);
                    }
                });
                connection.release();
            }
        });
    };
};

exports.default = UserController;
//# sourceMappingURL=userController.js.map