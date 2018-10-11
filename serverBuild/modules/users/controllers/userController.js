'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _userModel = require('./../models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = function UserController() {
    _classCallCheck(this, UserController);

    _initialiseProps.call(this);

    var userModel = new _userModel2.default();
};

var _initialiseProps = function _initialiseProps() {
    this.executeQuery = function (req, res) {
        userModel.executeQuery(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            res.status(dbResponse.satusCode).json(err);
        });
    };

    this.registerUser = function (req, res) {
        userModel.registerUser(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            res.status(dbResponse.satusCode).json(err);
        });
    };

    this.loginUser = function (req, res) {
        userModel.loginUser(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            res.status(dbResponse.satusCode).json(err);
        });
    };

    this.getUser = function (req, res) {
        userModel.getUser(req).then(function (dbResponse) {
            res.status(dbResponse.satusCode).json(dbResponse);
        }).catch(function (err) {
            res.status(dbResponse.satusCode).json(err);
        });
    };
};

exports.default = UserController;
//# sourceMappingURL=userController.js.map