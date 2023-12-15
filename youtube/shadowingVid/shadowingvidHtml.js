const lnb_shadowingWindow = document.createElement("div");
lnb_shadowingWindow.setAttribute('id','lnb_idshadowingwindow')

let lnb_contentHtmlShadowing = `
    <div class="lnb_shadowingwindow">

        <div class="lnb_rowVideoShadowFrame">
          <div class="lnb_rowVideoShadowFrameClose">Close</div>
          <div class="lnb_screenVideoReview">
            <div class="lnb_videoReviewShow">
              
            </div>
          </div>
          <div class="lnb_footerAddShadowing">
          </div>
        </div>


        <div class="lnb_mainControlsShadowingFrame">
          <div class="lnb_mainControlsShadowingContent">

            <div class="lnb_leftControlFrame">
              <div class="lnb_leftControlContent1">
              </div>
              <div class="lnb_leftControlContent">
                <div class="lnb_btnGroupControls">
                  <button id="startRecord">Bắt đầu Ghi Âm</button>
                  <button id="stopRecord">Dừng Ghi Âm</button>
                  <button id="review">review</button>
                  <button id="btvideolongtieng" >video</button>
                  <a id="downloadLink" style="display: none;">Tải Video</a>
                </div>
              </div>
            </div>

            <div class="lnb_centerCamera">
              <video id="lnb_videoLive" controls></video>
              <div class="lnb_mashVidLiv"></div>
            </div>

            <div class="lnb_rightControlFrame">
              <div class="lnb_rCC lnb_rightControlContent1">
              </div>
              <div class="lnb_rCC lnb_rightControlContent2">
              </div>
              <div class="lnb_rCC lnb_rightControlContent3">
              </div>
            </div>
          </div>
        </div>
    </div>
`
lnb_shadowingWindow.innerHTML = lnb_contentHtmlShadowing
document.body.insertAdjacentElement("afterend", lnb_shadowingWindow);

let lnb_buttonCloseVidReviewPage = document.querySelector('.lnb_rowVideoShadowFrameClose')
lnb_buttonCloseVidReviewPage.addEventListener('click', lnb_closeVidReviewPage)
function lnb_closeVidReviewPage(){
  document.querySelector('.lnb_rowVideoShadowFrame').style.display = 'none'
}

navigator.mediaDevices.enumerateDevices()
  .then(devices => {
    const audioDevices = devices.filter(device => device.kind === 'audioinput');
    console.log(audioDevices);
  })
  .catch(error => {
    console.error('Error enumerating devices:', error);
  });
navigator.mediaDevices.enumerateDevices()
  .then(devices => {
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    console.log(videoDevices);
  })
  .catch(error => {
    console.error('Error enumerating devices:', error);
});

const lnb_videoLiveElement = document.getElementById('lnb_videoLive');
const videoShowReview = document.getElementById('lnb_vidReviewShow');
const lnb_audioReviewShow = document.getElementById('lnb_audioReviewShow');
const showvideolongtieng = document.getElementById('lnb_vidlongtien');
const buttonvideolongtieng = document.getElementById('btvideolongtieng');
const startRecordButton = document.getElementById('startRecord');
const stopRecordButton = document.getElementById('stopRecord');
const reviewButton = document.getElementById('review');
const downloadLink = document.getElementById('downloadLink');

let lnb_videoMediaRecorder
let lnb_audioMediaRecorder
      let urlAudioReview

      async function startVidShadowing() {
        try {
          
          const videoLive = await navigator.mediaDevices.getUserMedia({
            video: {
              deviceId: { exact: '4567f79591c121e4480ab3564f098ba9417d8e64dcfcc461bd6b7dd7370e8ad1' }
            }
          });
      
          
          lnb_videoLiveElement.srcObject = videoLive;
          lnb_videoLiveElement.play()
          console.log(lnb_videoLiveElement.srcObject)
      
          lnb_videoMediaRecorder = new MediaRecorder(videoLive);
          let videoRecordedChunks = [];
          
          lnb_videoMediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              videoRecordedChunks.push(event.data);
            }
          };
          lnb_videoMediaRecorder.onstop = () => {
            const blob = new Blob(videoRecordedChunks, { type: 'video/mp4' });
            const url = URL.createObjectURL(blob);
            lnb_videoLiveElement.src = url;
          };

          // Tạo MediaRecorder từ MediaStream
          const audioStream = await navigator.mediaDevices.getUserMedia({ 
            audio: {
              deviceId: { exact: 'be3d8ff66d794a4d2ca26736fc3057c6c64726c7b53bfa9257f179106e5c2349' }
            }
           });

          const audioContext = new (window.AudioContext || window.webkitAudioContext)();

          // Tạo một MediaStreamAudioSourceNode từ audio stream
          const source = audioContext.createMediaStreamSource(audioStream);


          // 1. Equalizer (EQ)
            const equalizer = audioContext.createBiquadFilter();
            equalizer.type = 'peaking'; // Kiểu bộ lọc peaking (độ dốc tăng)
            equalizer.frequency.value = 350; // Tần số trung bình
            equalizer.gain.value = 6; // Tăng độ lớn

            // 2. Compression (Nén âm thanh)
            const compressor = audioContext.createDynamicsCompressor();
            compressor.threshold.value = -15; // Đặt ngưỡng giảm âm thanh -20
            compressor.ratio.value = 4; // Đặt tỷ lệ giảm âm thanh 4

          const highPassFilter = audioContext.createBiquadFilter();
                highPassFilter.type = 'highpass'; // Chọn kiểu bộ lọc high-pass
                highPassFilter.frequency.value = 150;
          // Tạo một BiquadFilterNode để thêm low-pass filter
          const lowPassFilter = audioContext.createBiquadFilter();
          lowPassFilter.type = 'lowpass'; // Chọn kiểu bộ lọc low-pass
          lowPassFilter.frequency.value = 5000; // Đặt tần số cắt,

          // Tạo một GainNode để điều chỉnh âm lượng
          const gainNode = audioContext.createGain();
          // Đặt giá trị âm lượng (từ 0.0 đến 1.0, 1.0 là âm lượng đầy đủ)
          gainNode.gain.value = 0.3; // Đặt giảm âm lượng xuống 50%

          source.connect(equalizer);
          equalizer.connect(compressor);
          compressor.connect(lowPassFilter);
          lowPassFilter.connect(highPassFilter);
          highPassFilter.connect(gainNode);
          gainNode.connect(audioContext.destination);
          // compressor.connect(delay);
          // delay.connect(audioContext.destination);

          
          lnb_audioMediaRecorder = new MediaRecorder(audioStream);
          let audioRecordedChunks = [];

          lnb_audioMediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              audioRecordedChunks.push(event.data);
            }
          };

          lnb_audioMediaRecorder.onstop = () => {
            // Dừng và hủy bỏ kết nối âm thanh
            source.disconnect();
            audioContext.close().then(() => {
              console.log("AudioContext closed successfully");
            });
            // Tạo Blob từ dữ liệu âm thanh ghi lại
            const audioBlob = new Blob(audioRecordedChunks, { type: 'audio/wav' });

            // Tạo URL cho Blob và hiển thị nó
            const audioUrl = URL.createObjectURL(audioBlob);
            audioRecordedChunks = [];
            urlAudioReview = audioUrl;
            // lnb_audioReviewShow.src = urlAudioReview;

            // Reset bộ lọc âm thanh
            resetAudioFilters();
          };

          // Bắt đầu ghi âm thanh

          // Hàm để reset bộ lọc âm thanh khi kết thúc ghi âm
          function resetAudioFilters() {
            // Tạo lại bộ lọc Compressor
            // compressor.threshold.value = -50;
            // compressor.knee.value = 40;
            // compressor.ratio.value = 12;
            // compressor.attack.value = 0;
            // compressor.release.value = 0.25;

            // Tạo lại bộ lọc Echo (Delay)
            // delay.delayTime.value = 0;
            gainNode.gain.value = 1.0; // Đặt lại âm lượng về 100%
            highPassFilter.frequency.value = 150; // Đặt lại tần 
          }

          // const audioStream = await navigator.mediaDevices.getUserMedia({ 
          //   audio: {
          //     deviceId: { exact: 'be3d8ff66d794a4d2ca26736fc3057c6c64726c7b53bfa9257f179106e5c2349' }
          //   }
          //  });
          // lnb_audioMediaRecorder = new MediaRecorder(audioStream);
          // let audioRecordedChunks = [];
      
          
      
          // lnb_audioMediaRecorder.ondataavailable = (event) => {
          //   if (event.data.size > 0) {
          //     audioRecordedChunks.push(event.data);
          //   }
          // };
      
        
      
          // lnb_audioMediaRecorder.onstop = () => {
          //   const audioBlob = new Blob(audioRecordedChunks, { type: 'audio/wav' });
          //   const audioUrl = URL.createObjectURL(audioBlob);
          //   audioRecordedChunks = [];
          //   urlAudioReview = audioUrl
          //   lnb_audioReviewShow.src = urlAudioReview
          // };
          lnb_videoMediaRecorder.start();
        } catch (error) {
          console.error('Error accessing media devices:', error);
        }
      }
function lnb_startFilmVideo(){
  lnb_videoMediaRecorder.start();
}
function lnb_stopFilmVideo(){
  lnb_videoMediaRecorder.stop();
}
function lnb_startSoundRecord(){
  lnb_audioMediaRecorder.start();
}
function lnb_stopSoundRecord(){
  lnb_audioMediaRecorder.stop();
}
startRecordButton.addEventListener('click', lnb_startShadowing);

function lnb_startShadowing(){
  
  lnb_startSoundRecord()
  // lnb_startFilmVideo()
  lnb_startMediaRecorder()
  fullscreenButton.click()
}


stopRecordButton.addEventListener('click', lnb_stopVidShadow);

function lnb_stopVidShadow(){
  if (lnb_videoMediaRecorder.state !== 'inactive') {
    lnb_stopSoundRecord()
    // lnb_stopFilmVideo()
    lnb_stopMediaRecorder()  
  }
}
reviewButton.addEventListener('click', lnb_reviewVidShadow);
function lnb_reviewVidShadow(){
  document.querySelector('.lnb_rowVideoShadowFrame').style.display = 'block'
  videoShowReview.load()
  lnb_audioReviewShow.play()
  videoShowReview.play()
}
buttonvideolongtieng.addEventListener('click', lnb_startMediaRecorder);

const blobUrl = lnb_Video_Youtube_Streaming.src;
let lnb_mediaRecorder
// Kiểm tra xem trình duyệt có hỗ trợ MediaStream Recording API hay không
function startScreenRecording() {
    if ('MediaRecorder' in window && 'getUserMedia' in navigator.mediaDevices) {
      // Request access to screen and microphone
      navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
        .then((stream) => {
          // Create MediaRecorder object to record the stream
          document.querySelector('#lnb_shadowingWindowStart').remove()
           lnb_mediaRecorder = new MediaRecorder(stream);
  
          // Array to store video chunks
          const chunks = [];
  
          // When new data is available, store it in the chunks array
          lnb_mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              chunks.push(event.data);
            }
          };
  
          // When recording ends, handle the recorded video
          lnb_mediaRecorder.onstop = () => {
            const videoBlob = new Blob(chunks, { type: 'video/webm' });
            const videoUrl = URL.createObjectURL(videoBlob);
  
            // You can use videoUrl to play the video or perform further steps
            // videoShowReview.src = videoUrl;
            const vidFinish = document.createElement("div");
            const timeId = Date.now()
            const idVid = `vid_${timeId}`
            const idAud = `aud_${timeId}`
            vidFinish.setAttribute('class','lnb_videoItem')
            vidFinish.innerHTML = `
              <video id="${idVid}" class="lnb_vidReviewShow" src="${videoUrl}" controls></video>
              <audio id="${idAud}" src="${urlAudioReview}" ></audio>
            `
            document.querySelector('.lnb_videoReviewShow').appendChild(vidFinish)
            let vidElment = document.getElementById(idVid)
            let audElment = document.getElementById(idAud)
            vidElment.onplay = ()=>{
              audElment.currentTime = vidElment.currentTime
              // audElment.play()
            }
            vidElment.onpause = ()=>{
              audElment.pause()
            }
            stream.getTracks().forEach(track => track.stop());
          };
  
          // Start recording
          
  
        })
        .catch((error) => {
          document.querySelector('#lnb_shadowingWindowStart').remove()
          document.querySelector('#lnb_idButtonShadowing').setAttribute('class', 'lnb_button_youtube')
          lnb_hideDiv('#lnb_idshadowingwindow', 'auto', 'auto', '0px', 'auto')
          console.error('Error accessing screen and microphone:', error);
        });
    } else {
      console.error('MediaStream Recording API is not supported in this browser.');
    }
}
function lnb_startMediaRecorder(){
  lnb_mediaRecorder.start();
}
function lnb_stopMediaRecorder(){
  lnb_mediaRecorder.stop();
}



