'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _societyModel = require('./../models/societyModel');

var _societyModel2 = _interopRequireDefault(_societyModel);

var _blockchain = require('./../../blockchain/blockchain');

var _blockchain2 = _interopRequireDefault(_blockchain);

var _block = require('../../blockchain/block');

var _block2 = _interopRequireDefault(_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

process.env.SECRET_KEY = 'varunv';

var SocietyController = function SocietyController() {
    var _this = this;

    _classCallCheck(this, SocietyController);

    this.registerOwner = function (req, res) {
        _this.societyModel.registerOwner(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            console.log('catch block of registerOwner ', err);
            res.status(err.satusCode).json(err);
        });
    };

    this.getDetails = function (req, res) {
        //console.log('checking auto deploye1111');
        _this.societyModel.getDetails(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            console.log('catch block of getDetails', err);
            res.status(err.satusCode).json(err);
        });
    };

    this.getDetailsUsingQueryParam = function (req, res) {
        //console.log(`select * from ${req.params.tableName} where ${req.params.columnName} = ${req.query.value}`);
        _this.societyModel.getDetailsUsingQueryParam(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            console.log('catch block of getDetailsUsingQueryParam', err);
            res.status(err.satusCode).json(err);
        });
    };

    this.updatePendingPaymentOfFlat = function (req, res) {
        //console.log(`update flat set pendingpayment = '${req.body.pendingPayment}' where ownerid =${req.body.ownerid} and flatId =${req.body.flatid};`);
        _this.societyModel.updatePendingPaymentOfFlat(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
            // console.log('updatePendingPaymentOfFlat successfully done!!');
            // this.updatePaymentHistory(req, (resFlag, responseData)=>{
            //     if(resFlag){
            //res.status(dbResponse.satusCode).json(responseData);
            // } else {

            //     res.status(400).json(responseData);
            // }
            //});
        }).catch(function (err) {
            console.log('catch block of updatePendingPaymentOfFlat', err);
            res.status(err.satusCode).json(err);
        });
    };

    this.updatePaymentHistory = function (reqBody, callback) {
        var currentDate = new Date();
        //console.log(`update paymentHistory set paymentHistory = '${req.body.pendingPayment}' where ownerid =${req.body.ownerid} and flatId =${req.body.flatid};`)
        //console.log(`insert into paymenthistory(flatid,paid,ownerid) values (${reqBody.body.flatid},${reqBody.body.pendingPayment},${reqBody.body.ownerid});`);
        _this.societyModel.updatePaymentHistory(reqBody).then(function (dbResponse) {
            callback(true, dbResponse);
        }).catch(function (err) {
            console.log('catch block of updatePaymentHistory', err);
            callback(false, err);
        });
    };

    this.registerBuilding = function (req, res) {
        console.log('insert into building(buildingname, societyid) values\n        (' + req.body.buildingName + ',\'' + req.body.societyid + '\');');
        _this.societyModel.registerBuilding(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            console.log('catch block of registerBuilding ', err);
            res.status(err.satusCode).json(err);
        });
    };

    this.registerSociety = function (req, res) {
        console.log('society register query is--- \n        insert into society(societyName, address, pincode) values \n        (\'' + req.body.societyName + '\', \'' + req.body.address + '\', \'' + req.body.pincode + '\'');
        _this.societyModel.registerSociety(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            console.log('catch block of registerSociety ', err);
            res.status(err.satusCode).json(err);
        });
    };

    this.getOwnerList = function (req, res) {
        console.log('call get_owner_details(' + req.body.societyIds + ', ' + req.body.buildingNames + ', ' + req.body.flatIds + ')');
        _this.societyModel.getOwnerList(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            console.log('catch block of getOwnerList ', err);
            res.status(err.satusCode).json(err);
        });
    };

    this.registerFlat = function (req, res) {
        console.log('insert into flat(flatname, buildingname, societyid) values (\'' + req.body.flatName + '\', \'' + req.body.buildingName + '\', ' + req.body.societyId + ');');
        _this.societyModel.registerFlat(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            console.log('catch block of registerFlat ', err);
            res.status(err.satusCode).json(err);
        });
    };

    this.deleteRow = function (req, res) {
        console.log('delete from ' + req.body.tableName + ' where ' + req.body.columnName + ' = ' + req.body.columnValue);
        _this.societyModel.deleteRow(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            console.log('catch block of registerOwner ', err);
            res.status(err.satusCode).json(err);
        });
    };

    this.updateBuilding = function (req, res) {
        console.log('insert into building(buildingname, societyid) values\n        (' + req.body.buildingName + ',\'' + req.body.societyid + '\');');
        _this.societyModel.updateBuilding(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            console.log('catch block of updateBuilding ', err);
            res.status(err.satusCode).json(err);
        });
    };

    this.updateSociety = function (req, res) {
        console.log('society register query is--- \n        insert into society(societyName, address, pincode) values \n        (\'' + req.body.societyName + '\', \'' + req.body.address + '\', \'' + req.body.pincode + '\'');
        _this.societyModel.updateSociety(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            console.log('catch block of updateSociety ', err);
            res.status(err.satusCode).json(err);
        });
    };

    this.updateFlat = function (req, res) {
        console.log('insert into flat(flatname, buildingname, societyid) values (\'' + req.body.flatName + '\', \'' + req.body.buildingName + '\', ' + req.body.societyId + ');');
        // this.societyModel.updateFlat(req).then((dbResponse)=>{
        //     res.status(dbResponse.satusCode).json(dbResponse);
        // }).catch((err)=>{
        //     console.log('catch block of updateFlat ',err);
        //     res.status(err.satusCode).json(err);
        // });
        res.status(200).json({ dbResponse: 'need to implement functionality' });
    };

    this.updateOwner = function (req, res) {
        _this.societyModel.updateOwner(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            console.log('catch block of updateOwner ', err);
            res.status(err.satusCode).json(err);
        });
    };

    this.getDetailsUsingMultiParam = function (req, res) {
        _this.societyModel.getDetailsUsingMultiParam(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            console.log('catch block of updateOwner ', err);
            res.status(err.satusCode).json(err);
        });
    };

    this.callStoredProc = function (req, res) {
        _this.societyModel.callStoredProc(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            console.log('catch block of callStoredProc ', err);
            res.status(err.satusCode).json(err);
        });
    };

    this.insertPaymentStructure = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _this.societyModel.insertPaymentStructure(req).then(function () {
                                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dbResponse) {
                                    var body, totalAmount, paymentStructureId, result;
                                    return _regenerator2.default.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    body = req.body;
                                                    totalAmount = (body.buildingMaintenance || 0) + (body.parkingMaintenance || 0) + (body.municipalDue || 0) + (body.sinkingFund || 0) + (body.electricityCharge || 0);
                                                    paymentStructureId = dbResponse.dbResponse.insertId;
                                                    _context.next = 5;
                                                    return _this.getFlatIdsByOwnerId(req.body.updatedBy, totalAmount, paymentStructureId);

                                                case 5:
                                                    result = _context.sent;

                                                    res.status(dbResponse.satusCode).json(result);

                                                case 7:
                                                case 'end':
                                                    return _context.stop();
                                            }
                                        }
                                    }, _callee, _this);
                                }));

                                return function (_x3) {
                                    return _ref2.apply(this, arguments);
                                };
                            }()).catch(function (err) {
                                console.log('catch block of callStoredProc ', err);
                                res.status(err.satusCode).json(err);
                            });

                        case 1:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();

    this.getFlatIdsByOwnerId = function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ownerId, totalAmount, paymentStructureId) {
            var ids, recieptArray, response;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return _this.societyModel.getFlatIdsByOwnerId(ownerId);

                        case 3:
                            ids = _context3.sent;
                            recieptArray = _this.createPaymentRecieptArray(ids, totalAmount, paymentStructureId);
                            _context3.next = 7;
                            return _this.insertRecieptArray(recieptArray);

                        case 7:
                            response = _context3.sent;
                            return _context3.abrupt('return', response);

                        case 11:
                            _context3.prev = 11;
                            _context3.t0 = _context3['catch'](0);

                            console.log(_context3.t0);
                            return _context3.abrupt('return', _context3.t0);

                        case 15:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this, [[0, 11]]);
        }));

        return function (_x4, _x5, _x6) {
            return _ref3.apply(this, arguments);
        };
    }();

    this.insertRecieptArray = function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(recieptArray) {
            var response;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return _this.societyModel.insertPaymentReceipt(recieptArray);

                        case 3:
                            response = _context4.sent;

                            response.dbResponse = 'payment Reciept inserted successfully!!';
                            return _context4.abrupt('return', response);

                        case 8:
                            _context4.prev = 8;
                            _context4.t0 = _context4['catch'](0);

                            console.log(_context4.t0);

                        case 11:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this, [[0, 8]]);
        }));

        return function (_x7) {
            return _ref4.apply(this, arguments);
        };
    }();

    this.createPaymentRecieptArray = function (ids, totalAmount, paymentStructureId) {
        var recieptArray = [];
        var innerArray = void 0;
        ids.dbResponse.forEach(function (element) {
            innerArray = [];
            innerArray.push(element.flatid);
            innerArray.push(totalAmount);
            innerArray.push(paymentStructureId);
            recieptArray.push(innerArray);
        });
        return recieptArray;
    };

    this.societyModel = new _societyModel2.default();
    this.blockChain = new _blockchain2.default();
}

// getDetails= (req, res) =>{
//     console.log('checking auto deploye1111');
//     this.societyModel.getDetails(req).then((dbResponse)=>{
//         if(req.params.tableName == 'flat'){
//             console.log('*****Inside flat table*******');
//             dbResponse.dbResponse.forEach((element,i) => {
//                 this.blockChain.addBlock(new Block(i,'12/2/2029',element));
//                 console.log('wait dude new block is in progress....');
//             });

//             console.log('is valid',this.blockChain.isChainValid());
//             this.blockChain.chain[3].data = 'temprored';
//             console.log('is valid',this.blockChain.isChainValid());
//             res.status(dbResponse.satusCode).json(this.blockChain);
//         }
//       //  res.status(dbResponse.satusCode).json(dbResponse);
//     }).catch((err)=>{
//         console.log('catch block of getDetails',err);
//         res.status(err.satusCode).json(err);
//     });
// }
;

exports.default = SocietyController;
//# sourceMappingURL=societyController.js.map