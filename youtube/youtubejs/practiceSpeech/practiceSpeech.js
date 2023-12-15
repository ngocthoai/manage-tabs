function lnb_practiceSpeechMain(_order){
    if( _order == 'i want to practice' || 
        _order == 'i wanna practice' ||
        _order == 'broadcast' ||
        _order == 'breakfast' ||
        _order == 'raptors' ||
        _order == 'drop test' ||
        _order == 'drop this' ||
        _order == 'practice practice' ||
        _order == 'practice practice practice' ||
        _order == 'practice practice practice practice' ||
        _order == 'practice' ){

        lnb_stopRecording();
        lnb_showDiv('#lnb_id_transcriptInYoutube', 'block', '100%', '100%', '0px', 'auto', 'auto', '1%')
        
        
        setTimeout(() => {
            lnb_transcriptSpeechToText()
        }, 500);
        
        return true
    }else{
        return false
    }
}


function lnb_tinhDiem(_tongCau, _cauDung) {
    // Tính tỉ lệ câu đúng
    if(_tongCau <= 0){
        return 0;
    }
    else if(_tongCau <= 10){
        var tiLe = _cauDung / _tongCau;

        // Tính điểm dựa trên tỉ lệ
        var diem = tiLe * 10;

        // Làm tròn đến 0.5
        diem = Math.round(diem * 2) / 2;

        return diem;
    }else if(_tongCau <= 20){
        let causai = _tongCau - _cauDung
        let diem = 10 - causai
        if(diem <= 0){
            diem = 0
        }
        return diem
    }else{
        let causai = (_tongCau - _cauDung)*0.5
        let diem = 10 - causai
        if(diem <= 0){
            diem = 0
        }
        return diem
    }
    
}
function lnb_checkTwoString(_stringCheck){
    lnb_flagDoScrore = false
    let contentOri = document.querySelector('#lnb_main_transcript_origin').textContent
    contentOri = lnb_replaceLineBreaksPractice(contentOri)
    contentOri = lnb_removeExtraSpaces(contentOri)
    let textResult
    let rightWordResult
    let totalWordResult
    if(contentOri.trim() == ''){
        textResult = ''
        rightWordResult = 0
        totalWordResult = 10
    }else{
        let stringOrilower = contentOri.trim().toLowerCase()
        let stringChecklower = _stringCheck.trim().toLowerCase()
        stringOrilower = lnb_replaceLineBreaksPractice(stringOrilower)
        stringChecklower = lnb_replaceLineBreaksPractice(stringChecklower)
        stringOrilower = lnb_removeExtraSpaces(stringOrilower)
        stringChecklower = lnb_removeExtraSpaces(stringChecklower)
        let stringChecked = ''
        let totalWord
        let correctWord = 0
        if(stringOrilower == stringChecklower){

            textResult = contentOri
            rightWordResult = 10
            totalWordResult = 10
        }else{
            if(lnb_languageLearningCodeYoutueActive == 'zh-CN' || 
                    lnb_languageLearningCodeYoutueActive == 'zh-TW' ||
                    lnb_languageLearningCodeYoutueActive == 'ja')
            {
                stringOrilower = stringOrilower.replace(/\s/g, '');
                totalWord = stringOrilower.length
                for (let i = 0; i < stringOrilower.length; i++) {
                    if(stringOrilower[i] == stringChecklower[i]){
                        stringChecked += `<span>${stringOrilower[i]}</span>`
                        correctWord++
                    }else{
                        stringChecked += `<span class="lnb_wrongCh">${stringOrilower[i]}</span>`
                    }
                }
                textResult = stringChecked
                rightWordResult = correctWord
                totalWordResult = totalWord
                
            }else{
                let oriArr = stringOrilower.split(' ');
                let checkArr = stringChecklower.split(' ');
                let resuleOriArr = contentOri.split(' ')
                totalWord = oriArr.length
                if(oriArr.length == checkArr.length){
                    for (let i = 0; i < oriArr.length; i++) {
                        let rightWord = true
                        if(oriArr[i].length < checkArr[i].length){
                            stringChecked += `<span class="lnb_wrongCh">${resuleOriArr[i]}</span> `
                            rightWord = false
                        }else{
                            for (let j = 0; j < oriArr[i].length; j++) {
                                if(oriArr[i][j] == checkArr[i][j]){
                                    if(j == oriArr[i].length -1){
                                        stringChecked += `<span>${resuleOriArr[i][j]} </span>`
                                    }else{
                                        stringChecked += `<span>${resuleOriArr[i][j]}</span>`
                                    }
                                }else{
                                    if(j == oriArr[i].length -1){
                                        stringChecked += `<span class="lnb_wrongCh">${resuleOriArr[i][j]}</span> `
                                    }else{
                                        stringChecked += `<span class="lnb_wrongCh">${resuleOriArr[i][j]}</span>`
                                    }
                                    rightWord = false
                                }
                            }
                            
                        }
                        if(rightWord){
                            correctWord++
                        }
                        
                    }
                    textResult = stringChecked
                    rightWordResult = correctWord
                    totalWordResult = totalWord
                    
                }else{
                    for (let i = 0; i < oriArr.length; i++) {
                        if(checkArr.includes(oriArr[i])){
                            correctWord++
                            stringChecked += `<span>${resuleOriArr[i]} </span>`
                        }else{
                            stringChecked += `<span class="lnb_wrongCh">${resuleOriArr[i]}</span> `
                        }
                    }
                    textResult = stringChecked
                    rightWordResult = correctWord
                    totalWordResult = totalWord
                }
            }
        }
    }
    lnb_stringSpeech = ''
    let score = lnb_tinhDiem(totalWordResult, rightWordResult)
        
        if(lnb_level == 'test'){
            if(score == 10){
                document.querySelector('.lnb_cheerCorrect').style.display = 'block'
                lnb_audioCorrectElement.src = urlCorrectAudio
                lnb_audioCorrectElement.load()
                lnb_audioCorrectElement.currentTime = 0
                lnb_audioCorrectElement.play()
                document.querySelector(`[idcard='${lnb_idCardActive}']`).querySelector('.lnb_transcript_learned').innerHTML = textResult
                setTimeout(() => {
                    lnb_audioCorrectElement.pause()
                    lnb_next_practice()
                }, 1000);
                lnb_repeatAfterFail = 0
            }else{
                lnb_repeatAfterFail++
                lnb_audioCorrectElement.src = urlInCorrectAudio
                lnb_audioCorrectElement.load()
                lnb_audioCorrectElement.currentTime = 0
                lnb_audioCorrectElement.play()
                document.querySelector('.lnb_rowOriginTrans').style.display = "none"
                document.querySelector('.lnb_rowResultPractice').style.display = "flex"
                let contentOut = `<p style="margin-bottom: 9px;">${textResult}</p>` 
                document.querySelector('#lnb_main_transcript_learned').innerHTML = contentOut;
                document.querySelector("#lnb_scoreNumberSpeechYoutube").innerHTML = score
                document.querySelector(`[idcard='${lnb_idCardActive}']`).querySelector('.lnb_transcript_learned').innerHTML = textResult
                setTimeout(() => {
                    lnb_audioCorrectElement.pause()
                    lnb_next_practice()
                    lnb_repeatAfterFail = 0
                }, 1000);
            }
        }else{
            if(score == 10){
                document.querySelector('.lnb_cheerCorrect').style.display = 'block'
                lnb_audioCorrectElement.src = urlCorrectAudio
                lnb_audioCorrectElement.load()
                lnb_audioCorrectElement.currentTime = 0
                lnb_audioCorrectElement.play()
                document.querySelector(`[idcard='${lnb_idCardActive}']`).querySelector('.lnb_transcript_learned').innerHTML = textResult
                setTimeout(() => {
                    lnb_audioCorrectElement.pause()
                    lnb_next_practice()
                }, 1000);
                lnb_repeatAfterFail = 0
            }else if(score >= 5){
                lnb_repeatAfterFail++
                lnb_audioCorrectElement.src = urlInCorrectAudio
                lnb_audioCorrectElement.load()
                lnb_audioCorrectElement.currentTime = 0
                lnb_audioCorrectElement.play()
                document.querySelector('.lnb_rowOriginTrans').style.display = "none"
                document.querySelector('.lnb_rowResultPractice').style.display = "flex"
                let contentOut = `<p style="margin-bottom: 9px;">${textResult}</p>` 
                document.querySelector('#lnb_main_transcript_learned').innerHTML = contentOut;
                document.querySelector("#lnb_scoreNumberSpeechYoutube").innerHTML = score
                document.querySelector(`[idcard='${lnb_idCardActive}']`).querySelector('.lnb_transcript_learned').innerHTML = textResult
                setTimeout(() => {
                    lnb_audioCorrectElement.pause()
                    if(lnb_repeatAfterFail >= 2){
                        lnb_next_practice()
                        lnb_repeatAfterFail = 0
                        
                    }else{

                        lnb_lookPractice = 6
                        clearInterval(lnb_setIntervalSpeech)
                        lnb_transcriptStopRecording();

                        lnb_openTeacherWindow()
                        lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
                        lnb_Video_Youtube_Streaming.playbackRate = 0.8
                        lnb_Video_Youtube_Streaming.play()
                    }
                }, 1000);
            }else{
                lnb_audioCorrectElement.src = urlInCorrectAudio
                lnb_audioCorrectElement.load()
                lnb_audioCorrectElement.currentTime = 0
                lnb_audioCorrectElement.play()
                document.querySelector('.lnb_rowOriginTrans').style.display = "none"
                document.querySelector('.lnb_rowResultPractice').style.display = "flex"
                let contentOut = `<p style="margin-bottom: 9px;">${textResult}</p>` 
                document.querySelector('#lnb_main_transcript_learned').innerHTML = contentOut;
                document.querySelector("#lnb_scoreNumberSpeechYoutube").innerHTML = score
                document.querySelector(`[idcard='${lnb_idCardActive}']`).querySelector('.lnb_transcript_learned').innerHTML = textResult
                setTimeout(() => {
                    lnb_audioCorrectElement.pause()
                    if(lnb_repeatAfterFail >= 5){
                        lnb_next_practice()
                        lnb_repeatAfterFail = 0
                    }else{
                        lnb_lookPractice = 6
                        clearInterval(lnb_setIntervalSpeech)
                        lnb_transcriptStopRecording();

                        lnb_openTeacherWindow()
                        lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
                        lnb_Video_Youtube_Streaming.playbackRate = 0.7
                        lnb_Video_Youtube_Streaming.play()
                    }
                }, 1000);
            }
        }
        
}

function lnb_diemToPhanTram(_diem) {
    var diemToiDa = 39;

    if (_diem <= 5) {
        console.error("Điểm và điểm tối đa phải là số dương.");
        return 0;
    }

    var phanTram = (_diem / diemToiDa) * 100;
    return Number(phanTram.toFixed(0)) 
}
function lnb_repeatAgainPractice(){
    lnb_limit_left = lnb_transcripts_Youtube_Active[lnb_numberTranActive].timeStart
    lnb_limit_right = lnb_transcripts_Youtube_Active[lnb_numberTranActive].timeEnd
    lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
    lnb_Video_Youtube_Streaming.play()
}

function lnb_setTranscriptToPractice(){
    document.querySelector('#lnb_main_transcript_learned').style.display = 'none'
    lnb_indexTransPracticing = lnb_numberTranActive
    lnb_timeLimitPrac = 10
    lnb_idCardActive = lnb_transcripts_Youtube_Active[lnb_indexTransPracticing].id
    const contentOri = lnb_transcripts_Youtube_Active[lnb_indexTransPracticing].voca
    const sttTranscript = `${lnb_indexTransPracticing} / ${lnb_transcripts_Youtube_Active.length}`
    document.querySelector('#lnb_sttTranscript').innerText = sttTranscript
    document.querySelector('#lnb_main_transcript_origin').innerHTML = contentOri
    document.querySelector('#lnb_main_transcript_origin').style.display = 'flex'
}

function lnb_next_practice(){
    document.querySelector('.lnb_cheerCorrect').style.display = 'none'
    document.querySelector('.lnb_rowOriginTrans').style.display = "flex"
    document.querySelector('.lnb_rowResultPractice').style.display = "none"
    lnb_lookPractice = 6
    lnb_flagDoScrore = true
    lnb_indexTransPracticing++
    lnb_numberTranActive = lnb_indexTransPracticing
    if(lnb_varraysearch.length <= 0){
        if(lnb_indexTransPracticing < lnb_transcripts_Youtube_Active.length){
            lnb_limit_left = lnb_transcripts_Youtube_Active[lnb_indexTransPracticing].timeStart
            lnb_limit_right = lnb_transcripts_Youtube_Active[lnb_indexTransPracticing].timeEnd
            lnb_setTimeByCommandNumber()
            const contentOri = lnb_transcripts_Youtube_Active[lnb_indexTransPracticing].voca
            const sttTranscript = `${lnb_indexTransPracticing} / ${lnb_transcripts_Youtube_Active.length}`
            document.querySelector('#lnb_sttTranscript').innerText = sttTranscript
            document.querySelector('#lnb_main_transcript_origin').innerHTML = contentOri
        
            lnb_idCardActive = lnb_transcripts_Youtube_Active[lnb_indexTransPracticing].id
        }
    }else{
        if(lnb_indexTransPracticing < lnb_varraysearch.length){
            lnb_limit_left = lnb_varraysearch[lnb_indexTransPracticing].timeStart
            lnb_limit_right = lnb_varraysearch[lnb_indexTransPracticing].timeEnd
            lnb_setTimeByCommandNumber()
            const contentOri = lnb_varraysearch[lnb_indexTransPracticing].voca
            const sttTranscript = `${lnb_indexTransPracticing} / ${lnb_varraysearch.length}`
            document.querySelector('#lnb_sttTranscript').innerText = sttTranscript
            document.querySelector('#lnb_main_transcript_origin').innerHTML = contentOri

            lnb_idCardActive = lnb_varraysearch[lnb_indexTransPracticing].id
        }
    }
}
function lnb_back_practice(){
    if(lnb_numberTranActive == -1){
      
    }else{
        lnb_lookPractice = 3
        lnb_flagDoScrore = true
        lnb_numberTranActive--
        lnb_indexTransPracticing = lnb_numberTranActive
        if(lnb_indexTransPracticing >= 0){
            lnb_limit_left = lnb_transcripts_Youtube_Active[lnb_indexTransPracticing].timeStart
            lnb_limit_right = lnb_transcripts_Youtube_Active[lnb_indexTransPracticing].timeEnd
            lnb_setTimeByCommandNumber()
            const contentOri = lnb_transcripts_Youtube_Active[lnb_indexTransPracticing].voca
            const sttTranscript = `${lnb_indexTransPracticing} / ${lnb_transcripts_Youtube_Active.length}`
            document.querySelector('#lnb_sttTranscript').innerText = sttTranscript
            document.querySelector('#lnb_main_transcript_origin').innerHTML = contentOri
        }
    }
}
function lnb_startPractice(){
    if(lnb_transcripts_Youtube_Active.length <= 0){
        lnb_stopPractice()
        return
    }
    if(lnb_numberTranActive < 0){
        lnb_numberTranActive = 0
    }
    lnb_modeSwitch = 'practice'
    document.querySelector('.lnb_startScreen').style.display = "none"
    document.querySelector('.lnb_practiceScreen').style.display = "block"
    document.querySelector('.lnb_rowOriginTrans').style.display = "flex"
    document.querySelector('.lnb_rowResultPractice').style.display = "none"
    
    
    
    lnb_indexTransPracticing = lnb_numberTranActive
    lnb_idCardActive = lnb_transcripts_Youtube_Active[lnb_indexTransPracticing].id
    const contentOri = lnb_transcripts_Youtube_Active[lnb_indexTransPracticing].voca
    const sttTranscript = `${lnb_indexTransPracticing} / ${lnb_transcripts_Youtube_Active.length}`
    document.querySelector('#lnb_sttTranscript').innerText = sttTranscript
    document.querySelector('#lnb_main_transcript_origin').innerHTML = contentOri
    lnb_limit_left = lnb_transcripts_Youtube_Active[lnb_indexTransPracticing].timeStart
    lnb_limit_right = lnb_transcripts_Youtube_Active[lnb_indexTransPracticing].timeEnd
    
    lnb_transcriptSpeechToText();
    lnb_flagDoScrore = true
    lnb_lookPractice = 10
    lnb_setIntervalSpeech = setInterval(() => {
        lnb_lookPractice--
        if(lnb_lookPractice <= 0 && lnb_flagDoScrore){
            lnb_checkTwoString(lnb_stringSpeech)
        }
    }, 1000);
}

function lnb_stopPractice(){
    lnb_modeSwitch = 'none'
    lnb_hideDiv('#lnb_id_transcriptInYoutube', 'auto', 'auto', '0px', 'auto')
    document.querySelector('#lnb_idButtonPractice').setAttribute('class', 'lnb_button_youtube')
    lnb_flagDoScrore = false
    lnb_lookPractice = 6
    clearInterval(lnb_setIntervalSpeech)
    lnb_transcriptStopRecording();
    lnb_Video_Youtube_Streaming.playbackRate = 1
    document.querySelector('#lnb_pausePrac').setAttribute('data','pause')
    document.querySelector('#lnb_pausePrac').innerText = 'pause'
    document.querySelector('#lnb_interim').innerHTML = ``
    document.querySelector('#lnb_recordingPractice').innerHTML = `
        <img src="https://media3.giphy.com/media/uUkLiAc5HjF4X9IXvj/source.gif" width="25" height="39" alt="Lang">
        `
}