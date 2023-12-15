let lnb_searchSpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition,
lnb_searchRecognition,
lnb_searchRecording = false;

function lnb_searchSpeechToText() {
    try {
      lnb_searchRecognition = new lnb_searchSpeechRecognition();
      lnb_searchRecognition.lang = lnb_languageLearningCodeYoutueActive;
      lnb_searchRecognition.interimResults = true;
      lnb_searchRecognition.start();
      lnb_searchRecognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        //detect when intrim results
        if (event.results[0].isFinal) {
            let order = speechResult.trim().toLowerCase()
            let contentOut = `${speechResult} <br>`
            

            switch (order) {
              case 'clear':
              case 'clear clear':
              case 'clear clear clear':
              case 'again':
              case 'do again':
              case 'return':
              case 'return again':
                lnb_clearInputSearch()
                return
                break;
            
              default:
                break;
            }
            console.log(order)
            switch (true) {
                // search command speech
                case /search/.test(order):
                  if(lnb_cancelSearchSpeech(order)){
                    return
                  }
                break;
                
                // check number order speech
                case /^\d/.test(order):
                  if(lnb_checkNumberCommand(order)){
                    return
                  }
                break;
  
                default:
                  break;
              }
              lnb_search_active(order, speechResult)
              
        //   document.querySelector('#lnb_main_transcript_learned').innerHTML += contentOut;
        //   if(document.querySelector('#lnb_main_transcript_learned').querySelector("span") != null){
        //       document.querySelector('#lnb_main_transcript_learned').querySelector("span").remove();
        //   }
        } else {
          //creative p with class interim if not already there
        //   if (!document.querySelector(".interim")) {
        //     const interim = document.createElement("span");
        //     interim.classList.add("interim");
        //     document.querySelector('#lnb_main_transcript_learned').appendChild(interim);
        //   }
        //   //update the interim p with the speech result
        //   document.querySelector(".interim").innerHTML = " " + speechResult;
        }
      };
      lnb_searchRecognition.onspeechend = () => {
        lnb_searchSpeechToText();
      };
      lnb_searchRecognition.onerror = (event) => {
        lnb_searchStopRecording();
        if (event.error === "no-speech") {
            lnb_searchSpeechToText();
        } else if (event.error === "audio-capture") {
          alert(
            "No microphone was found. Ensure that a microphone is installed."
          );
        } else if (event.error === "not-allowed") {
          alert("Permission to use microphone is blocked.");
        } else if (event.error === "aborted") {
            lnb_searchStopRecording();
        } else {
          alert("Error occurred in recognition: " + event.error);
        }
      };
    } catch (error) {
      lnb_searchRecording = false;
  
      console.log(error);
    }
  }

  function lnb_searchStopRecording() {
    lnb_searchRecognition.stop();
    lnb_searchRecording = false;
  }