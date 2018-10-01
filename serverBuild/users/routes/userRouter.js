'use strict';

var _userController = require('./../controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

var _userController3 = require('./../validator/userController');

var _userController4 = _interopRequireDefault(_userController3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require("express");
var router = express.Router();
var cors = require('cors');
var jwt = require('jsonwebtoken');

var userController = new _userController2.default();
var userValidator = new _userController4.default();
router.use(cors());
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/getUser', userValidator.validateUser, userController.getUser);

module.exports = router;
//# sourceMappingURL=userRouter.js.map