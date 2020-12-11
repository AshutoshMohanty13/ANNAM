const { check } = require('express-validator');
const { exists } = require('../../model/customer');

exports.registrationValidations = [
    check('name', 'name should have only alphabets and is required').isAlpha().exists(),
    check('email','email is required'),exists().isEmail(),
    check('password', 'password should be alphaNumaric and above 8 characters and is required').isAlphanumeric().exists().isLength({ min: 8 }),
    check('number', 'phone number is required').exists().isNumeric()
]