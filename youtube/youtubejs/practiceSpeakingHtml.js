let lnb_timestamp = new Date().getTime();
let urlCorrectAudio = 'https://langnotebookexyt.s3.ap-southeast-1.amazonaws.com/audio/correct.mp3'
let urlInCorrectAudio = 'https://langnotebookexyt.s3.ap-southeast-1.amazonaws.com/audio/incorrect.mp3'

const lnb_selectMicroPrac = `
    <div class="lnb_rowMicroPrac">
        <div class="lnb_microPracActive">
            <span class="lnb_iconMicroPracActiVe">🎙</span>
            <span class="lnb_microNamePracActive">Jack Mic</span>
        </div>
        <div class="lnb_listMicroPrac">
            <div id="lnb_listMicroPrac">
                <div class="lnb_microPracItem">
                    <span class="lnb_iconMicroPrac">🎙</span>
                    <span class="lnb_microNamePrac">Jack Mic</span>
                </div>
            </div>
        </div>
    </div>
`
const lnb_microVolumePrac = `
    <div class="lnb_wrapperVolume">
        <span class="lnb_iconPrac">🎙</span>
        <input id="lnb_idVolumeMicPrac" type="range" min="0" step="1" max="100" value="30" />
        <span id="lnb_idVolumeMicPracValue" class="slide-value">30</span>
    </div>
`

const lnb_groupBtBelongMainTranscript = `
            ${lnb_selectMicroPrac}
            ${lnb_microVolumePrac}
            <div id="lnb_pausePrac" class="lnb_button_main_in_youtube" data="pause">pause</div>
            <div id="lnb_modePracticePrac" class="lnb_button_main_in_youtube" data="practice">speech training with video</div>
            <div id="lnb_modePracticeTest" class="lnb_button_main_in_youtube activeButtonPrac" data="test">pronunciation test</div>
            <div id="lnb_hide_main_transcript" class="lnb_button_main_in_youtube">close</div>
        `
        const lnb_transcriptsInYoutube = document.createElement("div");
            lnb_transcriptsInYoutube.setAttribute('id','lnb_id_transcriptInYoutube')
            let lnb_newtranscriptYoutubeHTML = `
                        <div class='lnb_id_transcriptInYoutube'>
                            <div id="lnb_id_transcriptInYoutubeheader">
                              <img src="https://notebookmagic.s3.ap-southeast-1.amazonaws.com/homepage/logolangnotebook.png" width="25" height="25"/>
                            </div>
                            <div id="lnb_sttTranscript">
                                3/1900
                            </div>
                            <div id="lnb_group_main_ButtonTranscript">
                              ${lnb_groupBtBelongMainTranscript}
                            </div>
                            <hr style="width: 100%; border: 1px solid white;">
                            
                            <div class="lnb_mainPracticeScreen">
                                <div class="lnb_rowResultPrac">
                                    <div class="lnb_startScreen">
                                        <div class="lnb_contentStartScreen">
                                            <div class="lnb_buttonCancelPr buttonPractice">
                                                Cancel
                                            </div>
                                            <div class="lnb_buttonStartPr buttonPractice">
                                                Start
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lnb_practiceScreen">
                                        <div class="lnb_rowOriginTrans">
                                            <div id="lnb_recordingPractice">
                                                <img src="https://media3.giphy.com/media/uUkLiAc5HjF4X9IXvj/source.gif" width="25" height="39" alt="Lang">
                                            </div>
                                            <div id="lnb_main_transcript_origin"></div>
                                        </div>
                                        <div class="lnb_rowResultPractice">
                                            <div id="lnb_scoreNumberSpeechYoutube">10</div>
                                            <div id="lnb_main_transcript_learned"></div>
                                        </div>
                                    </div>
                                    <div class="lnb_cheerCorrect"></div>
                                    <div class="lnb_interimPrac">
                                        <div id="lnb_interim"></div>
                                    </div>

                                    <div class="lnb_videoTeacher">
                                        <img class="decoration-image" src=""/>
                                    </div>
                                </div>
                                <div class="lnb_rowAdPractice">
                                    <div class="lnb_colAdPractice">
                                        <iframe src="https://langnotebookad1.s3.ap-southeast-1.amazonaws.com/index.html" frameborder="0"></iframe>
                                    </div>
                                    <div class="lnb_colAdPractice">
                                        <iframe src="https://langnotebookad1.s3.ap-southeast-1.amazonaws.com/index.html" frameborder="0"></iframe>
                                    </div>
                                    <div class="lnb_colAdPractice">
                                        <iframe src="https://langnotebookad1.s3.ap-southeast-1.amazonaws.com/index.html" frameborder="0"></iframe>
                                    </div>
                                    <div class="lnb_colAdPractice">
                                        <iframe src="https://langnotebookad1.s3.ap-southeast-1.amazonaws.com/index.html" frameborder="0"></iframe>
                                    </div>
                                </div>
                            </div>
                            <audio id="lnb_audioCorrect" style='display:none;'>

                            </audio>
                            
                        </div>
                    `
            lnb_transcriptsInYoutube.innerHTML = lnb_newtranscriptYoutubeHTML;
            document.body.insertAdjacentElement("afterend", lnb_transcriptsInYoutube);
    
            document.querySelector('#lnb_pausePrac').addEventListener("click", lnb_pausePractice);
            document.querySelector('#lnb_modePracticePrac').addEventListener("click", lnb_changeModePractice);
            document.querySelector('#lnb_modePracticeTest').addEventListener("click", lnb_changeModePractice);
            document.querySelector('#lnb_hide_main_transcript').addEventListener("click", lnb_stopPractice);
            document.querySelector('.lnb_buttonStartPr').addEventListener("click", lnb_startPractice);
            
            document.querySelector('#lnb_id_transcriptInYoutubeheader').addEventListener("click", function(event) {
                event.stopPropagation();
            });
            document.querySelector('#lnb_id_transcriptInYoutubeheader').addEventListener("mousedown", function(event) {
                event.stopPropagation();
            });
            document.querySelector('#lnb_id_transcriptInYoutubeheader').addEventListener("mousemove", function(event) {
                event.stopPropagation();
            });
    
            lnb_dragElement_Youtube(document.getElementById('lnb_id_transcriptInYoutube'))

let lnb_audioCorrectElement = document.querySelector('#lnb_audioCorrect')
lnb_audioCorrectElement.volume = 0.02

function clickFullscreenButton() {
    // Lấy tham chiếu đến nút bằng cách sử dụng class name
    var fullscreenButton = document.querySelector('.ytp-fullscreen-button');
    console.log(fullscreenButton)
  
    // Kiểm tra xem nút có tồn tại hay không
    if (fullscreenButton) {
      // Thực hiện việc click vào nút
      fullscreenButton.click();
    } else {
      console.error('Không tìm thấy nút Full Screen');
    }
  }
function lnb_changeModePractice(_event){
    let elementButton = _event.target
    if(elementButton.getAttribute('class') == 'lnb_button_main_in_youtube activeButtonPrac'){
        
    }else{
        document.querySelector('.activeButtonPrac').setAttribute('class', 'lnb_button_main_in_youtube')
        elementButton.setAttribute('class','lnb_button_main_in_youtube activeButtonPrac')
        lnb_level = elementButton.getAttribute('data')
    }
}
function lnb_pausePractice(_event){
    let elementButton = _event.target
    if(elementButton.getAttribute('data') == 'pause'){
        document.querySelector('#lnb_pausePrac').setAttribute('data','play')
        document.querySelector('#lnb_pausePrac').innerText = 'play'
        lnb_lookPractice = 6
        clearInterval(lnb_setIntervalSpeech)
        lnb_transcriptStopRecording();
        document.querySelector('#lnb_recordingPractice').innerHTML = 'pause'
    }else{
        document.querySelector('#lnb_pausePrac').setAttribute('data','pause')
        document.querySelector('#lnb_pausePrac').innerText = 'pause'
        lnb_transcriptSpeechToText();
        lnb_setIntervalSpeech = setInterval(() => {
            lnb_lookPractice--
            if(lnb_lookPractice <= 0 && lnb_flagDoScrore){
                lnb_checkTwoString(lnb_stringSpeech)
            }
        }, 1000);
        document.querySelector('#lnb_recordingPractice').innerHTML = `
        <img src="https://media3.giphy.com/media/uUkLiAc5HjF4X9IXvj/source.gif" width="25" height="39" alt="Lang">
        `
    }
}



let lnb_micVolumePracInput = document.querySelector("#lnb_idVolumeMicPrac")
let lnb_micVolumePracValue = document.querySelector("#lnb_idVolumeMicPracValue")
lnb_micVolumePracInput.addEventListener("input", () => {
       let rangeVal = lnb_micVolumePracInput.value;
       lnb_micVolumePracValue.innerText = rangeVal;
       lnb_micVolumePracChanged = lnb_convertValueMicroVolum(rangeVal)
       console.log(lnb_micVolumePracChanged)
       lnb_gainNode.gain.setValueAtTime(lnb_micVolumePracChanged, lnb_audioContext.currentTime + 0.1);
     });




let decorationImage = document.querySelector('.decoration-image')
// Cập nhật hình ảnh của màn hình phụ dựa trên video chính
function lnb_openTeacherWindow(){
    document.querySelector('.lnb_videoTeacher').style.display = 'block'
}
function lnb_closeTeacherWindow(){
    document.querySelector('.lnb_videoTeacher').style.display = 'none'
}
function updateDecorationImage() {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = lnb_Video_Youtube_Streaming.videoWidth;
    canvas.height = lnb_Video_Youtube_Streaming.videoHeight;
    ctx.drawImage(lnb_Video_Youtube_Streaming, 0, 0, canvas.width, canvas.height);
    decorationImage.src = canvas.toDataURL(); // Chuyển đổi hình ảnh từ canvas thành đường dẫn dữ liệu
  }


// get micro default
navigator.mediaDevices.enumerateDevices()
  .then(devices => {
    const audioDevices = devices.filter(device => device.kind === 'audioinput');
    audioDevices.map(micro =>{
        if(micro.deviceId == 'default'){
            lnb_microNamePracActive = micro.label
        }
        
    })
    document.querySelector('.lnb_microNamePracActive').innerText = lnb_microNamePracActive
})
lnb_getMicroPractice()
document.querySelector('.lnb_microPracActive').addEventListener('click', lnb_openCloseListMicPrac)
function lnb_openCloseListMicPrac(){
    const listMicElmt = document.querySelector('.lnb_listMicroPrac')
    let statusListMic = window.getComputedStyle(listMicElmt).display
    if(statusListMic == 'block'){
        lnb_getMicroPractice()
        lnb_hideDiv('.lnb_listMicroPrac', '0px', 'auto', 'auto', '0px')
    }else{
        lnb_showDiv('.lnb_listMicroPrac', "block", '100%', 'auto', '29px', 'auto', 'auto', '0px')
    }
}
// Set and Show list Micro Practice Defaule
function lnb_getMicroPractice(){
    navigator.mediaDevices.enumerateDevices()
  .then(devices => {
    let listMicroHtml = ''
    const audioDevices = devices.filter(device => device.kind === 'audioinput');
    audioDevices.map(micro =>{
        listMicroHtml += `
        <div class="lnb_microPracItem" >
            <span class="lnb_iconMicroPrac">🎙</span>
            <span class="lnb_microNamePrac" idMicroPrac="${micro.deviceId}" nameMicroPrac="${micro.label}">${micro.label}</span>
        </div>
        `
    })
    document.querySelector('#lnb_listMicroPrac').innerHTML = listMicroHtml
    let allMicItem = document.querySelectorAll('.lnb_microPracItem')
    allMicItem.forEach(micro => {
        micro.addEventListener('click', lnb_setMicroPrac)
    });
})
  .catch(error => {
    console.error('Error enumerating devices:', error);
  });
}
function lnb_setMicroPrac(_event){
    if(_event.target.getAttribute('class') == 'lnb_microNamePrac'){
        lnb_microIdPracActive = _event.target.getAttribute('idMicroPrac')
        lnb_microNamePracActive = _event.target.getAttribute('nameMicroPrac')
        console.log(_event.target)
        document.querySelector('.lnb_microNamePracActive').innerText = lnb_microNamePracActive
        lnb_hideDiv('.lnb_listMicroPrac', '0px', 'auto', 'auto', '0px')
    }
}