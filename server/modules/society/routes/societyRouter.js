var express = require("express");
var router = express.Router();
var cors = require('cors');
var jwt = require('jsonwebtoken');

import SocietyController from "../controllers/societyController";


const societyController = new SocietyController();
router.use(cors());
router.post('/registerOwner',societyController.registerOwner);
router.put('/flat/pendingPayment',societyController.updatePendingPaymentOfFlat);
router.get('/:tableName/:columnName',societyController.getDetailsUsingQueryParam);
router.get('/:tableName',societyController.getDetails);


module.exports = router;