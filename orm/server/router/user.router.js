const express = require('express');
const { addUserData } = require('../controller/user.controller');

const router = express.Router()

router.post('/user',addUserData )

module.exports = router