const express   = require('express');
const router    = express.Router();
const seneca    = require('seneca')();

router.get('/', function(req, res, next) {
    let net = req.query.net;
    seneca
    .client({ host: 'clientservice' })//giving the image name of second microservice
    .act(`role:client,cmd:salestax,net:${net}`, async function (err, result) {
        if(result)
            res.render('index', { title: 'Express',total: result.total });       
        if(err)
            res.status(500).json({"Error":err});
    })
});

module.exports = router;