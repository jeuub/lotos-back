const { Router } = require('express');
const {getCheckOutHandler, postCheckOutHandler} = require('./handlers/CheckOutHandler')
const router = Router();

router.route('/').get(getCheckOutHandler).post(postCheckOutHandler);

module.exports = router;