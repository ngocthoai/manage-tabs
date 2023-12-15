function l_renderTabs(_idElement,_arrTab){
  var tabList = document.getElementById('_idElement');

  _arrTab.forEach(function(tab) {
    var div = document.createElement('div');
    div.setAttribute('class','l_buttonTabContent')
    div.setAttribute('idTab',tab.id)
    div.setAttribute('url',tab.url)
    div.setAttribute('index',tab.index)
    div.innerHTML = `<img src="${tab.favIconUrl}" width="15" height="15" alt="Lang"> ${tab.title}`;
    tabList.appendChild(div);
    div.addEventListener('click', activateTab);
  });
}