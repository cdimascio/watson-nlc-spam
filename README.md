Overview - Watson NLC Spam Example
==================================

This project contains:

-   Training data

-   Test data

-   Python script to measure accuracy

 

Project
-------

This project describes a very simple way to train a Watson Natural Language
Classifier and validate its accuracy.

 

### Prerequisites

-   [Python](<https://www.python.org/downloads/>)

-   [curl](<http://curl.haxx.se/download.html>)

-   [Bluemix Account](<www.bluemix.net>)

-   An instance of the Watson Naturual Language Classifier Bluemix service (see
    blog)

 

#### Layout

-   `data/SpamHam-Train.json` - SpamHam training data

-   `data/SpamHam-Test.json` - SpamHam test data

-   `spam.py` - a python script used to measure the accuracy of the classifier

 

Data files are a transform of [SMS Spam Collection
v.1](<<http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/> >)[ (UCI's SMS
Spam Collectoin Data
Set](<https://archive.ics.uci.edu/ml/datasets/SMS+Spam+Collection>))

#### Create an NL Classifier instance using Bluemix
-   Go to www.bluemix.net
-   From the Bluemix catalog, select Watson Natural Language Classifier

#### Train the Spam classifier

Training the classifier is easy. Simply, provide training data in a Watson NLC
compatible format and POST a request to the Watson NLC `/classifiers` REST
endpoint.

Here's how:

-   `curl -X POST -u username:password  -H "Content-Type:application/json" -d
    @data/SpamHam-Train.json
    https://gateway.watsonplatform.net/natural-language-classifier/api/v1/classifiers`

 

Note: open` data/SpamHam-Train.json` to view the data format

 

#### Measure Accuracy of the Spam classifier
-   Open `spam.py` and supply values for YOUR_CLASSIFIER_ID, YOUR_CLASSIFIER_USERNAME, and YOUR_CLASSIFIER_PASSWORD.

-   Run `python spam.py`

 

About the Data
--------------

The SMS Spam Collection v.1 is a public set of SMS labeled messages that have
been collected for mobile phone spam research. It has one collection composed
by 5,574 English, real and non-enconded messages, tagged according being
legitimate (ham) or spam.

 

More information can be found
[here](<http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/>)

 

A comprehensive study of this data can be found in the following papers:

-   Almeida, T.A., Gómez Hidalgo, J.M., Yamakami, A. Contributions to the Study
    of SMS Spam Filtering: New Collection and Results. Proceedings of the 2011
    ACM Symposium on Document Engineering (DOCENG'11), Mountain View, CA, USA,
    2011.
    ([preprint](<http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/doceng11.pdf>))

-   Gómez Hidalgo, J.M., Almeida, T.A., Yamakami, A. On the Validity of a New
    SMS Spam Collection. Proceedings of the 11th IEEE International Conference
    on Machine Learning and Applications (ICMLA'12), Boca Raton, FL, USA, 2012.
    ([preprint](<http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/icmla12.pdf>))

-   Almeida, T.A., Gómez Hidalgo, J.M., Silva, T.P. Towards SMS Spam Filtering:
    Results under a New Dataset. International Journal of Information Security
    Science (IJISS), 2(1), 1-18. (Invited paper - [full
    version](<http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/IJISS13.pdf>))

 

License (code)
--------------

Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 http://www.apache.org/licenses/LICENSE-2.0
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
