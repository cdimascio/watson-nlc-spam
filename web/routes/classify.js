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
    console.dir(process.env);
    console.log(process.env.VCAP_SERVICES.user_provided[0].credentials);
    return process.env.VCAP_SERVICES.user_provided[0].credentials;
    //return {
    //  "url": "https://gateway.watsonplatform.net/natural-language-classifier-experimental/api",
    //  "username": "4b1b9671-e876-46d0-8e72-65d640624b6c",
    //  "password": "Zm9spFkRXJUM"
    //}
  }
}



module.exports = router;
