// Trả về true hoặc thực hiện các thao tác khác nếu URL hợp lệ.
let lnb_Video_Youtube_Streaming = document.querySelector('.video-stream')
const fullscreenButton = document.querySelector('.ytp-fullscreen-button');
lnb_limit_left = 0
console.log(lnb_Video_Youtube_Streaming.src)
if(lnb_Video_Youtube_Streaming == 'null' || lnb_Video_Youtube_Streaming == null){
    lnb_limit_left = 0
    lnb_limit_right = 0
}else{
    lnb_limit_left = 0
    lnb_limit_right = lnb_Video_Youtube_Streaming.duration

    lnb_Video_Youtube_Streaming.addEventListener('timeupdate', function() {
      if(lnb_modeSwitch == 'practice'){
        updateDecorationImage()
        if(lnb_transcripts_Youtube_Active.length < 50){
          // Thời gian hiện tại của video (được tính theo giây)
          var currentTime = lnb_Video_Youtube_Streaming.currentTime;

          // Ví dụ: Kiểm tra khi video đạt đến một thời điểm cụ thể
          if (currentTime >= lnb_limit_right) {
              // Xử lý khi video đạt đến thời điểm 30 giây
              lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
              lnb_Video_Youtube_Streaming.pause()
              lnb_closeTeacherWindow()
              lnb_Video_Youtube_Streaming.playbackRate = 1
              lnb_stringSpeech = ''
              
              lnb_indexTransPracticing--
              document.querySelector('#lnb_interim').innerHTML = ''
              lnb_transcriptSpeechToText();
              lnb_flagDoScrore = true
              lnb_setIntervalSpeech = setInterval(() => {
                  lnb_lookPractice--
                  if(lnb_lookPractice <= 0 && lnb_flagDoScrore){
                      lnb_checkTwoString(lnb_stringSpeech)
                  }
              }, 1000);

              lnb_next_practice()
              
          }
          
          if(lnb_varraysearch.length <= 0){
            arrayTranscriptActive = lnb_transcripts_Youtube_Active
          }else{
            arrayTranscriptActive = lnb_varraysearch
          }
          arrayTranscriptActive.forEach((element, index) => {
            const timeStart = element.timeStart;
            const timeEnd = element.timeEnd;
            
            if (currentTime >= timeStart && currentTime < timeEnd) {
                const id = element.id;
                lnb_numberTranActive = index
                lnb_idTranActive = id

                let transcriptOlds = document.querySelectorAll('.lnb_activeCardTran')
                transcriptOlds.forEach((old)=>{
                  old.setAttribute('class', 'lnb_transcript_learned')
                })

                const transcriptAcive = document.querySelector('div.lnb_transcript_learned[index="' + index + '"]')
                const elementAcive = document.querySelector('[idcard="' + id + '"]')
                const rect = elementAcive.getBoundingClientRect();
                const containerRect = lnb_container_of_transcripts_active.getBoundingClientRect();
                transcriptAcive.setAttribute('class','lnb_transcript_learned lnb_activeCardTran')
                if (rect.top >= containerRect.top && rect.bottom <= containerRect.bottom) {
                  // Phần tử đang trong view, không cần cuộn
                  return;
                }
                // Cuộn đến phần tử con khi thời gian hiện tại nằm trong khoảng thời gian của phần tử đó
                elementAcive.scrollIntoView({ behavior: 'smooth' });
            }
          });

          document.querySelector('#lnb_youtubeCurrentTime').innerText = lnb_fformatSeconds(currentTime)

        }else if(lnb_Video_Youtube_Streaming.duration < lnb_transcripts_Youtube_Active[lnb_transcripts_Youtube_Active.length - 10].timeEnd){
        }else{
          // Thời gian hiện tại của video (được tính theo giây)
          var currentTime = lnb_Video_Youtube_Streaming.currentTime;

          // Ví dụ: Kiểm tra khi video đạt đến một thời điểm cụ thể
          if (currentTime >= lnb_limit_right) {
              // Xử lý khi video đạt đến thời điểm 30 giây
              lnb_closeTeacherWindow()
              lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
              lnb_Video_Youtube_Streaming.pause()
              lnb_Video_Youtube_Streaming.playbackRate = 1

              lnb_stringSpeech = ''
              
              lnb_indexTransPracticing--
              document.querySelector('#lnb_interim').innerHTML = ''
             
              lnb_transcriptSpeechToText();
              lnb_flagDoScrore = true
              lnb_setIntervalSpeech = setInterval(() => {
                  lnb_lookPractice--
                  if(lnb_lookPractice <= 0 && lnb_flagDoScrore){
                      lnb_checkTwoString(lnb_stringSpeech)
                  }
              }, 1000);
              lnb_next_practice()
          }
          
          if(lnb_varraysearch.length <= 0){
            arrayTranscriptActive = lnb_transcripts_Youtube_Active
          }else{
            arrayTranscriptActive = lnb_varraysearch
          }
          arrayTranscriptActive.forEach((element, index) => {
            const timeStart = element.timeStart;
            const timeEnd = element.timeEnd;
            
            if (currentTime >= timeStart && currentTime < timeEnd) {
                const id = element.id;
                lnb_numberTranActive = index
                lnb_idTranActive = id

                let transcriptOlds = document.querySelectorAll('.lnb_activeCardTran')
                transcriptOlds.forEach((old)=>{
                  old.setAttribute('class', 'lnb_transcript_learned')
                })

                const transcriptAcive = document.querySelector('div.lnb_transcript_learned[index="' + index + '"]')
                const elementAcive = document.querySelector('[idcard="' + id + '"]')
                const rect = elementAcive.getBoundingClientRect();
                const containerRect = lnb_container_of_transcripts_active.getBoundingClientRect();
                transcriptAcive.setAttribute('class','lnb_transcript_learned lnb_activeCardTran')
                if (rect.top >= containerRect.top && rect.bottom <= containerRect.bottom) {
                  // Phần tử đang trong view, không cần cuộn
                  return;
                }
                // Cuộn đến phần tử con khi thời gian hiện tại nằm trong khoảng thời gian của phần tử đó
                elementAcive.scrollIntoView({ behavior: 'smooth' });
            }
          });

          document.querySelector('#lnb_youtubeCurrentTime').innerText = lnb_fformatSeconds(currentTime)
        }
      }else if(lnb_modeSwitch == 'shadowing'){

      }else{
        if(lnb_listenVideo){
          if(lnb_transcripts_Youtube_Active.length <= 50){
            // Thời gian hiện tại của video (được tính theo giây)
            var currentTime = lnb_Video_Youtube_Streaming.currentTime;
  
            // Ví dụ: Kiểm tra khi video đạt đến một thời điểm cụ thể
            if (currentTime >= lnb_limit_right) {
                // Xử lý khi video đạt đến thời điểm 30 giây
                lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
            }
            
            if(lnb_varraysearch.length <= 0){
              arrayTranscriptActive = lnb_transcripts_Youtube_Active
            }else{
              arrayTranscriptActive = lnb_varraysearch
            }
            arrayTranscriptActive.forEach((element, index) => {
              const timeStart = element.timeStart;
              const timeEnd = element.timeEnd;
              
              if (currentTime >= timeStart && currentTime < timeEnd) {
                  const id = element.id;
                  lnb_numberTranActive = index
                  lnb_idTranActive = id

                  let transcriptOlds = document.querySelectorAll('.lnb_activeCardTran')
                  transcriptOlds.forEach((old)=>{
                    old.setAttribute('class', 'lnb_transcript_learned')
                  })

                  const transcriptAcive = document.querySelector('div.lnb_transcript_learned[index="' + index + '"]')
                  const elementAcive = document.querySelector('[idcard="' + id + '"]')
                  const rect = elementAcive.getBoundingClientRect();
                  const containerRect = lnb_container_of_transcripts_active.getBoundingClientRect();
                  transcriptAcive.setAttribute('class','lnb_transcript_learned lnb_activeCardTran')
                  if (rect.top >= containerRect.top && rect.bottom <= containerRect.bottom) {
                    // Phần tử đang trong view, không cần cuộn
                    return;
                  }
                  // Cuộn đến phần tử con khi thời gian hiện tại nằm trong khoảng thời gian của phần tử đó
                  elementAcive.scrollIntoView({ behavior: 'smooth' });
              }
            });
  
            document.querySelector('#lnb_youtubeCurrentTime').innerText = lnb_fformatSeconds(currentTime)
          }else if(lnb_Video_Youtube_Streaming.duration < lnb_transcripts_Youtube_Active[lnb_transcripts_Youtube_Active.length - 10].timeEnd){
          }else{
            // Thời gian hiện tại của video (được tính theo giây)
            var currentTime = lnb_Video_Youtube_Streaming.currentTime;
  
            // Ví dụ: Kiểm tra khi video đạt đến một thời điểm cụ thể
            if (currentTime >= lnb_limit_right) {
                // Xử lý khi video đạt đến thời điểm 30 giây
                lnb_Video_Youtube_Streaming.currentTime = lnb_limit_left
            }
            
            if(lnb_varraysearch.length <= 0){
              arrayTranscriptActive = lnb_transcripts_Youtube_Active
            }else{
              arrayTranscriptActive = lnb_varraysearch
            }
            arrayTranscriptActive.forEach((element, index) => {
              const timeStart = element.timeStart;
              const timeEnd = element.timeEnd;
              
              if (currentTime >= timeStart && currentTime < timeEnd) {
                  const id = element.id;
                  lnb_numberTranActive = index
                  lnb_idTranActive = id

                  let transcriptOlds = document.querySelectorAll('.lnb_activeCardTran')
                  transcriptOlds.forEach((old)=>{
                    old.setAttribute('class', 'lnb_transcript_learned')
                  })

                  const transcriptAcive = document.querySelector('div.lnb_transcript_learned[index="' + index + '"]')
                  const elementAcive = document.querySelector('[idcard="' + id + '"]')
                  const rect = elementAcive.getBoundingClientRect();
                  const containerRect = lnb_container_of_transcripts_active.getBoundingClientRect();
                  transcriptAcive.setAttribute('class','lnb_transcript_learned lnb_activeCardTran')
                  if (rect.top >= containerRect.top && rect.bottom <= containerRect.bottom) {
                    // Phần tử đang trong view, không cần cuộn
                    return;
                  }
                  // Cuộn đến phần tử con khi thời gian hiện tại nằm trong khoảng thời gian của phần tử đó
                  elementAcive.scrollIntoView({ behavior: 'smooth' });
              }
            });
  
            document.querySelector('#lnb_youtubeCurrentTime').innerText = lnb_fformatSeconds(currentTime)
          }
        }
      }
    });
}

function lnb_highlighterCard(){

}