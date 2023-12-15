function lnb_dragElement_Youtube(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, top = 200, left = 0, right = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // If present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      document.getElementById(elmnt.id + "header").ontouchstart = dragTouchStart;
    } else {
      // Otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
      elmnt.ontouchstart = dragTouchStart;
    }
  
    function dragMouseDown(e) {
      document.getElementById(elmnt.id).style.transition = '0s linear';
      e = e || window.event;
      e.preventDefault();
      // Get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // Call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // Calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // Set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      top = elmnt.offsetTop - pos2
      left = elmnt.offsetLeft - pos1
    }
  
    function closeDragElement() {
      // Stop moving when the mouse button is released:
      if(elmnt.id == 'id_lnb_vocaYoutube'){
        let elmntWidth = parseFloat(window.getComputedStyle(elmnt).width) 
        let widowWidth = parseFloat(window.innerWidth)
        right =  widowWidth - elmntWidth - left
        localStorage.setItem("lnb_rightYoutube", `${right}px`);
        document.getElementById(elmnt.id).style.transition = '0.2s linear';
        document.onmouseup = null;
        document.onmousemove = null;
      }else{
        document.onmouseup = null;
        document.onmousemove = null;
      }
      
    }
  
    function dragTouchStart(e) {
      document.getElementById(elmnt.id).style.transition = '0s linear';
      e = e || window.event;
      e.preventDefault();
      // Get the touch position at startup:
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
      elmnt.ontouchend = closeDragElement;
      // Call a function whenever the touch moves:
      elmnt.ontouchmove = elementDragTouch;
    }
  
    function elementDragTouch(e) {
      e = e || window.event;
      e.preventDefault();
      // Calculate the new touch position:
      pos1 = pos3 - e.touches[0].clientX;
      pos2 = pos4 - e.touches[0].clientY;
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
      // Set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      top = elmnt.offsetTop - pos2
      left = elmnt.offsetLeft - pos1
    }
  }
  