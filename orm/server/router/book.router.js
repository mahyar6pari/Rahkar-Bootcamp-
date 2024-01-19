const express = require('express');
const {joinedTables,addBookData} = require('../controller/book.constooller');

const router = express.Router()

router.post('/book',addBookData)
      .post('/',joinedTables)

module.exports = router