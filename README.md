## Prerequisites
Create an IBM Cloud account: https://cloud.ibm.com/registration  

Create instances of these Watson services:  
- Language Translator  
- Speech to Text  

Create a new file named .env.  
Add API keys to the file.   
SPEECH_TO_TEXT_IAM_APIKEY = {Your API Key for the Speech to Text service goes here}
LANGUAGE_TRANSLATOR_IAM_APIKEY = {Your API Key for the Language Translator goes here}

Build the projects:  
`npm install`

To run the Speech to text script:  
`node speech_to_text.js`  

To run the Transcribe a WAV file script:  
Place a wav file in the resources folder named speech.wav  
`transcribe_wav.js`