let lnb_buttonShowTranslate = document.querySelector('#lnb_translateLanguage')
lnb_buttonShowTranslate.addEventListener('click', lnb_renderTranslateSelect)
function lnb_renderTranslateSelect(){
    let statusWindow = document.querySelector('#lnb_windowShowTranslateLang').style.display
    if(statusWindow == '' || statusWindow == 'none'){
        lnb_showDiv('#lnb_windowShowTranslateLang', 'block', '279px', '413px','auto','3px','79px','auto')
        let translateSelectHtml = '<div class="lnb_contentSelectTranslate">'
        lnb_languages_translate.forEach(lang => {
            translateSelectHtml += `
                <div class="lnb_buttonSelectTranslate" code="${lang.code}" name="${lang.name}">${lang.name} - ${lang.native}</div>
            `
        });
        translateSelectHtml += '</div>'
        document.querySelector('#lnb_windowShowTranslateLang').innerHTML = translateSelectHtml
        lnb_hideDiv('#lnb_windowShowLearningLang', 'auto','3px','152px','auto')

        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementsWithClasslnb_buttonSelectTranslate = document.querySelectorAll(".lnb_buttonSelectTranslate");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementsWithClasslnb_buttonSelectTranslate.forEach(function(element) {
            element.addEventListener("click", lnb_setLangTranslate);
        });
    }else{
        document.querySelector('#lnb_windowShowTranslateLang').innerHTML = ''
        lnb_hideDiv('#lnb_windowShowTranslateLang', 'auto','3px','79px','auto')
    }
    
}

function lnb_setLangTranslate(event){
    let languageCode = event.target.getAttribute('code')
    let languageName = event.target.getAttribute('name')
    lnb_languageCodeTranslateYoutubeActive = languageCode
    lnb_languageNameTranslateYoutubeActive = languageName
    document.getElementById('lnb_translateLang').innerText = languageName
    let objectLangTranlate = {code: languageCode, language: languageName}
    let lnb_LangTranslateString = JSON.stringify(objectLangTranlate)
    localStorage.setItem('lnb_translatecode',lnb_LangTranslateString)

    document.querySelector('#lnb_windowShowTranslateLang').innerHTML = ''
    lnb_hideDiv('#lnb_windowShowTranslateLang', 'auto','auto','79px','3px')
}

function lnb_ftranslateText(_text,_learningLangCode, _translateLangCode) {
    let contentTranslate = lnb_replaceLineBreaks(_text)
    return new Promise((resolve, reject) => {
      let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${_learningLangCode}&tl=${_translateLangCode}&dt=t&q=${encodeURI(contentTranslate)}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          resolve({ voca: _text, vocaMean: `${data[0][0][0]}`});
        })
        .catch(error => {
          reject({ voca: _text, vocaMean: ''});
        });
    });
  }