require('dotenv').config();

const fs = require('fs');

const LineIn = require('line-in');

const LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');
const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');

const languageTranslator = new LanguageTranslatorV3({
  iam_apikey: 'FRYEp-rTZahdlFvGqvrWmMgaRMNymxgY60gF1ls3Vrnr',
  url: 'https://gateway.watsonplatform.net/language-translator/api/',
  version: '2019-09-06',
});

var speechToText = new SpeechToTextV1({
    iam_apikey: 'CTcOweRX0zBagT25NHvTk5F7cvRwBoxLGOZZ6rVo4SGS',
    url: 'https://stream.watsonplatform.net/speech-to-text/api/'
  });

const lineIn = new LineIn();

const recognizeStream = speechToText.recognizeUsingWebSocket({
    content_type: 'audio/l16; rate=44100; channels=2',
    interim_results: true
});

recognizeStream.on('open', () => {
    console.log('ready to transcribe');
})
//var writeStream = fs.createWriteStream("transcript.txt");

lineIn.pipe(recognizeStream).pipe(process.stdout);
//lineIn.pipe(recognizeStream).pipe(writeStream);