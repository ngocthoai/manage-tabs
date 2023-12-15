function lnb_searchSpeechMain(_order){
    if( _order == 'search' || 
        _order == 'i want to search' ||
        _order == 'search for me' ||
        _order == 'search help me' ||
        _order == 'i will search' ||
        _order == 'need search' ||
        _order == 'need a search' ||
        _order == 'i need search' ||
        _order == 'i need a search' ||
        _order == 'i wanna search' ||
        _order == 'wanna search' ||
        _order == 'want to search'){
        lnb_search = true
        document.querySelector('#lnb_search_voca_input').value = ''
        document.querySelector('#lnb_search_voca_input').placeholder = 'which words?'
        lnb_fsearchTranscript_bySpeech('')
        document.querySelector('#lnb_search_voca_input').focus()
        lnb_stopRecording()
        setTimeout(() => {
            lnb_searchSpeechToText()
        }, 500);
        return true
    }else{
        return false
    }
}
function lnb_cancelSearchSpeech(_order){
    if(_order == 'cancel search' || 
        _order == 'quit search' || 
        _order == 'out search'){
        lnb_search = false
        document.querySelector('#lnb_search_voca_input').value = ''
        document.querySelector('#lnb_search_voca_input').placeholder = 'search...'
        lnb_fsearchTranscript_bySpeech('')
        document.querySelector('#lnb_search_voca_input').blur()
        lnb_searchStopRecording()
        setTimeout(() => {
            lnb_speechToText();
        }, 500);
        return true
    }else{
        return false
    }
}

function lnb_search_active(_order, _speechResult){
    switch (_order) {
      case 'ok':
      case 'okay':
      case 'ok thanks':
      case 'okay thanks':
      case 'thanks':
      case 'good':
      case 'very good':
      case 'oh very good':
      case 'oh so good':
      case 'oh good':
        document.querySelector('#lnb_search_voca_input').value = 'Thanks!'
        break;
      case 'no':
        document.querySelector('#lnb_search_voca_input').value = ''
        document.querySelector('#lnb_search_voca_input').placeholder = 'Sorry!'
        lnb_fsearchTranscript_bySpeech('')
        break;
    
      default:
        document.querySelector('#lnb_search_voca_input').value = _speechResult
        lnb_fsearchTranscript_bySpeech(_order)
        break;
    }
  }

function lnb_clearInputSearch(){
    document.querySelector('#lnb_search_voca_input').value = ''
    lnb_fsearchTranscript_bySpeech('')
}