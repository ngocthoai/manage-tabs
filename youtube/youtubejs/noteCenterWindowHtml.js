

const lnb_vocaYoutube = document.createElement("div");
const id_lnb_vocaYoutue = 'id_lnb_vocaYoutube'

const lnb_groupBtCloseFullMinimizeHtml = `
    <div id="id_lnb_youtube_minimize">-</div>
    <div id="id_lnb_youtube_maximum">+</div>
    <div id="id_lnb_youtube_close">x</div>
`
const lnb_menuNotePageHtlm = `
    <div class="lnb_content_note_button">
    <div id="id_lnb_note1_button" class="lnb_button_content_youtube" dataTran="note1"> ${(lnb_manageNumberTran.note1 == 0)? "vid 1": lnb_manageNumberTran.note1}</div>
    <div id="id_lnb_note2_button" class="lnb_button_content_youtube" dataTran="note2">${(lnb_manageNumberTran.note2 == 0)? "vid 2": lnb_manageNumberTran.note2}</div>
    <div id="id_lnb_note3_button" class="lnb_button_content_youtube" dataTran="note3">${(lnb_manageNumberTran.note3 == 0)? "vid 3": lnb_manageNumberTran.note3}</div>
    <div id="id_lnb_note4_button" class="lnb_button_content_youtube" dataTran="note4">${(lnb_manageNumberTran.note4 == 0)? "vid 4": lnb_manageNumberTran.note4}</div>
    <div id="id_lnb_note5_button" class="lnb_button_content_youtube" dataTran="note5">${(lnb_manageNumberTran.note5 == 0)? "vid 5": lnb_manageNumberTran.note5}</div>
    <div id="id_lnb_note6_button" class="lnb_button_content_youtube" dataTran="note6">${(lnb_manageNumberTran.note6 == 0)? "vid 6": lnb_manageNumberTran.note6}</div>
    <div id="id_lnb_note7_button" class="lnb_button_content_youtube" dataTran="note7">${(lnb_manageNumberTran.note7 == 0)? "vid 7": lnb_manageNumberTran.note7}</div>
    <div id="id_lnb_note8_button" class="lnb_button_content_youtube" dataTran="note8">${(lnb_manageNumberTran.note8 == 0)? "vid 8": lnb_manageNumberTran.note8}</div>
    <div id="id_lnb_note9_button" class="lnb_button_content_youtube" dataTran="note9">${(lnb_manageNumberTran.note9 == 0)? "vid 9": lnb_manageNumberTran.note9}</div>
    <div id="id_lnb_note10_button" class="lnb_button_content_youtube" dataTran="note10">${(lnb_manageNumberTran.note10 == 0)? "vid 10": lnb_manageNumberTran.note10}</div>
    <div id="id_lnb_note11_button" class="lnb_button_content_youtube" dataTran="note11">${(lnb_manageNumberTran.note11 == 0)? "vid 11": lnb_manageNumberTran.note11}</div>
    <div id="id_lnb_note12_button" class="lnb_button_content_youtube" dataTran="note12">${(lnb_manageNumberTran.note12 == 0)? "vid 12": lnb_manageNumberTran.note12}</div>
    <div id="id_lnb_note13_button" class="lnb_button_content_youtube" dataTran="note13">${(lnb_manageNumberTran.note13 == 0)? "vid 13": lnb_manageNumberTran.note13}</div>
    <div id="id_lnb_note14_button" class="lnb_button_content_youtube" dataTran="note14">${(lnb_manageNumberTran.note14 == 0)? "vid 14": lnb_manageNumberTran.note14}</div>
    <div id="id_lnb_note15_button" class="lnb_button_content_youtube" dataTran="note15">${(lnb_manageNumberTran.note15 == 0)? "vid 15": lnb_manageNumberTran.note15}</div>
    </div>
`
const lnb_groupSearchHtml = `
    <div id="lnb_microAndNew">
        <div id="lnb_speechButton"> <img src="http://pngimg.com/uploads/microphone/microphone_PNG101707.png" width="16" height="26" alt="Lang"></div>
        <div id="lnb_speechingStatus"> <img src="https://media2.giphy.com/media/aw6CWyyLQ8WyRuktxR/200.gif" width="21" height="34" alt="Lang"></div>
    </div>
    <div id="lnb_begin_time_button" class="lnb_button_youtube">begin</div>
    <div id="lnb_left_limit_time"></div>
    <div id="lnb_youtubeCurrentTime">00</div>
    <div id="lnb_right_limit_time"></div>
    <div id="lnb_end_time_button" class="lnb_button_youtube">end</div>
`
const lnb_groupBtImportHtml = `
    <div id="lnb_source_button" class="lnb_button_save_YT">source</div>
    <div id="lnb_get_transcript_button" class="lnb_button_save_YT">get-transcripts</div>
    <textarea id="lnb_valua_import" placeholder="paste [MASTER-TRANSCRIPTS or file.srt] in here!"></textarea>
    <div id="lnb_save_import_button" dataValueId="lnb_valua_import" class="lnb_button_save_YT">save</div>
`
const lnb_buttonOpenLearningLangHtml = `
    <div id="lnb_LearningLanguage">
        <div class="lnb_buttonYTLang"><img src="https://1.bp.blogspot.com/-wpb3y7eV7Xk/YN9tI2aH8CI/AAAAAAAAEAE/ppeJtC4QxEY42mryoAl_HkQ2AAoRhE8LQCLcBGAsYHQ/s512/languages.png" alt="Lang" width="25" height="25"></div>
        <div id="lnb_originLang">${lnb_languageLearningNameYoutueActive}</div>
    </div>
`
const lnb_buttonOpenTranslateLangHtml = `
    <div id="lnb_translateLanguage">
        <div class="lnb_buttonYTLang"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/2048px-Google_Translate_logo.svg.png" width="25" height="25" alt="Lang"> </div>
        <div id="lnb_translateLang">${lnb_languageNameTranslateYoutubeActive}</div>
    </div>
`
let lnb_vocaContentYoutubeHTML = 
            `   
                <style id="lnb_styleButtonGr">
                    .lnb_groupButtonSetTimeUp{
                        display: none;
                    }
                    .lnb_groupButtonControlCard{
                        display: none;
                    }
                    .lnb_groupButtonSetTimeDown{
                        display: none;
                    }
                </style>
                <div class="lnb_vocaYoutube">
                    <div id="id_lnb_vocaYoutubeheader"><img src="https://notebookmagic.s3.ap-southeast-1.amazonaws.com/homepage/logolangnotebook.png"/></div>
                    
                    ${lnb_groupBtCloseFullMinimizeHtml}

                    

                    <div class="lnb_headerYoutube">
                        <div class="lnb_content_header">
                            ${lnb_menuNotePageHtlm}
                        </div>
                        <div class="lnb_search_voca_Youtube">
                            ${lnb_groupSearchHtml}
                        </div>
                        <div class="lnb_search_voca_Youtube">
                            <div id="lnb_idButtonPractice" class="lnb_button_youtube">practice</div>
                            <div id="lnb_idButtonShadowing" class="lnb_button_youtube">shadowing</div>
                            <input id="lnb_search_voca_input" placeholder="search..."></input>
                            <div id="lnb_addNew_transcript" class="lnb_button_youtube">create</div>
                        </div>
                    </div>

                    <div class="lnb_contentYoutube">
                        <div id="id_lnb_NotePage">
                            <div id="lnb_content_render_youtube">
                                <mark>Your Vocabularies</mark>
                            </div>
                            <div class="lnb_row_import_transcript">
                                ${lnb_groupBtImportHtml}
                            </div>
                        </div>
                        <div class="lnb_groupButtonCopy">
                            <div id="id_lnb_copy_main_script" class="lnb_buttonCard">copy transcripts</div>
                            <div id="id_lnb_edit_main_script" class="lnb_buttonCard" status="none">edit</div>
                        </div>
                    </div>

                    <div class="lnb_footerYoutube">
                        <iframe src="https://langnotebookad1.s3.ap-southeast-1.amazonaws.com/index.html" frameborder="0"></iframe>
                    </div>

                    <div class="lnb_controlLanguage">
                        ${lnb_buttonOpenLearningLangHtml}
                        ${lnb_buttonOpenTranslateLangHtml}
                    </div>
                    
                    <div id="lnb_windowShowLearningLang"></div>
                    <div id="lnb_windowShowTranslateLang"></div>

                </div>
            `
            lnb_vocaYoutube.setAttribute('id',id_lnb_vocaYoutue)
            lnb_vocaYoutube.innerHTML = lnb_vocaContentYoutubeHTML;
            lnb_vocaYoutube.style.right = lnb_rightYoutubetWindow;
            lnb_vocaYoutube.style.display = lnb_onoffyoutube;
document.body.insertAdjacentElement("afterend", lnb_vocaYoutube);

lnb_dragElement_Youtube(document.getElementById(id_lnb_vocaYoutue));

let lnb_container_of_transcripts_active = document.getElementById('lnb_content_render_youtube');
let lnb_all_card_active = lnb_container_of_transcripts_active.querySelectorAll('div[timeStart][timeEnd]');

let lnb_notePageDataActive = localStorage.getItem('lnb_notePageActive')
if(lnb_notePageDataActive == null || lnb_notePageDataActive == 'null'){
    lnb_noteYoutubePageActive = 'note1'
    lnb_fActivePageNote(lnb_noteYoutubePageActive)
}else{
    lnb_noteYoutubePageActive = lnb_notePageDataActive
    lnb_addressStoreActive = lnb_notePageDataActive
    lnb_fActivePageNote(lnb_noteYoutubePageActive)
}


lnb_transcripts_Youtube_Data_Active = localStorage.getItem(lnb_noteYoutubePageActive)
if(lnb_transcripts_Youtube_Data_Active == 'null' || lnb_transcripts_Youtube_Data_Active == null){
    lnb_transcripts_Youtube_Active = []
    lnb_render_transcript_youtube(lnb_transcripts_Youtube_Active)
}else{
    lnb_transcripts_Youtube_Active = JSON.parse(lnb_transcripts_Youtube_Data_Active)
    lnb_render_transcript_youtube(lnb_transcripts_Youtube_Active)
}

document.getElementById('id_lnb_edit_main_script').addEventListener('click', function(event) {
    let status = event.target.getAttribute('status')
    var styleElement = document.querySelector("#lnb_styleButtonGr");

   if(status == 'none'){
        event.target.setAttribute('status','flex')
        styleElement.textContent = `
        .lnb_groupButtonSetTimeUp{display:flex;}
        .lnb_groupButtonControlCard{display:flex;}
        .lnb_groupButtonSetTimeDown{display:flex;}
        `
   }else{
        event.target.setAttribute('status','none')
        styleElement.textContent = `
        .lnb_groupButtonSetTimeUp{display:none;}
        .lnb_groupButtonControlCard{display:none;}
        .lnb_groupButtonSetTimeDown{display:none;}
        `
   }
});
document.getElementById('id_lnb_copy_main_script').addEventListener('click', function(event) {
    // Tạo một phần tử tạm thời (textarea) để sao chép nội dung vào clipboard
    const tempTextArea = document.createElement('textarea');
    let transcript
    if(lnb_varraysearch.length <= 0){
        transcript = JSON.stringify(lnb_transcripts_Youtube_Active)
    }else{
        transcript = JSON.stringify(lnb_varraysearch)
    }
    tempTextArea.value = transcript;
    // Đặt phần tử tạm thời vào DOM
    document.body.appendChild(tempTextArea);

    // Lựa chọn toàn bộ nội dung của phần tử tạm thời
    tempTextArea.select();
    
    // Sao chép nội dung vào clipboard
    document.execCommand('copy');

    // Gỡ bỏ phần tử tạm thời
    document.body.removeChild(tempTextArea);

    // Thông báo cho người dùng
    alert('Nội dung đã được sao chép. Bây giờ bạn có thể dán nó vào Notepad để lưu trữ lâu dài.');
});

let lnb_vstb = document.querySelector('#lnb_search_voca_input')
lnb_vstb.addEventListener('input',lnb_fsearchTranscript)

function lnb_fsearchTranscript(event) {
    if(lnb_Video_Youtube_Streaming){
        lnb_Video_Youtube_Streaming.pause()
    }
    let query = event.target.value.toLowerCase()
    lnb_varraysearch = []
    if (query.trim() === '') {
        lnb_varraysearch = []
        lnb_render_transcript_youtube(lnb_transcripts_Youtube_Active);
    } else {
        for (const item of lnb_transcripts_Youtube_Active) {
            const voca = item.voca;
            const lowercasedVoca = voca.toLowerCase();

            if (lowercasedVoca.includes(query)) {
                let highlightedVoca = voca;

                let startIndex = lowercasedVoca.indexOf(query);
                while (startIndex !== -1) {
                    const endIndex = startIndex + query.length;
                    const matchedWord = voca.substring(startIndex, endIndex);

                    // Highlight tất cả các từ khớp trong 'voca'
                    highlightedVoca = highlightedVoca.split(matchedWord).join('<span class="lnb_highlighted">' + matchedWord + '</span>');

                    startIndex = lowercasedVoca.indexOf(query, endIndex);
                }

                lnb_varraysearch.push({
                    voca: highlightedVoca,
                    id: item.id,
                    titleVideo: item.titleVideo,
                    urlVideo: item.urlVideo,
                    timeStart: item.timeStart,
                    timeEnd: item.timeEnd,
                });
            }
        }
        lnb_render_transcript_youtube(lnb_varraysearch);
    }
}
function lnb_fsearchTranscript_bySpeech(_order) {
    let query = _order
    lnb_varraysearch = []
    if (query.trim() === '') {
        lnb_render_transcript_youtube(lnb_transcripts_Youtube_Active);
    } else {
        for (const item of lnb_transcripts_Youtube_Active) {
            const voca = item.voca;
            const lowercasedVoca = voca.toLowerCase();

            if (lowercasedVoca.includes(query)) {
                let highlightedVoca = voca;

                let startIndex = lowercasedVoca.indexOf(query);
                while (startIndex !== -1) {
                    const endIndex = startIndex + query.length;
                    const matchedWord = voca.substring(startIndex, endIndex);

                    // Highlight tất cả các từ khớp trong 'voca'
                    highlightedVoca = highlightedVoca.split(matchedWord).join('<span class="lnb_highlighted">' + matchedWord + '</span>');

                    startIndex = lowercasedVoca.indexOf(query, endIndex);
                }

                lnb_varraysearch.push({
                    voca: highlightedVoca,
                    id: item.id,
                    titleVideo: item.titleVideo,
                    urlVideo: item.urlVideo,
                    timeStart: item.timeStart,
                    timeEnd: item.timeEnd,
                });
            }
        }
        lnb_render_transcript_youtube(lnb_varraysearch);
    }
}

document.querySelector('#lnb_idButtonPractice').addEventListener('click', lnb_onOffPracticeWindow)
function lnb_onOffPracticeWindow(_event){
    let praticeBtnElemt = _event.target
    let statusOnOffPractice = document.querySelector('#lnb_id_transcriptInYoutube').style.display
    if(statusOnOffPractice == 'block'){
        lnb_stopPractice()
    }else{
        praticeBtnElemt.setAttribute('class', 'lnb_button_youtube lnb_activePrac') 
        if(lnb_Video_Youtube_Streaming){
            lnb_Video_Youtube_Streaming.pause()
        }
        lnb_showDiv('#lnb_id_transcriptInYoutube', 'block', '100%', '100%', '0px', 'auto', 'auto', '1%')
        document.querySelector('.lnb_startScreen').style.display = "block"
        document.querySelector('.lnb_practiceScreen').style.display = "none"
    }
    
}
document.querySelector('#lnb_idButtonShadowing').addEventListener('click', lnb_onOffShadowingWindow)
function lnb_onOffShadowingWindow(_event){
    let shadowingBtnElemt = _event.target
    let statusOnOffShadowing = document.querySelector('#lnb_idshadowingwindow').style.display
    if(statusOnOffShadowing == 'block'){
        shadowingBtnElemt.setAttribute('class', 'lnb_button_youtube')
        lnb_hideDiv('#lnb_idshadowingwindow', 'auto', 'auto', '0px', 'auto')
    }else{
        const lnb_shadowingWindowStart = document.createElement("div");
        lnb_shadowingWindowStart.setAttribute('id','lnb_shadowingWindowStart')
        document.body.insertAdjacentElement("afterend", lnb_shadowingWindowStart);
        
        shadowingBtnElemt.setAttribute('class', 'lnb_button_youtube lnb_activePrac') 
        if(lnb_Video_Youtube_Streaming){
            lnb_Video_Youtube_Streaming.pause()
        }
        lnb_showDiv('#lnb_idshadowingwindow', 'block', '100%', '1px', '0px', 'auto', 'auto', '1%')
        startVidShadowing()
        startScreenRecording()
        
    }
    
}

document.querySelector('#lnb_microAndNew').addEventListener("click", function(event) {
    if(lnb_recording){
        lnb_stopRecording()
    }else{
        lnb_speechToText();
    }
});
document.querySelector('#lnb_source_button').addEventListener("click", function(event) {
    let urlSoure = 'http://englishaz.s3-website-ap-southeast-1.amazonaws.com/'
    window.open(urlSoure, '_blank');
});
document.querySelector('#lnb_get_transcript_button').addEventListener("click", function(event) {
    let url = window.location.href
    let urlDownSub = `https://downsub.com/?url=${url}`
    window.open(urlDownSub, '_blank');
});