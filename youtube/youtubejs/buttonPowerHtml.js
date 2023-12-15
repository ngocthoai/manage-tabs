const lnb_buttonYoutubePower = document.createElement("div");
lnb_buttonYoutubePower.setAttribute('id','lnb_groupSystemControls')

let lnb_ContentSystemHtml = `
    <div class="lnb_groupSystemControls">
        <div id="lnb_idButtonYoutubePower" class="lnb_btSystem"></div>
    </div>
`
lnb_buttonYoutubePower.innerHTML = lnb_ContentSystemHtml


document.body.insertAdjacentElement("afterend", lnb_buttonYoutubePower);
document.querySelector('#lnb_idButtonYoutubePower').addEventListener('click', lnb_onOffYoutube)




function lnb_onOffYoutube(){
    let statusOnOffYoutube = document.querySelector('#id_lnb_vocaYoutube').style.display
    if(statusOnOffYoutube == 'block'){
        document.querySelector('#id_lnb_vocaYoutube').style.display = 'none'
        localStorage.setItem('lnb_onOffYoutube','none')
        lnb_listenVideo = false
    }else{
        document.querySelector('#id_lnb_vocaYoutube').style.display = 'block'
        localStorage.setItem('lnb_onOffYoutube','block')
        lnb_listenVideo = true
    }
}

