var recorder = require('node-record-lpcm16');

// Imports the Google Cloud client library
var speech = require('@google-cloud/speech');

// Creates a client
var client = new speech.SpeechClient();

var fs = require("fs");
/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
var encoding = 'LINEAR16';
var sampleRateHertz = 16000;
var languageCode = 'en-US';

var request = {
    config: {
        encoding: encoding,
        sampleRateHertz: sampleRateHertz,
        languageCode: languageCode,
    },
    interimResults: false, // If you want interim results, set this to true
};

var stream = fs.createWriteStream('./myFile2.txt', { flags: 'a' });
var recording;
// Create a recognize stream
var recognizeStream = client
    .streamingRecognize(request)
    .on('error', console.error)
    .on('data', data =>
        stream.write(
            data.results[0] && data.results[0].alternatives[0]
                ? `${data.results[0].alternatives[0].transcript}\n`
                : '\n\nReached transcription time limit, press Ctrl+C\n'
        )
    );

exports.startRecording = function startRecording() {
    // Start recording and send the microphone input to the Speech API.
    // Ensure SoX is installed, see https://www.npmjs.com/package/node-record-lpcm16#dependencies
    recording = recorder
        .record({
            sampleRateHertz: sampleRateHertz,
            threshold: 0,
            // Other options, see https://www.npmjs.com/package/node-record-lpcm16#options
            verbose: false,
            recordProgram: 'rec', // Try also "arecord" or "sox"
            silence: '10.0',
        })
        .stream()
        .on('error', console.error)
        .pipe(recognizeStream);
}

exports.stopRecording = function stopRecording() {
    if (recording && recording.stop) {
        recording.stop();
    }
}