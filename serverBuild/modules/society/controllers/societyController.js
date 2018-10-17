'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _societyModel = require('./../models/societyModel');

var _societyModel2 = _interopRequireDefault(_societyModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var database = require('../../../../database/database');
var cors = require('cors');
var jwt = require('jsonwebtoken');

process.env.SECRET_KEY = "varunv";

var SocietyController = function SocietyController() {
    var _this = this;

    _classCallCheck(this, SocietyController);

    this.registerOwner = function (req, res) {
        _this.societyModel.registerOwner(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            res.status(err.satusCode).json(err);
        });
    };

    this.getDetails = function (req, res) {
        _this.societyModel.getDetails(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            res.status(err.satusCode).json(err);
        });
    };

    this.societyModel = new _societyModel2.default();
};

exports.default = SocietyController;
//# sourceMappingURL=societyController.js.map