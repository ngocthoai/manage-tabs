var newTotal = 0
chrome.storage.sync.get(['total'], function(budget){
    
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        if(budget.total){
            newTotal += parseInt(budget.total)
        }else{
            newTotal =  10
        }
      }
    
    chrome.storage.sync.set({'total': newTotal}, function () {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
        } else {
            document.querySelector('#total').innerHTML = newTotal
        }
      })
    document.querySelector('#total').innerHTML = newTotal
})
document.querySelector('#myButton').addEventListener('click', setTotal)
function setTotal(){
    chrome.storage.sync.get(['total'], function(budget){
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
          } else {
            if(budget.total){
                newTotal += parseInt(budget.total)
            }else{
                newTotal =  10
            }
          }
        
        chrome.storage.sync.set({'total': newTotal}, function () {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
            } else {
                document.querySelector('#total').innerHTML = newTotal
            }
          })
        document.querySelector('#total').innerHTML = newTotal
    })
}