function lnb_watchingCommandYoutube(_order){
    switch (_order) {
        case 'play':
        case 'ok':
        case 'ok ok':
        case 'okay':
        case 'okay okay':
        case 'ok next':
        case 'okay next':
          lnb_Video_Youtube_Streaming.play()
          return true
          break;
        case 'pause':
        case 'wait':
        case 'here':
        case 'stop here':
        case 'stop':
        case 'wait wait':
        case 'wait here':
          lnb_Video_Youtube_Streaming.pause()
          return true
          break;
        case 'next':
          lnb_set_next_frame()
          lnb_Video_Youtube_Streaming.play()
          return true
          break;
        case 'back':
        case 'pack':
        case 'go back':
        case 'go pack':
          lnb_set_back_one_step()
          lnb_Video_Youtube_Streaming.play()
          return true
          break;
        case 'begin':
          lnb_set_beginning_currentTime()
          lnb_click_JS(lnb_begin_time_button)
          return true
          break;
        case 'end':
        case 'continue':
        case 'go on':
        case 'carry on':
        case 'forge ahead':
        case 'for ahead':
        case 'keep going':
        case 'proceed':
          lnb_set_ending_time()
          lnb_click_JS(lnb_end_time_button)
          lnb_Video_Youtube_Streaming.play()
          return true
          break;
        case 'translate':
          lnb_translateFromCommandControl()
          return true
          break;
        case 'shadowing':
          lnb_translateFromCommandControl()
          return true
        case 'slow':
        case 'slower':
          lnb_slowVid()
          return true
        case 'normal':
          lnb_normalVid()
          return true
        case 'fast':
        case 'faster':
          lnb_fastVid()
          return true
        case 'skip':
        case 'skip skip':
        case 'skips':
            document.querySelector('.ytp-ad-skip-button-modern').click();
            return true
        case 'delete':
        case 'delete it':
        case 'delete delete':
          lnb_deleteCardBySpeech()
          return true
          break;
        
        case 'video':
          clickFullscreenButton()
          contentOut = ''
          break;
        default:
          break;
      }
}
function lnb_watchingCommandYoutubePageVideo(_order){
    switch (_order) {
        case 'note 1':
        case 'not 1':
        case 'note1':
        case 'note one':
        case 'not one':
          let noteName = 'note1'
          let noteSelect = document.querySelector(`#id_lnb_${noteName}_button`)
          noteSelect.click()
          contentOut = ''
          break;
        default:
          break;
      }
}

function lnb_translateFromCommandControl(){
  const contentTranlate = lnb_transcripts_Youtube_Active[lnb_numberTranActive].voca
  const idCard = lnb_idTranActive
  Promise.all([lnb_ftranslateText(contentTranlate,lnb_languageLearningCodeYoutueActive, lnb_languageCodeTranslateYoutubeActive)])
                .then(results => {
                  let sentence = results[0].voca
                  let sentenceMean = results[0].vocaMean + "<br>"
                  document.querySelector('[idcard="' + idCard + '"]').querySelector('.lnb_transcript_meaning').innerHTML += sentenceMean
                })
                .catch(error => {
                  console.error(error);
                });
 
}
function lnb_deleteCardBySpeech(){
    let idDelete = lnb_idTranActive
    document.querySelector('[idcard="' + idDelete + '"]').remove()
    let transcriptData = localStorage.getItem(lnb_addressStoreActive)
    let transcriptDataArr = JSON.parse(transcriptData)
        transcriptDataArr = lnb_removeObjectTranscriptWithId(transcriptDataArr,idDelete)
    let transcriptDataString = JSON.stringify(transcriptDataArr)
    localStorage.setItem(lnb_addressStoreActive,transcriptDataString)
    lnb_transcripts_Youtube_Active = transcriptDataArr
    lnb_transcripts_Youtube_Data_Active = transcriptDataString

    let numberTranscript = lnb_transcripts_Youtube_Active.length
    lnb_manageNumberTran[lnb_addressStoreActive]  = numberTranscript
    let idbuttonpage = `#id_lnb_${lnb_addressStoreActive}_button`
    document.querySelector(idbuttonpage).innerText = numberTranscript
    let lnb_manageNumberTranString = JSON.stringify(lnb_manageNumberTran)
    localStorage.setItem('lnb_manageNumberTran',lnb_manageNumberTranString)
}
function lnb_slowVid(){
  document.querySelector('.video-stream').playbackRate = 0.5;
}
function lnb_normalVid(){
  document.querySelector('.video-stream').playbackRate = 1;
}
function lnb_fastVid(){
  document.querySelector('.video-stream').playbackRate = 1.3;
}

/*
  switch (order) {
    case 'note 1':
    case 'not 1':
    case 'note1':
    case 'note one':
    case 'not one':
      let noteName = 'note1'
      let noteSelect = document.querySelector(`#id_lnb_${noteName}_button`)
      noteSelect.click()
      contentOut = ''
      break;
    
    case 'clear':
      document.querySelector('#lnb_transcript_learned').innerHTML = ''
      document.querySelector('#lnb_transcript_meaning').innerHTML = ''
      contentOut = ''
      return
      break;
    case 'play':
    case 'ok':
    case 'ok ok':
    case 'okay':
    case 'okay okay':
    case 'ok next':
    case 'okay next':
      lnb_Video_Youtube_Streaming.play()
      contentOut = ''
      return
      break;
    case 'pause':
    case 'wait':
    case 'wait wait':
    case 'wait here':
      lnb_Video_Youtube_Streaming.pause()
      contentOut = ''
      return
      break;
    case 'start':
      lnb_set_start_play()
      lnb_click_JS(lnb_set_limit_left)
      contentOut = ''
      break;
    case 'left':
      lnb_set_left_down_time()
      lnb_click_JS(lnb_left_down_time_button)
      contentOut = ''
      break;
    case 'left left':
      lnb_set_left_left_down_time()
      lnb_click_JS(lnb_left_down_time_button)
      contentOut = ''
      break;
    case 'left left left':
      lnb_set_left_left_left_down_time()
      lnb_click_JS(lnb_left_down_time_button)
      contentOut = ''
      break;
    case 'right':
      lnb_set_left_up_time()
      lnb_click_JS(lnb_left_up_time_button)
      contentOut = ''
      break;
    case 'right right':
      lnb_set_left_up_right_right_time()
      lnb_click_JS(lnb_left_up_time_button)
      contentOut = ''
      break;
    case 'right right right':
      lnb_set_left_up_right_right_right_time()
      lnb_click_JS(lnb_left_up_time_button)
      contentOut = ''
      break;
    case 'stop':
      lnb_set_end_play()
      lnb_click_JS(lnb_set_limit_right)
      contentOut = ''
      break;
    case 'down':
      lnb_set_right_down_time()
      lnb_click_JS(lnb_right_down_time_button)
      contentOut = ''
      break;
    case 'down down':
      lnb_set_right_right_down_time()
      lnb_click_JS(lnb_right_down_time_button)
      contentOut = ''
      break;
    case 'down down down':
      lnb_set_right_right_right_down_time()
      lnb_click_JS(lnb_right_down_time_button)
      contentOut = ''
      break;
    case 'up':
      lnb_set_right_up_time()
      lnb_click_JS(lnb_right_up_time_button)
      contentOut = ''
      break;
    case 'up up':
      lnb_set_right_right_up_time()
      lnb_click_JS(lnb_right_up_time_button)
      contentOut = ''
      break;
    case 'up up up':
      lnb_set_right_right_right_up_time()
      lnb_click_JS(lnb_right_up_time_button)
      contentOut = ''
      break;
    case 'next':
      lnb_set_next_frame()
      lnb_click_JS(lnb_next_button)
      contentOut = ''
      return
      break;
    case 'back':
    case 'pack':
    case 'go back':
    case 'go pack':
    case 'here':
      lnb_set_back_one_step()
      contentOut = ''
      return
      break;
    case 'more':
      lnb_set_next_more_frame()
      lnb_click_JS(lnb_next_button)
      contentOut = ''
      break;
    case 'begin':
      lnb_set_beginning_currentTime()
      lnb_click_JS(lnb_begin_time_button)
      contentOut = ''
      break;
    case 'end':
    case 'continue':
    case 'go on':
    case 'carry on':
    case 'forge ahead':
    case 'for ahead':
    case 'keep going':
    case 'proceed':
      lnb_set_ending_time()
      lnb_click_JS(lnb_end_time_button)
      contentOut = ''
      break;
    case 'translate':
      lnb_translate_from_addNew()
      lnb_click_JS(document.querySelector('#lnb_translate_transcript'))
      contentOut = ''
      break;
    case 'save':
      lnb_save_tran_from_addNew()
      contentOut = ''
      break;
    case 'cancel':
      lnb_cancel_add_new_Tran()
      contentOut = ''
      break;
    case 'create':
      lnb_andNew_transcript_youtube()
      lnb_click_JS(lnb_addNew_transcript)
      contentOut = ''
      break;
    case 'video full':
    case 'video for':
    case 'video for screen':
    case 'video fullscreen':
    case 'video full screen':
      clickFullscreenButton()
      contentOut = ''
      break;
    case 'video':
      clickFullscreenButton()
      contentOut = ''
      break;
    default:
      break;
  }
*/