const router = require('express').Router();
const notFound = require('../middlewares/errors');
const contactsRouter = require('./contacts.router');

router.use('/contacts', contactsRouter);

module.exports = router;
