//  iam_apikey: 'CTcOweRX0zBagT25NHvTk5F7cvRwBoxLGOZZ6rVo4SGS',
require('dotenv').config();

var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');

var speechToText = new SpeechToTextV1({
  url: 'https://stream.watsonplatform.net/speech-to-text/api/'
});

var params = {
  // From file
  audio: fs.createReadStream('./resources/speech.wav'),
  content_type: 'audio/l16; rate=44100; channels=2'
};

speechToText.recognize(params)
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(err => {
    console.log(err);
  });

// or streaming
fs.createReadStream('./resources/speech.wav')
  .pipe(speechToText.recognizeUsingWebSocket({ content_type: 'audio/l16; rate=44100; channels=2' }))
  .pipe(fs.createWriteStream('./transcription.txt'));