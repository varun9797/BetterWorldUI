'use strict';

var _societyController = require('../controllers/societyController');

var _societyController2 = _interopRequireDefault(_societyController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require("express");
var router = express.Router();
var cors = require('cors');
var jwt = require('jsonwebtoken');

var societyController = new _societyController2.default();
router.use(cors());
router.post('/registerOwner', societyController.registerOwner);

module.exports = router;
//# sourceMappingURL=societyRouter.js.map