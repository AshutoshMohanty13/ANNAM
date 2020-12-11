const express = require("express");
const router = express.Router();
const registerCustomer = require('../controllers/customers');
const customerValidation = require('../utils/validation/customerValidations');

router.post('/customers/registerCustomer', )