function lnb_checkNumberCommand(_order){
    let inputString = _order.replace(/\s/g, ''); 
    inputString = parseInt(inputString, 10);
    let orderNumber = lnb_convertStringToNumber(inputString)
    if(orderNumber != null){
        if(lnb_search){
            if(orderNumber < lnb_varraysearch.length){
                lnb_checkOpenNewTab(lnb_varraysearch[orderNumber].urlVideo)
                lnb_numberTranActive = orderNumber
                lnb_limit_left = lnb_varraysearch[orderNumber].timeStart
                lnb_limit_right = lnb_varraysearch[orderNumber].timeEnd
                lnb_setTimeByCommandNumber()
                return true
            }else{
                return false
            }
        }else{
            if(orderNumber < lnb_transcripts_Youtube_Active.length){
                lnb_checkOpenNewTab(lnb_transcripts_Youtube_Active[orderNumber].urlVideo)
                lnb_numberTranActive = orderNumber
                lnb_limit_left = lnb_transcripts_Youtube_Active[orderNumber].timeStart
                lnb_limit_right = lnb_transcripts_Youtube_Active[orderNumber].timeEnd
                lnb_setTimeByCommandNumber()
                return true
            }else{
                return false
            }
        }
    }else{
        return false
    }
}
