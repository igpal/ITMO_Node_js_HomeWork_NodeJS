let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/task3', (req, res, next) => {
    console.log('Параметры POST запроса: ' + JSON.stringify(req.body));
    res.send(JSON.stringify(req.body));
});
module.exports = router;