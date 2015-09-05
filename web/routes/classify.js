var express = require('express');
var router = express.Router();

var classifierId = 'FD882C-nlc-4';

router.post('/', function(req, res, next) {
  classify(req, res);
});


function classify(req, res) {
  var creds = creds();
  require('request').post({
    uri : creds.url+'/v1/classifiers/'+classifierId+'/classify',
    auth: {
      user: creds.username,
      pass: creds.password ,
      sendImmediately: false
    },
    headers : [{
      name: 'Content-Type',
      value: 'application/json'
    }],
    body: req.body,
    json: true
  },function(err,resp,body) {
    if (err) {
      res.status(500).send(err);
    } else {
      if (resp.statusCode !== 200) {
        res.status(resp.statusCode).send()
      }
      res.json(body);
    }
  });

  function creds() {
    // Extract Bluemix creds for Watson NLC service
    return (JSON.parse(process.env.VCAP_SERVICES)).natural_language_classifier[0].credentials;
  }
}



module.exports = router;
