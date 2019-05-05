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

    this.insertOrUpdatePaymentStructure = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _this.societyModel.insertOrUpdatePaymentStructure(req).then(function () {
                                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dbResponse) {
                                    var body, totalAmount, idsArray, response, recieptArray, paymentStructureId, _recieptArray;

                                    return _regenerator2.default.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    body = req.body;
                                                    totalAmount = (body.buildingMaintenance || 0) + (body.parkingMaintenance || 0) + (body.municipalDue || 0) + (body.sinkingFund || 0) + (body.electricityCharge || 0);
                                                    _context.next = 4;
                                                    return _this.getFlatIdsByOwnerId(req.body.updatedBy);

                                                case 4:
                                                    idsArray = _context.sent;
                                                    response = void 0;

                                                    if (!(req.method == 'PUT')) {
                                                        _context.next = 16;
                                                        break;
                                                    }

                                                    _context.next = 9;
                                                    return _this.disableCurrentRecieptIds(body.id);

                                                case 9:
                                                    response = _context.sent;
                                                    recieptArray = _this.createPaymentRecieptArray(idsArray, totalAmount, body.id);
                                                    _context.next = 13;
                                                    return _this.insertRecieptArray(recieptArray);

                                                case 13:
                                                    response = _context.sent;
                                                    _context.next = 21;
                                                    break;

                                                case 16:
                                                    paymentStructureId = dbResponse.dbResponse.insertId;
                                                    _recieptArray = _this.createPaymentRecieptArray(idsArray, totalAmount, paymentStructureId);
                                                    _context.next = 20;
                                                    return _this.insertRecieptArray(_recieptArray);

                                                case 20:
                                                    response = _context.sent;

                                                case 21:
                                                    res.status(dbResponse.satusCode).json(response);

                                                case 22:
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
                                console.log('catch block of insertOrUpdatePaymentStructure ', err);
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
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ownerId) {
            var ids;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return _this.societyModel.getFlatIdsByOwnerId(ownerId);

                        case 3:
                            ids = _context3.sent;
                            return _context3.abrupt('return', ids);

                        case 7:
                            _context3.prev = 7;
                            _context3.t0 = _context3['catch'](0);

                            console.log('catch block of getFlatIdsByOwnerId', _context3.t0);
                            throw _context3.t0;

                        case 11:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this, [[0, 7]]);
        }));

        return function (_x4) {
            return _ref3.apply(this, arguments);
        };
    }();

    this.disableCurrentRecieptIds = function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(paymentStructureId) {
            var ids;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return _this.societyModel.disableCurrentRecieptIds(paymentStructureId);

                        case 3:
                            ids = _context4.sent;
                            return _context4.abrupt('return', ids);

                        case 7:
                            _context4.prev = 7;
                            _context4.t0 = _context4['catch'](0);

                            console.log('catch block of disableCurrentRecieptIds', _context4.t0);
                            throw _context4.t0;

                        case 11:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this, [[0, 7]]);
        }));

        return function (_x5) {
            return _ref4.apply(this, arguments);
        };
    }();

    this.insertRecieptArray = function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(recieptArray) {
            var response;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.prev = 0;
                            _context5.next = 3;
                            return _this.societyModel.insertRecieptArray(recieptArray);

                        case 3:
                            response = _context5.sent;

                            response.dbResponse = 'payment Reciept inserted successfully!!';
                            return _context5.abrupt('return', response);

                        case 8:
                            _context5.prev = 8;
                            _context5.t0 = _context5['catch'](0);

                            console.log('catch block of insertRecieptArray', _context5.t0);
                            throw _context5.t0;

                        case 12:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, _this, [[0, 8]]);
        }));

        return function (_x6) {
            return _ref5.apply(this, arguments);
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