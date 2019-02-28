'use strict';

var _societyController = require('../controllers/societyController');

var _societyController2 = _interopRequireDefault(_societyController);

var _userValidator = require('./../../users/validator/userValidator');

var _userValidator2 = _interopRequireDefault(_userValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();
var cors = require('cors');

var societyController = new _societyController2.default();
var userValidator = new _userValidator2.default();
router.use(cors());
router.post('/owner/list', societyController.getOwnerList);

/******Add Api********/
router.post('/registerBuilding', societyController.registerBuilding);
router.post('/paymentstructure', societyController.insertOrUpdatePaymentStructure);
router.post('/registerFlat', societyController.registerFlat);
router.post('/registerSociety', societyController.registerSociety);
router.post('/registerOwner', societyController.registerOwner);
router.post('/storedProc', societyController.callStoredProc);
/******Update Api******/
router.post('/updateBuilding', societyController.updateBuilding);
router.post('/updateFlat', societyController.updateFlat);
router.post('/updateSociety', societyController.updateSociety);
router.post('/updateOwner', societyController.updateOwner);
router.put('/paymentstructure', societyController.insertOrUpdatePaymentStructure);

/*******Delete Api*********/
router.delete('/delete', societyController.deleteRow);

/*******Update Pending Payment Api*************/
router.put('/flat/pendingPayment', userValidator.validateUser, societyController.updatePendingPaymentOfFlat);

/********Search******/
router.get('/:tableName/:columnName1/:columnName2', societyController.getDetailsUsingMultiParam);
router.get('/:tableName/:columnName', societyController.getDetailsUsingQueryParam);
router.get('/:tableName', societyController.getDetails);

module.exports = router;
//# sourceMappingURL=societyRouter.js.map