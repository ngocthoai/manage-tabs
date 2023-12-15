
function lnb_showDiv(_idOrclass, _blockOrFlex, _width, _height, _top, _right, _bottom, _left){
    
    let elementShow = document.querySelector(_idOrclass)
    if(elementShow != null || elementShow != 'null'){
        elementShow.style.width = "0px"
        elementShow.style.height = "0px"
        elementShow.style.display = _blockOrFlex

        elementShow.style.top = _top
        elementShow.style.right = _right
        elementShow.style.bottom = _bottom
        elementShow.style.left = _left

        elementShow.style.opacity = 1
        setTimeout(() => {
            elementShow.style.width = _width
            elementShow.style.height = _height
        }, 50);
    }
}

function lnb_hideDiv(_idOrclass, _top, _right, _bottom, _left){
    let elementShow = document.querySelector(_idOrclass)
    if(elementShow != null || elementShow != 'null'){
        elementShow.style.width = '0px'
        elementShow.style.height = '0px'
        elementShow.style.top = _top
        elementShow.style.right = _right
        elementShow.style.bottom = _bottom
        elementShow.style.left = _left
        elementShow.style.opacity = 0
        setTimeout(() => {
            elementShow.style.display = 'none'
        }, 300);
    }
}

function lnb_fActivePageNote(_pageNoteName){
    let idButtonNotePageActive = `id_lnb_${_pageNoteName}_button`
    document.getElementById(idButtonNotePageActive).setAttribute('class','lnb_active_YT lnb_button_content_youtube')
    
}

function lnb_layChuoiSauDauHoi(_url) {
    // Tìm vị trí của dấu "?" trong URL
    const index = _url.indexOf('?');
  
    if (index !== -1) {
      // Nếu có dấu "?" trong URL
      // Sử dụng slice để lấy phần sau dấu "?"
      const chuoiSauDauHoi = _url.slice(index + 1);
  
      return chuoiSauDauHoi;
    } else {
      // Nếu không có dấu "?" trong URL, trả về null hoặc thông báo lỗi khác tùy bạn muốn.
      return null;
    }
}

function lnb_replaceNewlineWithSpace(_inputString) {
// Sử dụng phương thức replace với biểu thức chính quy để thay thế tất cả ký tự xuống dòng bằng khoảng trắng.
return _inputString.replace(/\n/g, ' ');
}

function extractDomain(_url) {
    // Tìm vị trí xuất hiện đầu tiên của ".com/"
    const index = _url.indexOf(".com/");
    
    // Kiểm tra nếu có vị trí xuất hiện
    if (index !== -1) {
      // Lấy phần từ đầu đến ".com/"
      const result = _url.substring(0, index + 5);
      return result;
    } else {
      // Trả về thông báo nếu không tìm thấy
      return "Không tìm thấy phần '.com/' trong URL.";
    }
  }
function lnb_openNewTab(_url) {
let domain = extractDomain(window.location.href)
let urlNew = `${domain}watch?${_url}`
window.location.href = urlNew;
}

function lnb_checkOpenNewTab(_urlTranscript){
    let urlPage = lnb_layChuoiSauDauHoi(window.location.href)
    if(urlPage != _urlTranscript){
        lnb_openNewTab(_urlTranscript)
    }

}

function layChuoiTuDauDenDauHoi(_url) {
    // Tìm vị trí của dấu "?" trong URL
    const index = _url.indexOf('?');

    if (index !== -1) {
        // Nếu có dấu "?" trong URL
        // Sử dụng slice để lấy phần từ đầu đến dấu "?"
        const chuoiTuDauDenDauHoi = _url.slice(0, index);
        let domain = `${chuoiTuDauDenDauHoi}?`
        return domain;
    } else {
        // Nếu không có dấu "?" trong URL, trả về URL ban đầu.
        let domain = `${_url}/watch?`
        return domain;
    }
}

function lnb_removeObjectTranscriptWithId(_array, _id) {
    // Tìm vị trí của đối tượng có id cần xóa trong mảng
    const index = _array.findIndex(item => item.id == _id);

    // Nếu tìm thấy đối tượng, thì xóa nó khỏi mảng
    if (index !== -1) {
        _array.splice(index, 1);
    }
    return _array
}

function lnb_replaceLineBreaks(_text) {
    const punctuationRegex = /[.?\/#!$%\^&\*;{}=\-_`~()\n，。！？]/g;
    // Sử dụng phương thức replace với biểu thức chính quy để tìm và thay thế các ký tự xuống dòng bằng "-"
    return _text.replace(punctuationRegex, ' - ');
  }
function lnb_replaceLineBreaksPractice(_text) {
    const punctuationRegex = /[.,?\/#!$%\^&\*;{}=\-_`~()\n，。！？]/g;
    // Sử dụng phương thức replace với biểu thức chính quy để tìm và thay thế các ký tự xuống dòng bằng "-"
    return _text.replace(punctuationRegex, ' ');
  }
function lnb_removeExtraSpaces(_str) {
    return _str.split(' ').filter(Boolean).join(' ');
}

function lnb_timeToSeconds(_time) {
    const parts = _time.split(':');
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    const seconds = parseFloat(parts[2].replace(',', '.'));
    return hours * 3600 + minutes * 60 + seconds;
}

function lnb_cutStringE1W(_sentence){
    let sentence = _sentence.trim()
    if(sentence != ''){
        if(lnb_languageLearningCodeYoutueActive == 'zh-CN' || 
            lnb_languageLearningCodeYoutueActive == 'zh-TW' ||
            lnb_languageLearningCodeYoutueActive == 'ja')
        {
            let sentenceArr = sentence.split('')
            let endWord = sentenceArr[sentenceArr.length - 1]
            sentenceArr.pop()
            let sentenceNew = sentenceArr.join('')
            return {endWord: endWord, sentenceNew: sentenceNew}
        }else{
            let sentenceArr = sentence.split(' ')
            let endWord = sentenceArr[sentenceArr.length - 1]
            sentenceArr.pop()
            let sentenceNew = sentenceArr.join(' ')
            return {endWord: endWord, sentenceNew: sentenceNew}
        }
    }
}
function lnb_cutStringB1W(_sentence){
    let sentence = _sentence.trim()
    if(sentence != ''){
        if(lnb_languageLearningCodeYoutueActive == 'zh-CN' || 
            lnb_languageLearningCodeYoutueActive == 'zh-TW' ||
            lnb_languageLearningCodeYoutueActive == 'ja')
        {
            let sentenceArr = sentence.split('')
            let fisrtWord = sentenceArr[0]
            sentenceArr.shift()
            let sentenceNew = sentenceArr.join('')
            return {firstWord: fisrtWord, sentenceNew: sentenceNew}
        }else{
            let sentenceArr = sentence.split(' ')
            let fisrtWord = sentenceArr[0]
            sentenceArr.shift()
            let sentenceNew = sentenceArr.join(' ')
            return {firstWord: fisrtWord, sentenceNew: sentenceNew}
        }
    }
}
function lnb_calculateSubstringTime(_Sentence, _Word, _startTime, _endTime) {
    let lengthSentence = _Sentence.length 
    let totalTime = parseFloat(_endTime) - parseFloat(_startTime)
    let time1Cha = totalTime/lengthSentence
    let wordLength
    if(lnb_languageLearningCodeYoutueActive == 'zh-CN' || 
            lnb_languageLearningCodeYoutueActive == 'zh-TW' ||
            lnb_languageLearningCodeYoutueActive == 'ja')
    {
        wordLength = _Word.length
    }else{
        wordLength = _Word.length + 1
    }
    
    let timeOfWord = wordLength*time1Cha
    return timeCut = parseFloat(timeOfWord)
}

function lnb_getRandomNumber() {
    // Sinh số ngẫu nhiên từ 1 đến 5
    return Math.floor(Math.random() * 5) + 1;
  }

  function roundToTwoDecimalPlaces(number) {
    return Math.round(number * 100) / 100;
}
function lnb_fformatSeconds(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    seconds = Math.floor(seconds % 60);
  
    let timeStr = "";
  
    if (hours > 0) {
      timeStr += hours.toString().padStart(2, "0") + ":";
    }
  
    if (minutes > 0 || hours > 0) {
      timeStr += minutes.toString().padStart(2, "0") + ":";
    }
  
    timeStr += seconds.toString().padStart(2, "0");
  
    return timeStr;
  }
// //////////////////////////////////////////////////////////////////////
function lnb_check_reloadPage() {
    if(lnb_Video_Youtube_Streaming == 'null' || lnb_Video_Youtube_Streaming == null){
        location.reload();
    }
}


// Convert volume micro from 0.01 to 0.5
function lnb_convertValueMicroVolum(_oldValue) {
    const minValue = 0;
    const maxValue = 100;
    const newMinValue = 0.02;
    const newMaxValue = 0.5;

    // Xác định vị trí tương ứng trong khoảng cũ
    const positionInOldRange = (_oldValue - minValue) / (maxValue - minValue);

    // Áp dụng vị trí tương ứng trong khoảng mới
    const newValue = newMinValue + positionInOldRange * (newMaxValue - newMinValue);

    return newValue;
}