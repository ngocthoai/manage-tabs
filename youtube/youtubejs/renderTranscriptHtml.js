function lnb_render_transcript_youtube(_arrTranscripts){
    let transcriptHTML = ''
    if(_arrTranscripts.length <= 0){
        transcriptHTML += `
                <div class="lnb_card_transcripts">
                    <div class="lnb_transcript_learned"><a href="https://www.langnotebook.com" target="_blank">Visit Langnotebook.com</a> <span class="lnb_chanel_name">chanel: <a href="https://www.youtube.com/@Langnotebook" target="_blank">@Langnotebook</a></span></div>
                    <div>Langnotebook.com không ngừng phấn đấu để trở thành ứng dụng học tiếng anh được yêu thích nhất!</div>
                </div>
                
            `
        document.getElementById('lnb_content_render_youtube').innerHTML = transcriptHTML
    }else{
        _arrTranscripts.forEach((element,index) => {
            transcriptHTML += `
                                <div class="lnb_card_transcripts" idcard="${element.id}">
                                    <div  class="lnb_transcript_learned" index="${index}" url="${element.urlVideo}" timeStart="${element.timeStart}" timeEnd="${element.timeEnd}">${element.voca}</div>
                                    <div class="lnb_transcript_meaning">${(element.sentenceMean == undefined || element.sentenceMean.trim() == '')?'': element.sentenceMean}</div>
                                    <div class="lnb_groupButtonSetTimeUp">
                                        <div class="lnb_cutB1W_transcript lnb_buttonCard">cut B1W </div>
                                        <div class="lnb_setBeginTimeLeftLong lnb_buttonCard" >  <<  </div>
                                        <div class="lnb_setBeginTimeLeft lnb_buttonCard" >  <  </div>
                                        <div class="lnb_setBeginTimeRight lnb_buttonCard">  >  </div>
                                        <div class="lnb_setBeginTimeRightLong lnb_buttonCard">  >>  </div>
                                    </div>
                                    <div class="lnb_groupButtonControlCard">
                                        <div class="lnb_stt_transcript lnb_buttonCard">${index}</div>
                                        <div class="lnb_save_transcript lnb_buttonCard">save</div>
                                        <div class="lnb_edit_transcript lnb_buttonCard">edit</div>
                                        <div class="lnb_translate_transcript lnb_buttonCard">translate</div>
                                        <div class="lnb_delete_transcript lnb_buttonCard">x</div>
                                    </div>
                                    <div class="lnb_groupButtonSetTimeDown">
                                        <div class="lnb_mergeDown_transcript lnb_buttonCard">merge down</div>
                                        <div class="lnb_setBeginTimeUpLong lnb_buttonCard">  <<  </div>
                                        <div class="lnb_setBeginTimeUp lnb_buttonCard">  <  </div>
                                        <div class="lnb_setBeginTimeDown lnb_buttonCard">  >  </div>
                                        <div class="lnb_setBeginTimeDownLong lnb_buttonCard">  >>  </div>
                                        <div class="lnb_cutE1W_transcript lnb_buttonCard">cut E1W </div>
                                    </div>
                                </div>
                                
                            `
            
        });
        document.getElementById('lnb_content_render_youtube').innerHTML = transcriptHTML

        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementslnb_setBeginTimeUpLong = document.querySelectorAll(".lnb_setBeginTimeUpLong");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementslnb_setBeginTimeUpLong.forEach(function(element) {
            element.addEventListener("click", lnb_fsetTimeEndUpLong);
        });
        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementslnb_setBeginTimeUp = document.querySelectorAll(".lnb_setBeginTimeUp");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementslnb_setBeginTimeUp.forEach(function(element) {
            element.addEventListener("click", lnb_fsetTimeEndUp);
        });
        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementslnb_setBeginTimeDownLong = document.querySelectorAll(".lnb_setBeginTimeDownLong");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementslnb_setBeginTimeDownLong.forEach(function(element) {
            element.addEventListener("click", lnb_fsetTimeEndDownLong);
        });
        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementslnb_setBeginTimeDown = document.querySelectorAll(".lnb_setBeginTimeDown");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementslnb_setBeginTimeDown.forEach(function(element) {
            element.addEventListener("click", lnb_fsetTimeEndDown);
        });
        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementslnb_setBeginTimeLeftLong = document.querySelectorAll(".lnb_setBeginTimeLeftLong");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementslnb_setBeginTimeLeftLong.forEach(function(element) {
            element.addEventListener("click", lnb_fsetTimeStartLeftLong);
        });
        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementslnb_setBeginTimeLeft = document.querySelectorAll(".lnb_setBeginTimeLeft");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementslnb_setBeginTimeLeft.forEach(function(element) {
            element.addEventListener("click", lnb_fsetTimeStartLeft);
        });
        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementslnb_setBeginTimeRightLong = document.querySelectorAll(".lnb_setBeginTimeRightLong");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementslnb_setBeginTimeRightLong.forEach(function(element) {
            element.addEventListener("click", lnb_fsetTimeStartRightLong);
        });
        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementslnb_setBeginTimeRight = document.querySelectorAll(".lnb_setBeginTimeRight");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementslnb_setBeginTimeRight.forEach(function(element) {
            element.addEventListener("click", lnb_fsetTimeStartRight);
        });
        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementsWithClasslnb_cutE1W_transcript = document.querySelectorAll(".lnb_cutE1W_transcript");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementsWithClasslnb_cutE1W_transcript.forEach(function(element) {
            element.addEventListener("click", lnb_fcutE1W);
        });
        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementsWithClasslnb_cutB1W_transcript = document.querySelectorAll(".lnb_cutB1W_transcript");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementsWithClasslnb_cutB1W_transcript.forEach(function(element) {
            element.addEventListener("click", lnb_fcutB1W);
        });
        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementsWithClasslnb_mergeDown_transcript = document.querySelectorAll(".lnb_mergeDown_transcript");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementsWithClasslnb_mergeDown_transcript.forEach(function(element) {
            element.addEventListener("click", lnb_fmergeDownTranscript);
        });
        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementsWithClasslnb_save_transcript = document.querySelectorAll(".lnb_save_transcript");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementsWithClasslnb_save_transcript.forEach(function(element) {
            element.addEventListener("click", lnb_fsave_content_from_card);
        });
        // Lấy tất cả các phần tử có lớp "lnb_edit_transcript click"
        const elementsWithClasslnb_edit_transcript = document.querySelectorAll(".lnb_edit_transcript");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementsWithClasslnb_edit_transcript.forEach(function(element) {
            element.addEventListener("click", lnb_fedit_from_card);
        });
        // Lấy tất cả các phần tử có lớp "transcript click"
        const elementsWithClasslnb_translate_transcript = document.querySelectorAll(".lnb_translate_transcript");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementsWithClasslnb_translate_transcript.forEach(function(element) {
            element.addEventListener("click", lnb_ftranslateFromCard);
        });
        // Lấy tất cả các phần tử có lớp "transcript click"
        const elementsWithClasslnb_transcript_learned = document.querySelectorAll(".lnb_transcript_learned");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementsWithClasslnb_transcript_learned.forEach(function(element) {
            element.addEventListener("click", lnb_play_video_by_transcript);
        });
        // Lấy tất cả các phần tử có lớp "delete"
        const elementsWithClasslnb_delete_transcript = document.querySelectorAll(".lnb_delete_transcript");
        // Gắn sự kiện click cho từng phần tử có lớp "abc"
        elementsWithClasslnb_delete_transcript.forEach(function(element) {
            element.addEventListener("click", lnb_delete_transcript);
        });
        lnb_container_of_transcripts_active = document.getElementById('lnb_content_render_youtube')
        lnb_all_card_active = lnb_container_of_transcripts_active.querySelectorAll('div[timeStart][timeEnd]');
    }

}
function lnb_fsetTimeEndUpLong(_event){
    let parentElementCard = _event.target.parentElement.parentElement
    let mainTransElement = parentElementCard.querySelector('.lnb_transcript_learned')
    let indexTranscript = parentElementCard.querySelector('.lnb_transcript_learned').getAttribute("index")
    let timeStart = lnb_transcripts_Youtube_Active[indexTranscript].timeStart
    timeStart = parseFloat(timeStart)
    let timeEnd = lnb_transcripts_Youtube_Active[indexTranscript].timeEnd
    timeEnd = parseFloat(timeEnd)
    lnb_limit_left = timeStart
    
    if(timeEnd - 1 > timeStart + 0.5){
        lnb_limit_right = timeEnd - 1
    }else{
        lnb_limit_right = timeEnd
    }
    document.querySelector('.video-stream').currentTime = lnb_limit_right - 0.5
    document.querySelector('.video-stream').play()
    mainTransElement.setAttribute('timeEnd',lnb_limit_right)
    lnb_transcripts_Youtube_Active[indexTranscript].timeEnd = lnb_limit_right
    lnb_showTimeControl()
    let lnb_transcripts_Youtube_Data_String = JSON.stringify(lnb_transcripts_Youtube_Active)
      localStorage.setItem(lnb_addressStoreActive,lnb_transcripts_Youtube_Data_String)

}
function lnb_fsetTimeEndUp(_event){
    let parentElementCard = _event.target.parentElement.parentElement
    let mainTransElement = parentElementCard.querySelector('.lnb_transcript_learned')
    let indexTranscript = parentElementCard.querySelector('.lnb_transcript_learned').getAttribute("index")
    let timeStart = lnb_transcripts_Youtube_Active[indexTranscript].timeStart
    timeStart = parseFloat(timeStart)
    let timeEnd = lnb_transcripts_Youtube_Active[indexTranscript].timeEnd
    timeEnd = parseFloat(timeEnd)
    lnb_limit_left = timeStart
    
    if(timeEnd - 0.25 > timeStart + 0.25){
        lnb_limit_right = timeEnd - 0.25
    }else{
        lnb_limit_right = timeEnd
    }
    document.querySelector('.video-stream').currentTime = lnb_limit_right - 0.5
    document.querySelector('.video-stream').play()
    mainTransElement.setAttribute('timeEnd',lnb_limit_right)
    lnb_transcripts_Youtube_Active[indexTranscript].timeEnd = lnb_limit_right
    lnb_showTimeControl()
    let lnb_transcripts_Youtube_Data_String = JSON.stringify(lnb_transcripts_Youtube_Active)
      localStorage.setItem(lnb_addressStoreActive,lnb_transcripts_Youtube_Data_String)

}
function lnb_fsetTimeEndDown(_event){
    let parentElementCard = _event.target.parentElement.parentElement
    let mainTransElement = parentElementCard.querySelector('.lnb_transcript_learned')
    let indexTranscript = parentElementCard.querySelector('.lnb_transcript_learned').getAttribute("index")
    
    let timeStart = lnb_transcripts_Youtube_Active[indexTranscript].timeStart
    timeStart = parseFloat(timeStart)
    let timeEnd = lnb_transcripts_Youtube_Active[indexTranscript].timeEnd
    timeEnd = parseFloat(timeEnd)

    lnb_limit_right = timeEnd + 0.25
    
    lnb_limit_left = timeStart
    document.querySelector('.video-stream').currentTime = lnb_limit_right - 0.5
    document.querySelector('.video-stream').play()
    mainTransElement.setAttribute('timeEnd',lnb_limit_right)
    lnb_transcripts_Youtube_Active[indexTranscript].timeEnd = lnb_limit_right
    lnb_showTimeControl()
    let lnb_transcripts_Youtube_Data_String = JSON.stringify(lnb_transcripts_Youtube_Active)
      localStorage.setItem(lnb_addressStoreActive,lnb_transcripts_Youtube_Data_String)

}
function lnb_fsetTimeEndDownLong(_event){
    let parentElementCard = _event.target.parentElement.parentElement
    let mainTransElement = parentElementCard.querySelector('.lnb_transcript_learned')
    let indexTranscript = parentElementCard.querySelector('.lnb_transcript_learned').getAttribute("index")
    let timeStart = lnb_transcripts_Youtube_Active[indexTranscript].timeStart
    timeStart = parseFloat(timeStart)
    let timeEnd = lnb_transcripts_Youtube_Active[indexTranscript].timeEnd
    timeEnd = parseFloat(timeEnd)

    lnb_limit_right = timeEnd + 1
    
    lnb_limit_left = timeStart
    document.querySelector('.video-stream').currentTime = lnb_limit_right - 0.5
    document.querySelector('.video-stream').play()
    mainTransElement.setAttribute('timeEnd',lnb_limit_right)
    lnb_transcripts_Youtube_Active[indexTranscript].timeEnd = lnb_limit_right
    lnb_showTimeControl()
    let lnb_transcripts_Youtube_Data_String = JSON.stringify(lnb_transcripts_Youtube_Active)
      localStorage.setItem(lnb_addressStoreActive,lnb_transcripts_Youtube_Data_String)

}
function lnb_fsetTimeStartLeftLong(_event){
    let parentElementCard = _event.target.parentElement.parentElement
    let mainTransElement = parentElementCard.querySelector('.lnb_transcript_learned')
    let indexTranscript = parentElementCard.querySelector('.lnb_transcript_learned').getAttribute("index")
    let timeStart = lnb_transcripts_Youtube_Active[indexTranscript].timeStart
    timeStart = parseFloat(timeStart)
    let timeEndUp = lnb_transcripts_Youtube_Active[indexTranscript - 1].timeEnd
    timeEndUp = parseFloat(timeEndUp)
    if(timeStart - 1 < timeEndUp){
        lnb_limit_left = timeEndUp + 0.05
    }else{
        lnb_limit_left = timeStart - 1
    }
    
    lnb_limit_right = lnb_transcripts_Youtube_Active[indexTranscript].timeEnd
    document.querySelector('.video-stream').currentTime = lnb_limit_left
    document.querySelector('.video-stream').play()
    mainTransElement.setAttribute('timeStart',lnb_limit_left)
    lnb_transcripts_Youtube_Active[indexTranscript].timeStart = lnb_limit_left
    lnb_showTimeControl()
    let lnb_transcripts_Youtube_Data_String = JSON.stringify(lnb_transcripts_Youtube_Active)
      localStorage.setItem(lnb_addressStoreActive,lnb_transcripts_Youtube_Data_String)

}
function lnb_fsetTimeStartLeft(_event){
    let parentElementCard = _event.target.parentElement.parentElement
    let mainTransElement = parentElementCard.querySelector('.lnb_transcript_learned')
    let indexTranscript = parentElementCard.querySelector('.lnb_transcript_learned').getAttribute("index")
    let timeStart = lnb_transcripts_Youtube_Active[indexTranscript].timeStart
    timeStart = parseFloat(timeStart)

    let timeEndUp = lnb_transcripts_Youtube_Active[indexTranscript - 1].timeEnd
    timeEndUp = parseFloat(timeEndUp)
    if(timeStart - 0.25 < timeEndUp){
        lnb_limit_left = timeEndUp + 0.01
    }else{
        lnb_limit_left = timeStart - 0.25
    }
    lnb_limit_right = lnb_transcripts_Youtube_Active[indexTranscript].timeEnd
    document.querySelector('.video-stream').currentTime = lnb_limit_left
    document.querySelector('.video-stream').play()
    mainTransElement.setAttribute('timeStart',lnb_limit_left)
    lnb_transcripts_Youtube_Active[indexTranscript].timeStart = lnb_limit_left
    lnb_showTimeControl()
    let lnb_transcripts_Youtube_Data_String = JSON.stringify(lnb_transcripts_Youtube_Active)
      localStorage.setItem(lnb_addressStoreActive,lnb_transcripts_Youtube_Data_String)

}
function lnb_fsetTimeStartRightLong(_event){
    let parentElementCard = _event.target.parentElement.parentElement
    let mainTransElement = parentElementCard.querySelector('.lnb_transcript_learned')
    let indexTranscript = parentElementCard.querySelector('.lnb_transcript_learned').getAttribute("index")
    let timeStart = lnb_transcripts_Youtube_Active[indexTranscript].timeStart
    timeStart = parseFloat(timeStart)
    let timeEnd = lnb_transcripts_Youtube_Active[indexTranscript].timeEnd
    timeEnd = parseFloat(timeEnd)
    if(timeStart + 1 > timeEnd - 0.5){
        lnb_limit_left = timeStart + 1
    }else{
        lnb_limit_left = timeStart
    }
    lnb_limit_right = lnb_transcripts_Youtube_Active[indexTranscript].timeEnd
    document.querySelector('.video-stream').currentTime = lnb_limit_left
    document.querySelector('.video-stream').play()
    mainTransElement.setAttribute('timeStart',lnb_limit_left)
    lnb_transcripts_Youtube_Active[indexTranscript].timeStart = lnb_limit_left
    lnb_showTimeControl()
    let lnb_transcripts_Youtube_Data_String = JSON.stringify(lnb_transcripts_Youtube_Active)
      localStorage.setItem(lnb_addressStoreActive,lnb_transcripts_Youtube_Data_String)
}
function lnb_fsetTimeStartRight(_event){
    let parentElementCard = _event.target.parentElement.parentElement
    let mainTransElement = parentElementCard.querySelector('.lnb_transcript_learned')
    let indexTranscript = parentElementCard.querySelector('.lnb_transcript_learned').getAttribute("index")
    let timeStart = lnb_transcripts_Youtube_Active[indexTranscript].timeStart
    timeStart = parseFloat(timeStart)
    lnb_limit_left = timeStart + 0.25
    lnb_limit_right = lnb_transcripts_Youtube_Active[indexTranscript].timeEnd
    document.querySelector('.video-stream').currentTime = lnb_limit_left
    document.querySelector('.video-stream').play()
    mainTransElement.setAttribute('timeStart',lnb_limit_left)
    lnb_transcripts_Youtube_Active[indexTranscript].timeStart = lnb_limit_left
    lnb_showTimeControl()
    let lnb_transcripts_Youtube_Data_String = JSON.stringify(lnb_transcripts_Youtube_Active)
      localStorage.setItem(lnb_addressStoreActive,lnb_transcripts_Youtube_Data_String)
}

function lnb_fcutE1W(_event){
    let parentElementCard = _event.target.parentElement.parentElement
    let indexMain = parentElementCard.querySelector('.lnb_transcript_learned').getAttribute("index")
    indexMain = Number(indexMain)
    let indexUnder = Number(indexMain) + 1
    let sentenceObject = lnb_cutStringE1W(lnb_transcripts_Youtube_Active[indexMain].voca)
    let sentenceMainNew = sentenceObject.sentenceNew
    let wordCut = sentenceObject.endWord
    let timeCut = lnb_calculateSubstringTime(lnb_transcripts_Youtube_Active[indexMain].voca, wordCut, lnb_transcripts_Youtube_Active[indexMain].timeStart, lnb_transcripts_Youtube_Active[indexMain].timeEnd)
    let sentenceUnderNew
    if(lnb_languageLearningCodeYoutueActive == 'zh-CN' || 
            lnb_languageLearningCodeYoutueActive == 'zh-TW' ||
            lnb_languageLearningCodeYoutueActive == 'ja')
        {
            sentenceUnderNew =  wordCut + lnb_transcripts_Youtube_Active[indexUp].voca
        }else{
            sentenceUnderNew = wordCut + ' ' + lnb_transcripts_Youtube_Active[indexUnder].voca 
        }
        lnb_transcripts_Youtube_Active[indexMain].voca = sentenceMainNew
        lnb_transcripts_Youtube_Active[indexMain].timeEnd = parseFloat(lnb_transcripts_Youtube_Active[indexMain].timeEnd) - timeCut
        
        lnb_limit_left = lnb_transcripts_Youtube_Active[indexMain].timeStart
        lnb_limit_right = lnb_transcripts_Youtube_Active[indexMain].timeEnd
        
        lnb_transcripts_Youtube_Active[indexUnder].voca = sentenceUnderNew
        lnb_transcripts_Youtube_Active[indexUnder].timeStart = parseFloat(lnb_transcripts_Youtube_Active[indexUnder].timeStart) - timeCut

    lnb_render_transcript_youtube(lnb_transcripts_Youtube_Active)
    lnb_showTimeControl()
    let lnb_transcripts_Youtube_Data_String = JSON.stringify(lnb_transcripts_Youtube_Active)
      localStorage.setItem(lnb_addressStoreActive,lnb_transcripts_Youtube_Data_String)
    
}
function lnb_fcutB1W(_event){
    let parentElementCard = _event.target.parentElement.parentElement
    let indexMain = parentElementCard.querySelector('.lnb_transcript_learned').getAttribute("index")
    indexMain = Number(indexMain)
    let indexUp = Number(indexMain) - 1
    let sentenceObject = lnb_cutStringB1W(lnb_transcripts_Youtube_Active[indexMain].voca)
    let sentenceMainNew = sentenceObject.sentenceNew
    let wordCut = sentenceObject.firstWord
    let timeCut = lnb_calculateSubstringTime(lnb_transcripts_Youtube_Active[indexMain].voca, wordCut, lnb_transcripts_Youtube_Active[indexMain].timeStart, lnb_transcripts_Youtube_Active[indexMain].timeEnd)
    let sentenceUpNew
    if(lnb_languageLearningCodeYoutueActive == 'zh-CN' || 
            lnb_languageLearningCodeYoutueActive == 'zh-TW' ||
            lnb_languageLearningCodeYoutueActive == 'ja')
        {
            sentenceUpNew = lnb_transcripts_Youtube_Active[indexUp].voca + wordCut
        }else{
            sentenceUpNew = lnb_transcripts_Youtube_Active[indexUp].voca + ' ' + wordCut 
        }
        lnb_transcripts_Youtube_Active[indexUp].voca = sentenceUpNew
        lnb_transcripts_Youtube_Active[indexUp].timeEnd = parseFloat(lnb_transcripts_Youtube_Active[indexUp].timeEnd) + timeCut
        lnb_transcripts_Youtube_Active[indexMain].voca = sentenceMainNew
        lnb_transcripts_Youtube_Active[indexMain].timeStart = parseFloat(lnb_transcripts_Youtube_Active[indexMain].timeStart) + timeCut
        
        lnb_limit_left = lnb_transcripts_Youtube_Active[indexUp].timeStart
        lnb_limit_right = lnb_transcripts_Youtube_Active[indexUp].timeEnd
    lnb_render_transcript_youtube(lnb_transcripts_Youtube_Active)
    lnb_showTimeControl()
    let lnb_transcripts_Youtube_Data_String = JSON.stringify(lnb_transcripts_Youtube_Active)
      localStorage.setItem(lnb_addressStoreActive,lnb_transcripts_Youtube_Data_String)
    
}

function lnb_fmergeDownTranscript(_event){
    let parentElementCard = _event.target.parentElement.parentElement
    let idMain = parentElementCard.getAttribute("idcard")
    let indexMain = parentElementCard.querySelector('.lnb_transcript_learned').getAttribute("index")
        indexMain = Number(indexMain)
    let indexMerge = indexMain + 1
    let transcriptMain = lnb_transcripts_Youtube_Active[indexMain].voca
    let transcriptMeaningMain = lnb_transcripts_Youtube_Active[indexMain].sentenceMean
    let transcriptMerge = lnb_transcripts_Youtube_Active[indexMerge].voca
    let transcriptMeaningMerge = lnb_transcripts_Youtube_Active[indexMerge].sentenceMean
    let voca = transcriptMain + ' ' + transcriptMerge
    let sentenceMean = transcriptMeaningMain + ' ' + transcriptMeaningMerge
    let timeEnd = lnb_transcripts_Youtube_Active[indexMerge].timeEnd
    lnb_transcripts_Youtube_Active[indexMain].voca = voca
    lnb_transcripts_Youtube_Active[indexMain].sentenceMean = sentenceMean
    lnb_transcripts_Youtube_Active[indexMain].timeEnd = timeEnd
    lnb_transcripts_Youtube_Active.splice(indexMerge, 1);
    lnb_render_transcript_youtube(lnb_transcripts_Youtube_Active)
    lnb_limit_left = lnb_transcripts_Youtube_Active[indexMain].timeStart
    document.querySelector('.video-stream').currentTime = lnb_limit_left
    lnb_limit_right = parseFloat(timeEnd)
    document.querySelector('.video-stream').play()
    lnb_showTimeControl()
    let lnb_transcripts_Youtube_Data_String = JSON.stringify(lnb_transcripts_Youtube_Active)
      localStorage.setItem(lnb_addressStoreActive,lnb_transcripts_Youtube_Data_String)

    let numberTranscript = lnb_transcripts_Youtube_Active.length
    lnb_manageNumberTran[lnb_addressStoreActive]  = numberTranscript
    let idbuttonpage = `#id_lnb_${lnb_addressStoreActive}_button`
    document.querySelector(idbuttonpage).innerText = numberTranscript
    let lnb_manageNumberTranString = JSON.stringify(lnb_manageNumberTran)
    localStorage.setItem('lnb_manageNumberTran',lnb_manageNumberTranString)
}

function lnb_fedit_from_card(event){
    let parentElementCard = event.target.parentElement.parentElement
    let parentElementGroupControlCard = event.target.parentElement
    event.target.style.display = 'none'
    parentElementGroupControlCard.querySelector('.lnb_save_transcript').style.display = "block"
    
    parentElementCard.querySelector('.lnb_transcript_learned').focus()
    parentElementCard.querySelector('.lnb_transcript_learned').setAttribute('class', 'lnb_transcript_learned lnb_edit_transcipts')
    parentElementCard.querySelector('.lnb_transcript_meaning').setAttribute('class', 'lnb_transcript_meaning lnb_edit_transcipts')

    parentElementCard.querySelector('.lnb_transcript_learned').setAttribute('contenteditable', 'true')
    parentElementCard.querySelector('.lnb_transcript_learned').addEventListener("keydown", function(event) {
        event.stopPropagation();
    });
    parentElementCard.querySelector('.lnb_transcript_learned').addEventListener("keyup", function(event) {
        event.stopPropagation();
    });
    parentElementCard.querySelector('.lnb_transcript_meaning').setAttribute('contenteditable', 'true')
    parentElementCard.querySelector('.lnb_transcript_meaning').addEventListener("keydown", function(event) {
        event.stopPropagation();
    });
    parentElementCard.querySelector('.lnb_transcript_meaning').addEventListener("keyup", function(event) {
        event.stopPropagation();
    });
    parentElementCard.style.backgroundColor = 'white'
}
function lnb_fsave_content_from_card(event){
    let parentElementCard = event.target.parentElement.parentElement
    let parentElementGroupControlCard = event.target.parentElement
    event.target.style.display = 'none'
    parentElementGroupControlCard.querySelector('.lnb_edit_transcript').style.display = "block"
    parentElementCard.querySelector('.lnb_transcript_learned').setAttribute('contenteditable', 'false')
    parentElementCard.querySelector('.lnb_transcript_meaning').setAttribute('contenteditable', 'false')
    parentElementCard.querySelector('.lnb_transcript_learned').setAttribute('class', 'lnb_transcript_learned')
    parentElementCard.querySelector('.lnb_transcript_meaning').setAttribute('class', 'lnb_transcript_meaning')
    parentElementCard.style.backgroundColor = 'rgba(240, 255, 255, 0.908)'

    let transcriptCard = parentElementCard.querySelector('.lnb_transcript_learned').innerHTML
    let transcriptMeanCard = parentElementCard.querySelector('.lnb_transcript_meaning').innerHTML
    let idTranscriptCard = parentElementCard.getAttribute('idcard').trim()
    let newObjectTranscript = {id: idTranscriptCard,voca:transcriptCard, sentenceMean: transcriptMeanCard , urlVideo:window.location.href, timeStart: lnb_limit_left, timeEnd: lnb_limit_right}

    for (var i = 0; i < lnb_transcripts_Youtube_Active.length; i++) {
        if (lnb_transcripts_Youtube_Active[i].id == idTranscriptCard) {
          // Sửa object tại vị trí i
          lnb_transcripts_Youtube_Active[i].voca = transcriptCard;
          lnb_transcripts_Youtube_Active[i].sentenceMean = transcriptMeanCard;
          break; // Kết thúc vòng lặp sau khi tìm thấy và sửa object
        }
      }
      let lnb_transcripts_Youtube_Data_String = JSON.stringify(lnb_transcripts_Youtube_Active)
      localStorage.setItem(lnb_addressStoreActive,lnb_transcripts_Youtube_Data_String)

}


function lnb_ftranslateFromCard(_event){
    let parentElementCard = _event.target.parentElement.parentElement
    let contentTranslate = _event.target.parentElement.parentElement.querySelector('.lnb_transcript_learned').innerText
    Promise.all([lnb_ftranslateText(contentTranslate,lnb_languageLearningCodeYoutueActive, lnb_languageCodeTranslateYoutubeActive)])
                .then(results => {
                  let sentence = results[0].voca
                  let sentenceMean = results[0].vocaMean + "<br>"
                  parentElementCard.querySelector('.lnb_transcript_meaning').innerHTML += sentenceMean
                  console.log(results[0])
                })
                .catch(error => {
                  console.error(error);
                });
}

  

function lnb_delete_transcript(_event){
    let parentElementCard = _event.target.parentElement.parentElement
    let idDelete = parentElementCard.getAttribute("idcard")
    lnb_transcripts_Youtube_Active = lnb_removeObjectTranscriptWithId(lnb_transcripts_Youtube_Active,idDelete)
    let transcriptDataString = JSON.stringify(lnb_transcripts_Youtube_Active)
    localStorage.setItem(lnb_addressStoreActive,transcriptDataString)
    lnb_transcripts_Youtube_Data_Active = transcriptDataString
    lnb_render_transcript_youtube(lnb_transcripts_Youtube_Active)

    let numberTranscript = lnb_transcripts_Youtube_Active.length
    lnb_manageNumberTran[lnb_addressStoreActive]  = numberTranscript
    let idbuttonpage = `#id_lnb_${lnb_addressStoreActive}_button`
    document.querySelector(idbuttonpage).innerText = numberTranscript
    let lnb_manageNumberTranString = JSON.stringify(lnb_manageNumberTran)
    localStorage.setItem('lnb_manageNumberTran',lnb_manageNumberTranString)
}

function lnb_play_video_by_transcript(_event){
    let urlPage = lnb_layChuoiSauDauHoi(window.location.href)
    let parentDiv = this.closest('.lnb_transcript_learned');
    let checkEditAvalable = parentDiv.getAttribute('contenteditable')
    let checkEditAvalableMeaning = parentDiv.getAttribute('contenteditable')
    if(checkEditAvalable == 'true' || checkEditAvalable == true ||
        checkEditAvalableMeaning == 'true' || checkEditAvalableMeaning == true){

    }else{
        let url = parentDiv.getAttribute("url")
        let timeStart = parentDiv.getAttribute("timeStart")
        let timeEnd = parentDiv.getAttribute("timeEnd")
        let index = parentDiv.getAttribute("index")
        if(url == urlPage){
            lnb_limit_left = parseFloat(timeStart)
            lnb_limit_right = parseFloat(timeEnd)
            document.querySelector('.video-stream').currentTime = lnb_limit_left
            document.querySelector('.video-stream').play()
            lnb_showTimeControl()
            lnb_numberTranActive = index
        }else{
            lnb_openNewTab(url)
        }
    }
    
}

function lnb_showTimeControl(){
    lnb_left_limit_time.innerText = lnb_fformatSeconds(lnb_limit_left)
    lnb_right_limit_time.innerText = lnb_fformatSeconds(lnb_limit_right)
}
