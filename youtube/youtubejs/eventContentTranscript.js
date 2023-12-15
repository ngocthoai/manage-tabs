let lnb_Note1_button = document.querySelector('#id_lnb_note1_button')
let lnb_Note2_button = document.querySelector('#id_lnb_note2_button')
let lnb_Note3_button = document.querySelector('#id_lnb_note3_button')
let lnb_Note4_button = document.querySelector('#id_lnb_note4_button')
let lnb_Note5_button = document.querySelector('#id_lnb_note5_button')
let lnb_Note6_button = document.querySelector('#id_lnb_note6_button')
let lnb_Note7_button = document.querySelector('#id_lnb_note7_button')
let lnb_Note8_button = document.querySelector('#id_lnb_note8_button')
let lnb_Note9_button = document.querySelector('#id_lnb_note9_button')
let lnb_Note10_button = document.querySelector('#id_lnb_note10_button')
let lnb_Note11_button = document.querySelector('#id_lnb_note11_button')
let lnb_Note12_button = document.querySelector('#id_lnb_note12_button')
let lnb_Note13_button = document.querySelector('#id_lnb_note13_button')
let lnb_Note14_button = document.querySelector('#id_lnb_note14_button')
let lnb_Note15_button = document.querySelector('#id_lnb_note15_button')

lnb_Note1_button.addEventListener('click',lnb_change_Transcript_page)
lnb_Note2_button.addEventListener('click',lnb_change_Transcript_page)
lnb_Note3_button.addEventListener('click',lnb_change_Transcript_page)
lnb_Note4_button.addEventListener('click',lnb_change_Transcript_page)
lnb_Note5_button.addEventListener('click',lnb_change_Transcript_page)
lnb_Note6_button.addEventListener('click',lnb_change_Transcript_page)
lnb_Note7_button.addEventListener('click',lnb_change_Transcript_page)
lnb_Note8_button.addEventListener('click',lnb_change_Transcript_page)
lnb_Note9_button.addEventListener('click',lnb_change_Transcript_page)
lnb_Note10_button.addEventListener('click',lnb_change_Transcript_page)
lnb_Note11_button.addEventListener('click',lnb_change_Transcript_page)
lnb_Note12_button.addEventListener('click',lnb_change_Transcript_page)
lnb_Note13_button.addEventListener('click',lnb_change_Transcript_page)
lnb_Note14_button.addEventListener('click',lnb_change_Transcript_page)
lnb_Note15_button.addEventListener('click',lnb_change_Transcript_page)


function lnb_change_Transcript_page(event){
    let checkStatus = event.target.getAttribute("class")
    let nameData = event.target.getAttribute("dataTran")

    let idPageOld = document.querySelector('.lnb_active_YT.lnb_button_content_youtube').getAttribute('dataIDPage')
    if(checkStatus == 'lnb_active_YT lnb_button_content_youtube'){

    }else{
        lnb_addressStoreActive = nameData
        document.querySelector('.lnb_active_YT.lnb_button_content_youtube').setAttribute('class','lnb_button_content_youtube')
        event.target.setAttribute("class",'lnb_active_YT lnb_button_content_youtube')

        localStorage.setItem('lnb_notePageActive',lnb_addressStoreActive)
        
        lnb_render_transcript_flex(nameData)
        lnb_container_of_transcripts_active = document.getElementById('lnb_content_render_youtube')
        lnb_all_card_active = lnb_container_of_transcripts_active.querySelectorAll('div[timeStart][timeEnd]');
    }
}
function lnb_render_transcript_flex(_nameData){
    let dataGetFromLocal = localStorage.getItem(_nameData)
    if(dataGetFromLocal == undefined || dataGetFromLocal == "undefined"){
        lnb_render_transcript_youtube([])
    }else{
        lnb_transcripts_Youtube_Active = JSON.parse(dataGetFromLocal)
        lnb_render_transcript_youtube(lnb_transcripts_Youtube_Active)
    }
}

// ///////////////////////////////////////////////////
// import and save transcript
let lnb_save_transcript_import_button = document.querySelector('#lnb_save_import_button')

lnb_save_transcript_import_button.addEventListener('click',lnb_save_transcript_from_import)

function lnb_save_transcript_from_import(event){
    let dataString = document.querySelector('#lnb_valua_import').value.trim()
    const excludedVocas = ['[Music]', '[Applause]', '[Laughter]', 
    '[Audience Cheers]', '[music]', '[applause]', '[laughter]', 
    '[audience cheers]', '[music] [applause]', '[music] [laughter]',
    '[Music] [Laughter]', '[Music] [Applause]'];


    if(dataString == ''){
        document.querySelector('#lnb_valua_import').placeholder = 'data empty.'
    }else{
        if (lnb_isTranscriptValid(dataString)) {
            let transcriptJSON = lnb_transcriptToJSON(dataString);
            sortByStt(transcriptJSON)
            lnb_setEndTimeImportsrt(transcriptJSON)
            transcriptJSON = transcriptJSON.filter(element => !excludedVocas.includes(element.voca));
            lnb_render_transcript_youtube(transcriptJSON)
            dataString = JSON.stringify(transcriptJSON)
            localStorage.setItem(lnb_addressStoreActive,dataString)
            document.querySelector('#lnb_valua_import').value = ''
            lnb_transcripts_Youtube_Active = transcriptJSON
            lnb_transcripts_Youtube_Data_Active = dataString

            lnb_container_of_transcripts_active = document.getElementById('lnb_content_render_youtube')
            lnb_all_card_active = lnb_container_of_transcripts_active.querySelectorAll('div[timeStart][timeEnd]');
            
            let numberTranscript = lnb_transcripts_Youtube_Active.length
            lnb_manageNumberTran[lnb_addressStoreActive]  = numberTranscript
            let idbuttonpage = `#id_lnb_${lnb_addressStoreActive}_button`
            document.querySelector(idbuttonpage).innerText = numberTranscript
            let lnb_manageNumberTranString = JSON.stringify(lnb_manageNumberTran)
            localStorage.setItem('lnb_manageNumberTran',lnb_manageNumberTranString)
          } else {
            let dataArrImport
            try {
                dataArrImport = JSON.parse(dataString);
              } catch (error) {
                console.error("Lỗi khi phân tích chuỗi JSON:");
              }
              if (dataArrImport) {
                sortByStt(dataArrImport)
                lnb_render_transcript_youtube(dataArrImport)
                dataString = JSON.stringify(dataArrImport)
                localStorage.setItem(lnb_addressStoreActive,dataString)
                document.querySelector('#lnb_valua_import').value = ''
                lnb_transcripts_Youtube_Active = dataArrImport
                lnb_transcripts_Youtube_Data_Active = dataString

                lnb_container_of_transcripts_active = document.getElementById('lnb_content_render_youtube')
                lnb_all_card_active = lnb_container_of_transcripts_active.querySelectorAll('div[timeStart][timeEnd]');
                
                let numberTranscript = lnb_transcripts_Youtube_Active.length
                lnb_manageNumberTran[lnb_addressStoreActive]  = numberTranscript
                let idbuttonpage = `#id_lnb_${lnb_addressStoreActive}_button`
                document.querySelector(idbuttonpage).innerText = numberTranscript
                let lnb_manageNumberTranString = JSON.stringify(lnb_manageNumberTran)
                localStorage.setItem('lnb_manageNumberTran',lnb_manageNumberTranString)
              } else {
                document.querySelector('#lnb_valua_import').value = ''
                document.querySelector('#lnb_valua_import').placeholder = 'data not correct.'
              }
            
          }
    }
}

function sortByStt(arr) {
    arr.sort((a, b) => a.timeStart - b.timeStart);
}

function lnb_isTranscriptValid(_transcript) {
    const lines = _transcript.split('\n');
    let foundTimeInfo = false;
  
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
  
      if (line === '') {
        // Bỏ qua các dòng trống
        continue;
      }
  
      if (line.match(/\d+:\d+:\d+,\d+ --> \d+:\d+:\d+,\d+/)) {
        foundTimeInfo = true;
        break;
      }
    }
  
    return foundTimeInfo;
  }

  function lnb_transcriptToJSON(_transcript) {
    const lines = _transcript.split('\n'); // Tách transcript thành các dòng
    const transcriptJSON = [];
    let id = Date.now()
    let urlShort
    // Tạo một đối tượng URL từ chuỗi URL đầu vào
    const urlObject = new URL(window.location.href);

    // Lấy tham số "v" từ URL
    const vParam = urlObject.searchParams.get("v");

    // Lấy tham số "list" từ URL, nếu có
    const listParam = urlObject.searchParams.get("list");

    if(listParam){
      urlShort = `v=${vParam}&list=${listParam}`
    }else{
      urlShort = `v=${vParam}`
    }
  
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === '') continue; // Bỏ qua các dòng trống
  
      const timeInfo = lines[i].match(/(\d+:\d+:\d+,\d+) --> (\d+:\d+:\d+,\d+)/);
      if (timeInfo) {
        // Lấy thông tin thời gian
        const timestart = lnb_timeToSeconds(timeInfo[1]);
        const timeend = lnb_timeToSeconds(timeInfo[2]);
  
        // Lấy nội dung transcript trong các dòng tiếp theo
        const transcriptContent = [];
        i++;
  
        while (i < lines.length && lines[i].trim() !== '') {
          transcriptContent.push(lines[i].trim());
          i++;
        }
  
        const transcriptObject = {
            id: id + i,
            timeStart: timestart,
            timeEnd: timeend,
            voca: transcriptContent.join(' '),
            sentenceMean: '',
            urlVideo: urlShort
        };
  
        transcriptJSON.push(transcriptObject);
      }
    }
  
    return transcriptJSON;
  }

function lnb_setEndTimeImportsrt(_arr){
  for (let index = 0; index < _arr.length - 1 ; index++) {
    if(_arr[index].timeEnd > _arr[index + 1].timeStart){
      _arr[index].timeEnd = _arr[index + 1].timeStart - 0.3
    }
  }
}
  
  