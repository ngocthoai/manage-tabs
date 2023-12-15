var lnb_url_check = window.location.href
var pattern = /^https:\/\/www\.youtube\.com\/watch\?v=[A-Za-z0-9_-]+$/;

let lnb_modeSwitch = 'none'

let lnb_listenVideo = true

let lnb_lookPractice = 6
let lnb_flagDoScrore = false
let lnb_stringSpeech = ''
let lnb_setIntervalSpeech
let lnb_indexTransPracticing
let lnb_timeLimitPrac = 10
let lnb_idCardActive
let lnb_repeatAfterFail = 0
let lnb_level = 'test'

let arrayTranscriptActive = []
let lnb_numberTranActive = -1
let lnb_idTranActive = -1

let lnb_onoffyoutube = 'block'
let lnb_checkOnOffYoutube = localStorage.getItem('lnb_onOffYoutube')
if(lnb_checkOnOffYoutube == 'null' || lnb_checkOnOffYoutube == null){
    
}else{
    lnb_onoffyoutube = lnb_checkOnOffYoutube
    if(lnb_onoffyoutube == 'block'){
        lnb_listenVideo = true
    }else{
        lnb_listenVideo = false
    }
}

let lnb_rightYoutubetWindow = "0px"
let lnb_checkrightYoutubetWindow = localStorage.getItem('lnb_rightYoutube')
if(lnb_checkrightYoutubetWindow == null || lnb_checkrightYoutubetWindow == 'null'){

}else{
    lnb_rightYoutubetWindow = lnb_checkrightYoutubetWindow
}


let lnb_manageNumberTran = {note1: 0, note2: 0, note3: 0, note4: 0, note5: 0, note6: 0, note7: 0, note8:0, note9: 0, note10: 0, note11: 0, note12: 0, note13: 0, note14:0, note15: 0}
let lnb_checkmanageNumberTran = localStorage.getItem('lnb_manageNumberTran')
if(lnb_checkmanageNumberTran == null || lnb_checkmanageNumberTran == 'null'){
    
}else{
    lnb_manageNumberTran = JSON.parse(lnb_checkmanageNumberTran) 
}

let lnb_languageLearningCodeYoutueActive = 'en'
let lnb_languageLearningNameYoutueActive = 'English'
let lnb_checklangSpeech = localStorage.getItem('lnb_speechcode')
if(lnb_checklangSpeech == null || lnb_checklangSpeech == 'null'){
    
}else{
    let objectSpeech = JSON.parse(lnb_checklangSpeech)
    lnb_languageLearningCodeYoutueActive = objectSpeech.code
    lnb_languageLearningNameYoutueActive = objectSpeech.language
}


let lnb_languageCodeTranslateYoutubeActive = 'vi'
let lnb_languageNameTranslateYoutubeActive = 'Vietnamese'

let lnb_checklangTranlate = localStorage.getItem('lnb_translatecode')
if(lnb_checklangTranlate == null || lnb_checklangTranlate == 'null'){
    
}else{
    let objectTranslate = JSON.parse(lnb_checklangTranlate)
    lnb_languageCodeTranslateYoutubeActive = objectTranslate.code
    lnb_languageNameTranslateYoutubeActive = objectTranslate.language
}

let lnb_limit_left = 0
let lnb_limit_right = 10000

let lnb_addressStoreActive = 'note1'

let lnb_transcripts_Youtube_Data_Active
let lnb_transcripts_Youtube_Active = []

let lnb_vset_currentTime_Upanddown
let lnb_varraysearch = []

let lnb_noteYoutubePageActive = 'note1'


// biến am thanh Practice
let lnb_micVolumePrac = 30;
let lnb_micVolumePracChanged = 0.157;

let lnb_microIdPracActive = 'default'
let lnb_microNamePracActive = ''

/* 
object = {
    id: id + i,
    timeStart: timestart,
    timeEnd: timeend,
    voca: transcriptContent.join(' '),
    sentenceMean: '',
    urlVideo: urlShort
};
*/

