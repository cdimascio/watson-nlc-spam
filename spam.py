__author__ = 'dimascio'

import requests
import json

# Replace YOUR_CLASSIFIER_ID, YOUR_CLASSIFIER_USERNAME, and YOUR_CLASSIFIER_PASSWORD
# with the information provided in your classifier's credentials object
def classify(s):
    """
    Returns the predicted class for the given string
    :param s:
    :return:
    """
    r = requests.post("https://gateway.watsonplatform.net/natural-language-classifier/api/v1/classifiers/YOUR_CLASSIFER_ID/classify",
                      json.dumps({'text':s}),
                      auth=(YOUR_CLASSIFIER_USERNAME, YOUR_CLASSIFY_PASSWORD),
                      headers={'Content-Type': 'application/json'})
    return r;


# Read test data into test array
test = []
with open('data/SpamHam-Test.json') as testData:
    for obs in testData:
        test.append(json.loads(obs))

# Classify each test observation and store its prediction and label
predictionsAndLabels = map(lambda o:  (classify(o['text']).json(), o['classes'][0]), test)

# Calculate the classifier's accuracy by comparing:
# Number of correct predictions / Number of test observations
accuracy = 1.0 * len(filter(lambda x: x[0]['top_class'] == x[1], predictionsAndLabels)) / len(test)
print "accuracy: %s" % accuracy
