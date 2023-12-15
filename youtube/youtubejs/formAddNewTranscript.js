// add new transcript
const lnb_groupBtLeftHtml = `
    <div class="lnb_group_left_button">
        <div id="lnb_left_down_time_button" class="lnb_button_youtube"> < </div>
        <div id="lnb_set_limit_left" class="lnb_button_youtube">
            set start time 
        </div>
        <div id="lnb_left_up_time_button" class="lnb_button_youtube"> > </div>
    </div>
`
const lnb_groupBtRightHtml = `
    <div class="lnb_group_right_button">
        <div id="lnb_right_down_time_button" class="lnb_button_youtube"> < </div>
        <div id="lnb_set_limit_right" class="lnb_button_youtube">
            set end time 
        </div>
        <div id="lnb_right_up_time_button" class="lnb_button_youtube"> > </div>
        <div id="lnb_next_button" class="lnb_button_youtube">next</div>
    </div>
`
let divnewElement = document.createElement('div');
divnewElement.setAttribute('id', 'lnb_card_addnew_transcripts')

let newtranscriptHTML = `
            
        <div class="lnb_row_control_video">
            ${lnb_groupBtLeftHtml} ${lnb_groupBtRightHtml}
        </div>
        <div class="lnb_title_input_transcript">
            Add New Transcript 
            </div>
        <div id="lnb_transcript_learned" contenteditable="true"></div>
        <div class="lnb_title_input_transcript">
            Meaning and Explain 
            <span id="lnb_translate_transcript" class="lnb_button_add_new_tran">translate</span>
        </div>
        <div id="lnb_transcript_meaning" contenteditable="true"></div>
        <div class="lnb_groupButtonAddNewTranscript">
            <div id="lnb_save_transcript" class="lnb_button_add_new_tran">save</div>
            <div id="lnb_cancel_addnew_transcript" class="lnb_button_add_new_tran">cancel</div>
        </div>
    
`
divnewElement.innerHTML = newtranscriptHTML
var lastElement = document.querySelector('.lnb_headerYoutube').lastChild;
document.querySelector('.lnb_headerYoutube').insertBefore(divnewElement, lastElement);

document.querySelector('#lnb_translate_transcript').addEventListener('click', lnb_translate_from_addNew)
document.querySelector('#lnb_save_transcript').addEventListener('click', lnb_save_tran_from_addNew)
document.querySelector('#lnb_cancel_addnew_transcript').addEventListener('click', lnb_cancel_add_new_Tran)


document.querySelector('#lnb_transcript_learned').addEventListener("keydown", function(event) {
    event.stopPropagation();
});
document.querySelector('#lnb_transcript_learned').addEventListener("keyup", function(event) {
    event.stopPropagation();
});
document.querySelector('#lnb_transcript_meaning').addEventListener("keydown", function(event) {
    event.stopPropagation();
});
document.querySelector('#lnb_transcript_meaning').addEventListener("keyup", function(event) {
    event.stopPropagation();
});
let lnb_addNew_transcript = document.querySelector('#lnb_addNew_transcript')
lnb_addNew_transcript.addEventListener('click', lnb_andNew_transcript_youtube)
function lnb_andNew_transcript_youtube(){
    if(document.querySelector('#lnb_card_addnew_transcripts').style.display == 'none' || document.querySelector('#lnb_card_addnew_transcripts').style.display == ''){
        document.querySelector('#lnb_card_addnew_transcripts').style.display = 'block'
    
    }else{
      lnb_cancel_add_new_Tran()
    }
    
}

function lnb_save_tran_from_addNew(){
      let transcript = document.querySelector('#lnb_transcript_learned').innerHTML
      let transcriptMeaning = document.querySelector('#lnb_transcript_meaning').innerHTML
      
    
    if(transcript == ""){

    }else{
        lnb_transcripts_Youtube_Data_Active = localStorage.getItem(lnb_addressStoreActive)
        if(lnb_transcripts_Youtube_Data_Active == 'null' || lnb_transcripts_Youtube_Data_Active == null){
            lnb_transcripts_Youtube_Active = [] 
        }else{
            lnb_transcripts_Youtube_Active = JSON.parse(lnb_transcripts_Youtube_Data_Active)
        }
        let urlShort = lnb_layChuoiSauDauHoi(window.location.href)
        let lnb_voca_object = {id: Date.now(),
          voca:transcript, 
          sentenceMean: transcriptMeaning , 
          urlVideo:urlShort, 
          timeStart: lnb_limit_left, 
          timeEnd: lnb_limit_right}
        let newElement = `div.lnb_card_transcripts[idcard="${lnb_voca_object.id}"]`
        
        lnb_transcripts_Youtube_Active.push(lnb_voca_object)
        sortByStt(lnb_transcripts_Youtube_Active)

        

        const newElementCard = document.createElement("div");
        newElementCard.setAttribute('class','lnb_card_transcripts')
        newElementCard.setAttribute('idcard',lnb_voca_object.id)
        

        let newTranscriptCard = `
                                  <div  class="lnb_transcript_learned" url="${lnb_voca_object.urlVideo}" timeStart="${lnb_voca_object.timeStart}" timeEnd="${lnb_voca_object.timeEnd}">${lnb_voca_object.voca}</div>
                                  <div class="lnb_transcript_meaning">${(lnb_voca_object.sentenceMean == undefined || lnb_voca_object.sentenceMean.trim() == '')?'': lnb_voca_object.sentenceMean}</div>
                                  <div class="lnb_groupButtonControlCard">
                                      <div class="lnb_save_transcript" dataId="${lnb_voca_object.id}">save</div>
                                      <div class="lnb_edit_transcript" dataId="${lnb_voca_object.id}">edit</div>
                                      <div class="lnb_translate_transcript" dataId="${lnb_voca_object.id}">translate</div>
                                      <div class="lnb_delete_transcript" dataId="${lnb_voca_object.id}">x</div>
                                  </div>
                              `
        newElementCard.innerHTML = newTranscriptCard
        let index = -1
        for (var i = 0; i < lnb_transcripts_Youtube_Active.length; i++) {
          if (lnb_transcripts_Youtube_Active[i].id === lnb_voca_object.id) {
            index = i; // Gán index là vị trí của object có id="def"
            break; // Kết thúc vòng lặp sau khi tìm thấy
          }
        }
        
        if (index !== -1) {
            if(index == 0){
              document.querySelector('#lnb_content_render_youtube').innerHTML = `<div class="lnb_card_transcripts" idcard="${lnb_voca_object.id}">${newTranscriptCard}</div>`
              document.querySelector(newElement).querySelector('.lnb_save_transcript').addEventListener("click", lnb_fsave_content_from_card);
              document.querySelector(newElement).querySelector('.lnb_edit_transcript').addEventListener("click", lnb_fedit_from_card);
              document.querySelector(newElement).querySelector('.lnb_translate_transcript').addEventListener("click", lnb_ftranslateFromCard);
              document.querySelector(newElement).querySelector('.lnb_transcript_learned').addEventListener("click", lnb_play_video_by_transcript);
              document.querySelector(newElement).querySelector('.lnb_delete_transcript').addEventListener("click", lnb_delete_transcript);
            }else{
              let previousElement = `div.lnb_card_transcripts[idcard="${lnb_transcripts_Youtube_Active[index-1].id}"]`
              document.querySelector(previousElement).insertAdjacentElement("afterend", newElementCard)
              document.querySelector(newElement).scrollIntoView()


              document.querySelector(newElement).querySelector('.lnb_save_transcript').addEventListener("click", lnb_fsave_content_from_card);
              document.querySelector(newElement).querySelector('.lnb_edit_transcript').addEventListener("click", lnb_fedit_from_card);
              document.querySelector(newElement).querySelector('.lnb_translate_transcript').addEventListener("click", lnb_ftranslateFromCard);
              document.querySelector(newElement).querySelector('.lnb_transcript_learned').addEventListener("click", lnb_play_video_by_transcript);
              document.querySelector(newElement).querySelector('.lnb_delete_transcript').addEventListener("click", lnb_delete_transcript);
            }
        } else {
          console.log("Không tìm thấy object có id='" + targetId + "'");
        }

        let numberTranscript = lnb_transcripts_Youtube_Active.length
        lnb_manageNumberTran[lnb_addressStoreActive]  = numberTranscript
        let idbuttonpage = `#id_lnb_${lnb_addressStoreActive}_button`
        document.querySelector(idbuttonpage).innerText = numberTranscript
        let lnb_manageNumberTranString = JSON.stringify(lnb_manageNumberTran)
        localStorage.setItem('lnb_manageNumberTran',lnb_manageNumberTranString)
        
        let lnb_transcripts_Youtube_Data_String = JSON.stringify(lnb_transcripts_Youtube_Active)
        localStorage.setItem(lnb_addressStoreActive,lnb_transcripts_Youtube_Data_String)

        lnb_cancel_add_new_Tran()
        lnb_container_of_transcripts_active = document.getElementById('lnb_content_render_youtube')
        lnb_all_card_active = lnb_container_of_transcripts_active.querySelectorAll('div[timeStart][timeEnd]');
        
    }
}
function lnb_translate_from_addNew(){
  let contentTranlateElement = document.querySelector('#lnb_transcript_learned')
  if(contentTranlateElement == 'null' || contentTranlateElement == null){

  }else{
    let contentTranslate = contentTranlateElement.innerText
    Promise.all([lnb_ftranslateText(contentTranslate,lnb_languageLearningCodeYoutueActive, lnb_languageCodeTranslateYoutubeActive)])
                .then(results => {
                  let sentence = results[0].voca
                  let sentenceMean = results[0].vocaMean + "<br>"
                  document.querySelector('#lnb_transcript_meaning').innerHTML += sentenceMean
                })
                .catch(error => {
                  console.error(error);
                });
  }
}
function lnb_cancel_add_new_Tran(){
  document.querySelector('#lnb_card_addnew_transcripts').style.display = 'none'
}

// left button set currentTime
let lnb_begin_time_button = document.querySelector('#lnb_begin_time_button')
let lnb_left_down_time_button = document.querySelector('#lnb_left_down_time_button')
let lnb_left_limit_time = document.querySelector('#lnb_left_limit_time')
let lnb_left_up_time_button = document.querySelector('#lnb_left_up_time_button')
let lnb_set_limit_left = document.querySelector('#lnb_set_limit_left')

lnb_left_limit_time.innerText = lnb_limit_left

lnb_left_up_time_button.addEventListener('click', lnb_set_left_up_time)
function lnb_set_left_up_time(){
    lnb_check_reloadPage()
    lnb_limit_left += 0.1
    if(lnb_limit_left >= lnb_limit_right){
        lnb_limit_left = lnb_limit_right - 0.2
    }
    lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
    lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
}
function lnb_set_left_up_right_right_time(){
    lnb_check_reloadPage()
    lnb_limit_left += 0.5
    if(lnb_limit_left >= lnb_limit_right){
        lnb_limit_left = lnb_limit_right - 0.2
    }
    lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
    lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
}
function lnb_set_left_up_right_right_right_time(){
    lnb_check_reloadPage()
    lnb_limit_left += 1
    if(lnb_limit_left >= lnb_limit_right){
        lnb_limit_left = lnb_limit_right - 0.2
    }
    lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
    lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
}
lnb_left_up_time_button.addEventListener("mousedown", function() {
    lnb_check_reloadPage()
    lnb_vset_currentTime_Upanddown = setInterval(lnb_fcreaseLTime, 100); // Mỗi 1 giây giảm 1 đơn vị
  });
lnb_left_up_time_button.addEventListener("mouseup", function() {
    clearInterval(lnb_vset_currentTime_Upanddown);
});

lnb_left_down_time_button.addEventListener('click', lnb_set_left_down_time)
function lnb_set_left_down_time(){
    lnb_check_reloadPage()
    lnb_limit_left -= 0.1
    if(lnb_limit_left <= 0){
        lnb_limit_left = 0
    }
    lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
    lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
}
function lnb_set_left_left_down_time(){
    lnb_check_reloadPage()
    lnb_limit_left -= 0.5
    if(lnb_limit_left <= 0){
        lnb_limit_left = 0
    }
    lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
    lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
}
function lnb_set_left_left_left_down_time(){
    lnb_check_reloadPage()
    lnb_limit_left -= 1
    if(lnb_limit_left <= 0){
        lnb_limit_left = 0
    }
    lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
    lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
}
lnb_left_down_time_button.addEventListener("mousedown", function() {
    lnb_check_reloadPage()
    lnb_vset_currentTime_Upanddown = setInterval(lnb_fdecreaseLTime, 100); // Mỗi 1 giây giảm 1 đơn vị
  });
lnb_left_down_time_button.addEventListener("mouseup", function() {
    clearInterval(lnb_vset_currentTime_Upanddown);
});
  

lnb_set_limit_left.addEventListener('click', lnb_set_start_play)
function lnb_set_start_play(){
    lnb_check_reloadPage()
    lnb_limit_left = lnb_Video_Youtube_Streaming.currentTime
    lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
}


lnb_begin_time_button.addEventListener('click', lnb_set_beginning_currentTime)
function lnb_set_beginning_currentTime(){
    lnb_check_reloadPage()
    lnb_limit_left = 0
    lnb_Video_Youtube_Streaming.currentTime = 0
    lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
}

// ////////////////////////////////////////////////////////////////////////////////////
// right button set currentTime
let lnb_right_down_time_button = document.querySelector('#lnb_right_down_time_button')
let lnb_right_limit_time = document.querySelector('#lnb_right_limit_time')
let lnb_right_up_time_button = document.querySelector('#lnb_right_up_time_button')
let lnb_end_time_button = document.querySelector('#lnb_end_time_button')
let lnb_set_limit_right = document.querySelector('#lnb_set_limit_right')



lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)

lnb_right_up_time_button.addEventListener('click', lnb_set_right_up_time)
function lnb_set_right_up_time(){
    lnb_check_reloadPage()
    lnb_limit_right += 0.3
    if(lnb_limit_right >= lnb_Video_Youtube_Streaming.duration){
        lnb_limit_right = lnb_Video_Youtube_Streaming.duration
    }
    lnb_Video_Youtube_Streaming.currentTime = lnb_limit_right - 1
    lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
}
function lnb_set_right_right_up_time(){
    lnb_check_reloadPage()
    lnb_limit_right += 1
    if(lnb_limit_right >= lnb_Video_Youtube_Streaming.duration){
        lnb_limit_right = lnb_Video_Youtube_Streaming.duration
    }
    lnb_Video_Youtube_Streaming.currentTime = lnb_limit_right - 1
    lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
}
function lnb_set_right_right_right_up_time(){
    lnb_check_reloadPage()
    lnb_limit_right += 2
    if(lnb_limit_right >= lnb_Video_Youtube_Streaming.duration){
        lnb_limit_right = lnb_Video_Youtube_Streaming.duration
    }
    lnb_Video_Youtube_Streaming.currentTime = lnb_limit_right - 1
    lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
}
lnb_right_up_time_button.addEventListener("mousedown", function() {
    lnb_check_reloadPage()
    lnb_vset_currentTime_Upanddown = setInterval(lnb_fcreaseRTime, 100); // Mỗi 1 giây giảm 1 đơn vị
  });
lnb_right_up_time_button.addEventListener("mouseup", function() {
    clearInterval(lnb_vset_currentTime_Upanddown);
});
lnb_right_down_time_button.addEventListener('click', lnb_set_right_down_time)
function lnb_set_right_down_time(){
    lnb_check_reloadPage()
    lnb_limit_right -= 0.3
    if(lnb_limit_right <= lnb_limit_left){
        lnb_limit_right = lnb_limit_left + 0.2
    }
    lnb_Video_Youtube_Streaming.currentTime = lnb_limit_right - 1
    lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
}
function lnb_set_right_right_down_time(){
    lnb_check_reloadPage()
    lnb_limit_right -= 1
    if(lnb_limit_right <= lnb_limit_left){
        lnb_limit_right = lnb_limit_left + 0.2
    }
    lnb_Video_Youtube_Streaming.currentTime = lnb_limit_right - 1
    lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
}
function lnb_set_right_right_right_down_time(){
    lnb_check_reloadPage()
    lnb_limit_right -= 2
    if(lnb_limit_right <= lnb_limit_left){
        lnb_limit_right = lnb_limit_left + 0.2
    }
    lnb_Video_Youtube_Streaming.currentTime = lnb_limit_right - 1
    lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
}
lnb_right_down_time_button.addEventListener("mousedown", function() {
    lnb_check_reloadPage()
    lnb_vset_currentTime_Upanddown = setInterval(lnb_fdecreaseRTime, 100); // Mỗi 1 giây giảm 1 đơn vị
  });
lnb_right_down_time_button.addEventListener("mouseup", function() {
    clearInterval(lnb_vset_currentTime_Upanddown);
});
lnb_set_limit_right.addEventListener('click', lnb_set_end_play)
function lnb_set_end_play(){
    lnb_check_reloadPage()
    lnb_limit_right = lnb_Video_Youtube_Streaming.currentTime
    lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
}
lnb_end_time_button.addEventListener('click', lnb_set_ending_time)
function lnb_set_ending_time(){
    lnb_check_reloadPage()
    lnb_limit_right = lnb_Video_Youtube_Streaming.duration
    lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
}


let lnb_next_button = document.querySelector('#lnb_next_button')
lnb_next_button.addEventListener('click', lnb_set_next_frame)
function lnb_set_next_frame(){
    lnb_check_reloadPage()
    if(lnb_numberTranActive == -1){
      if(lnb_limit_right >= lnb_Video_Youtube_Streaming.duration - 3){

      }else{
        lnb_limit_left = lnb_limit_right
        if(lnb_limit_left + 4 < lnb_Video_Youtube_Streaming.duration){
          lnb_limit_right = lnb_limit_left + 4
        }else{
          lnb_limit_right = lnb_Video_Youtube_Streaming.duration
        }
        lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
        lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
        lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
      }
    }else{
      lnb_numberTranActive++
      if(lnb_numberTranActive < lnb_transcripts_Youtube_Active.length){
        lnb_limit_left = lnb_transcripts_Youtube_Active[lnb_numberTranActive].timeStart
        lnb_limit_right = lnb_transcripts_Youtube_Active[lnb_numberTranActive].timeEnd
        lnb_setTimeByCommandNumber()
      }else{
        lnb_limit_left = lnb_limit_right
        if(lnb_limit_left + 4 < lnb_Video_Youtube_Streaming.duration){
          lnb_limit_right = lnb_limit_left + 4
        }else{
          lnb_limit_right = lnb_Video_Youtube_Streaming.duration
        }
        lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
        lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
        lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
      }
      
    }
}
function lnb_set_back_one_step(){
    lnb_check_reloadPage()
    lnb_numberTranActive--
    if(lnb_numberTranActive >= 0){
      lnb_limit_left = lnb_transcripts_Youtube_Active[lnb_numberTranActive].timeStart
      lnb_limit_right = lnb_transcripts_Youtube_Active[lnb_numberTranActive].timeEnd
      lnb_setTimeByCommandNumber()
    }else{
      lnb_numberTranActive = 0
    }
}
function lnb_set_next_more_frame(){
    lnb_check_reloadPage()
    if(lnb_limit_right >= lnb_Video_Youtube_Streaming.duration - 3){

    }else{
      if(lnb_limit_left + 5 < lnb_Video_Youtube_Streaming.duration){
        lnb_limit_right += 1
      }else{
        lnb_limit_right = lnb_Video_Youtube_Streaming.duration
      }
      lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
      lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
      lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
      if(document.querySelector('#lnb_card_addnew_transcripts') == 'null' || document.querySelector('#lnb_card_addnew_transcripts') == null){
        lnb_andNew_transcript_youtube()
      }
    }
    
}






function checkLocalStorageStorageRemainingSpace() {
    if ('localStorage' in window && window['localStorage'] !== null) {
      var currentSize = JSON.stringify(localStorage).length / 1024; // Chuyển kích thước thành KB
      var maxSize = 5 * 1024; // Giả định giới hạn tối đa là 5 MB
  
      var remainingSpace = maxSize - currentSize;
      
      if (remainingSpace > 0) {
        console.log("Dung lượng đã lưu trữ: " + currentSize + " KB");
        console.log("Dung lượng lưu trữ còn khả dụng: " + remainingSpace + " KB");
      } else {
        console.log("Dung lượng lưu trữ đã đầy.");
      }
    } else {
      console.log("Trình duyệt không hỗ trợ localStorage.");
    }
  }
  
  checkLocalStorageStorageRemainingSpace()

  function lnb_fdecreaseLTime() {
    if (lnb_limit_left > 0) {
        lnb_limit_left = lnb_limit_left - 0.5
        lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
        lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
    } else {
      clearInterval(lnb_vset_currentTime_Upanddown);
    }
  }
  function lnb_fcreaseLTime() {
    if (lnb_limit_left < lnb_limit_right) {
        lnb_limit_left = lnb_limit_left + 0.2
        lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
        lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
    } else {
      clearInterval(lnb_vset_currentTime_Upanddown);
    }
  }
  function lnb_fdecreaseRTime() {
    if (lnb_limit_left < lnb_limit_right) {
        lnb_limit_right = lnb_limit_right - 0.2
        lnb_Video_Youtube_Streaming.currentTime = lnb_limit_right
        lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
    } else {
      clearInterval(lnb_vset_currentTime_Upanddown);
    }
  }
  function lnb_fcreaseRTime() {
    if (lnb_limit_right < lnb_Video_Youtube_Streaming.duration) {
        lnb_limit_right = lnb_limit_right + 0.5
        lnb_Video_Youtube_Streaming.currentTime = lnb_limit_right
        lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
    } else {
      clearInterval(lnb_vset_currentTime_Upanddown);
    }
  }

  function lnb_setTimeByCommandNumber(){
        lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
        lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
        lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
  }