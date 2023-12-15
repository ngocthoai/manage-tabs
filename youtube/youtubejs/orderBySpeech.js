let lnb_search = false


let lnb_buttonShowSpeech = document.querySelector('#lnb_LearningLanguage')
lnb_buttonShowSpeech.addEventListener('click', lnb_renderSpeechSelect)
function lnb_renderSpeechSelect(){
    let statusWindow = document.querySelector('#lnb_windowShowLearningLang').style.display
    if(statusWindow == '' || statusWindow == 'none'){
        lnb_showDiv('#lnb_windowShowLearningLang', 'block', '279px', '413px', 'auto','3px','152px','auto')
        let translateSelectHtml = '<div class="lnb_contentSelectSpeech">'
        lnb_languages_translate.forEach(lang => {
            translateSelectHtml += `
                <div class="lnb_buttonSelectSpeech" code="${lang.code}" name="${lang.name}">${lang.name} - ${lang.native}</div>
            `
        });
        translateSelectHtml += '</div>'
        document.querySelector('#lnb_windowShowLearningLang').innerHTML = translateSelectHtml
        lnb_hideDiv('#lnb_windowShowTranslateLang', 'auto','3px','72px','auto')

        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementsWithClasslnb_buttonSelectSpeech = document.querySelectorAll(".lnb_buttonSelectSpeech");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementsWithClasslnb_buttonSelectSpeech.forEach(function(element) {
            element.addEventListener("click", lnb_setLangSpeech);
        });
    }else{
        document.querySelector('#lnb_windowShowLearningLang').innerHTML = ''
        lnb_hideDiv('#lnb_windowShowLearningLang','auto','3px','107px','auto')
    }
    
}

function lnb_setLangSpeech(event){
    let languageCode = event.target.getAttribute('code')
    let languageName = event.target.getAttribute('name')
    lnb_languageLearningCodeYoutueActive = languageCode
    lnb_languageLearningNameYoutueActive = languageName
    document.getElementById('lnb_originLang').innerText = languageName
    let objectLangSpeech = {code: languageCode, language: languageName}
    let lnb_LangSpeechString = JSON.stringify(objectLangSpeech)
    localStorage.setItem('lnb_speechcode',lnb_LangSpeechString)

    document.querySelector('#lnb_windowShowLearningLang').innerHTML = ''
    lnb_hideDiv('#lnb_windowShowLearningLang','auto','auto','107px','0px')
}



let lnb_SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition,
  lnb_recognition,
  lnb_recording = false;
  
  


function lnb_speechToText() {
    document.querySelector('#lnb_speechingStatus').style.display = 'block'
    document.querySelector('#lnb_microAndNew').style.transform = 'scale(1.1)'
    try {
      lnb_recognition = new lnb_SpeechRecognition();
      lnb_recognition.lang = 'en';
      lnb_recognition.maxAlternatives = 1;
      lnb_recognition.interimResults = true;
      
      lnb_recognition.start();
      lnb_recording = true;
      lnb_recognition.onresult = (event) => {
        
        
        const speechResult = event.results[0][0].transcript;
        //detect when intrim results
        if (event.results[0].isFinal) {
            let order = speechResult.trim().toLowerCase()
            let contentOut = `${speechResult} <br>`
            console.log(order)
            if(lnb_watchingCommandYoutube(order)){
              return
            }

            switch (true) {
              // search command speech
              case /search/.test(order):
                if(lnb_searchSpeechMain(order)){
                  return
                }
              break;
              case /practice/.test(order):
                if(lnb_practiceSpeechMain(order)){
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

        } else {
          
        }
      };
      lnb_recognition.onspeechend = () => {
        lnb_speechToText();
      };
      lnb_recognition.onerror = (event) => {
        lnb_stopRecording();
        if (event.error === "no-speech") {
          lnb_speechToText();
        } else if (event.error === "audio-capture") {
          alert(
            "No microphone was found. Ensure that a microphone is installed."
          );
        } else if (event.error === "not-allowed") {
          alert("Permission to use microphone is blocked.");
        } else if (event.error === "aborted") {
            // lnb_stopRecording();
        } else {
          alert("Error occurred in lnb_recognition: " + event.error);
        }
      };
    } catch (error) {
      lnb_recording = false;
  
      console.log(error);
    }
}

  
  function lnb_stopRecording() {
    lnb_recognition.stop();
    lnb_recording = false;
    document.querySelector('#lnb_speechingStatus').style.display = 'none'
    document.querySelector('#lnb_microAndNew').style.transform = 'scale(0.5)'
  }

  function lnb_click_JS(element){
    element.classList.add("lnb_click_js");
    setTimeout(function () {
      element.classList.remove("lnb_click_js");
    }, 500);
  }

  
  function lnb_convertStringToNumber(_inputStr) {
    const numberString = _inputStr.toString();
    const newNumberString = numberString.slice(3); // Bỏ đi ba số đầu tiên
      const newNumber = parseInt(newNumberString, 10);
      return newNumber;
  }