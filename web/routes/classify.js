var express = require('express');
var router = express.Router();
var request = require('request');
var NLC = require('watson-developer-cloud/natural-language-classifier/v1');

var classifierId = '3EF77E-nlc-312';

router.post('/', function(req, res, next) {
  classify(req, res);
});

function classify(req, res) {
  var creds = creds();
  console.log(req.body);
  var nlc = new NLC(creds);
  console.log('here');
  nlc.classify(
    {
      text: req.body.text,
      classifier_id: classifierId,
    },
    function(err, response) {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.json(response);
      }
    }
  );

  function creds() {
    // Extract Bluemix creds for Watson NLC service
    const vcap = process.env.VCAP_SERVICES
      ? JSON.parse(process.env.VCAP_SERVICES)
      : {
          natural_language_classifier: [
            {
              credentials: {
                url:
                  'https://gateway.watsonplatform.net/natural-language-classifier/api',
                // "username": "227786a8-957c-43ae-92e3-6ce418ca198c",
                // "password": "CgXTdbpmf2V5"
                username: 'b4f1122e-9924-432e-b977-2dd0c9c47d9e',
                password: '66hfy4gqKxoh',
              },

              syslog_drain_url: null,
              volume_mounts: [],
              label: 'natural_language_classifier',
              provider: null,
              plan: 'standard',
              name: 'Spam Classifier',
              tags: ['ibm_created', 'ibm_dedicated_public', 'watson'],
            },
          ],
          AvailabilityMonitoring: [
            {
              credentials: {
                pass: 'e04fc541-40b6-4c2f-a82a-6bacdebddeb6',
                id: 'b914073b-bc88-4fee-acb8-105c2f76bcf9',
                url:
                  'https://perfbroker.ng.bluemix.net/1.0/credentials/b914073b-bc88-4fee-acb8-105c2f76bcf9',
              },
              syslog_drain_url: null,
              volume_mounts: [],
              label: 'AvailabilityMonitoring',
              provider: null,
              plan: 'Lite',
              name: 'availability-monitoring-auto',
              tags: ['ibm_created', 'bluemix_extensions', 'dev_ops', 'lite'],
            },
          ],
        };
    return vcap.natural_language_classifier[0].credentials;
  }
}

module.exports = router;
