
let lnb_TranscriptSpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let lnb_transcriptRecognition

// Check if the browser supports Web Audio API
let lnb_audioContextPrac 
 
let lnb_audioContext;
let lnb_microphoneSource
// Gain node to control the audio volume
let lnb_gainNode;
let lnb_delay;




function lnb_transcriptSpeechToText() {
  try {
    lnb_transcriptRecognition = new lnb_TranscriptSpeechRecognition();
    lnb_transcriptRecognition.lang = lnb_languageLearningCodeYoutueActive;
    lnb_transcriptRecognition.interimResults = true;

    lnb_audioContextPrac = window.AudioContext || window.webkitAudioContext;
    if (lnb_audioContextPrac) {
      
      // Create an audio context
      lnb_audioContext = new lnb_audioContextPrac()
    
      // Create a gain node
      lnb_gainNode = lnb_audioContext.createGain();
      lnb_gainNode.gain.value = lnb_micVolumePracChanged;
    
      // Connect the gain node to the destination (speakers)
      // lnb_gainNode.connect(lnb_audioContext.destination);
    
      // Tạo một bộ lọc Echo (Delay)
      lnb_delay = lnb_audioContext.createDelay();
      lnb_delay.delayTime.value = 0; // Độ trễ là 0.5 giây
    }

    // lnb_audioContext
    if (lnb_audioContext) {
      // Request access to the microphone
      navigator.mediaDevices.getUserMedia({ 
        audio: {
          deviceId: { exact: lnb_microIdPracActive }
        }
       }).then((stream) => {
        // Create an audio source node for the microphone stream
        lnb_microphoneSource = lnb_audioContext.createMediaStreamSource(
          stream
        );

        // Connect the microphone source to the gain node
        lnb_microphoneSource.connect(lnb_gainNode);
        lnb_gainNode.connect(lnb_delay)
        lnb_delay.connect(lnb_audioContext.destination)

        // Set the stream to the recognition object
        lnb_transcriptRecognition.stream = stream;
      });
    }

    lnb_transcriptRecognition.start();

    lnb_transcriptRecognition.onresult = (event) => {

      const speechResult = event.results[0][0].transcript;
        //detect when intrim results
        if (event.results[0].isFinal) {
            let order = speechResult.trim().toLowerCase()
            let contentOut = `${speechResult} `
            console.log(contentOut)
            
            
          lnb_stringSpeech += contentOut
          console.log(lnb_stringSpeech)
          document.querySelector('#lnb_interim').innerHTML = lnb_stringSpeech
        } else {
          //           // creative p with class interim if not already there
          
                    if(speechResult.length > 0){
                      lnb_lookPractice = 2.5
                    }
                    document.querySelector('#lnb_interim').innerHTML = " " + speechResult
        }
    
      // if (lnb_audioContext) {
      //   // Adjust the gain value based on your requirements
      //   lnb_gainNode.gain.value = 0.03; // Example: Set the gain to 50%
      // }
    }
      lnb_transcriptRecognition.onspeechend = () => {
        // Dừng và hủy bỏ kết nối âm thanh
        if(lnb_audioContext){
          lnb_microphoneSource.disconnect();
          lnb_audioContext.close().then(() => {
            lnb_transcriptSpeechToText();
            console.log("AudioContext closed successfully");
          });
        }else{
          lnb_transcriptSpeechToText();
        }
      };
      lnb_transcriptRecognition.onerror = (event) => {
        lnb_transcriptStopRecording();
        if (event.error === "no-speech") {
          lnb_transcriptSpeechToText();
        } else if (event.error === "audio-capture") {
          alert(
            "No microphone was found. Ensure that a microphone is installed."
          );
        } else if (event.error === "not-allowed") {
          alert("Permission to use microphone is blocked.");
        } else if (event.error === "aborted") {
          // alert("Listening Stopped.");
        } else {
          alert("Error occurred in recognition: " + event.error);
        }
      };
  } catch (error) {
    console.log(error);
  }
}


  function lnb_transcriptStopRecording() {
    lnb_transcriptRecognition.stop();
    if(lnb_audioContext){
      lnb_microphoneSource.disconnect();
      lnb_audioContext.close().then(() => {
        lnb_transcriptSpeechToText();
        console.log("AudioContext closed successfully");
      });
    }else{
      lnb_transcriptSpeechToText();
    }
  }

  
