'use strict';

var _societyController = require('../controllers/societyController');

var _societyController2 = _interopRequireDefault(_societyController);

var _userController = require('./../validator/userController');

var _userController2 = _interopRequireDefault(_userController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require("express");
var router = express.Router();
var cors = require('cors');
var jwt = require('jsonwebtoken');

var userController = new _societyController2.default();
var userValidator = new _userController2.default();
router.use(cors());
router.post('/executeQuery', userController.executeQuery);
router.post('/createOwner', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/getUser', userValidator.validateUser, userController.getUser);

module.exports = router;
//# sourceMappingURL=societyRouter.js.map