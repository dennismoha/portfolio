var express = require('express');
const email = require('../controller')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/portfolio-details', (req, res) => {
    res.render('portfolio-details')
})

router.post('/messages', email.sendmail)

module.exports = router;