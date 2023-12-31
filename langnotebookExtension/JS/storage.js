chrome.tabs.query({}, function(tabs) {
  console.log('Tabs:', tabs);
  var tabList = document.getElementById('l_tabCurrents');
  console.log('tabList:', tabList);

  tabs.forEach(function(tab) {
    var div = document.createElement('div');
    div.setAttribute('class','l_buttonTabContent')
    div.setAttribute('idTab',tab.id)
    div.setAttribute('url',tab.url)
    div.setAttribute('index',tab.index)
    div.innerHTML = `<img src="${tab.favIconUrl}" width="15" height="15" alt="Lang"> ${tab.title}`;
    tabList.appendChild(div);
    div.addEventListener('click', activateTab);
  });
});
