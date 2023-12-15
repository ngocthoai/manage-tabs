/* 
tab.id: ID duy nhất của tab.
tab.index: Thứ tự của tab trong cửa sổ trình duyệt.
tab.windowId: ID của cửa sổ chứa tab.
tab.title: Tiêu đề của tab.
tab.url: Địa chỉ URL của tab.
tab.favIconUrl: Đường dẫn đến biểu tượng ưa thích của tab (favicon).
*/
function openTabFromList(e){
    let url = e.target.getAttribute('url')
    closeCurrentTab();
    openNewTab(url)
  }
  function openNewTab(url) {
    chrome.tabs.create({ url: url });
  }
  // Đóng tab hiện tại
  function closeCurrentTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length > 0) {
        chrome.tabs.remove(tabs[0].id);
      }
    });
  }
  // Đóng một tab dựa trên tabId
  function closeTabById(tabId) {
    chrome.tabs.remove(tabId);
  }
  // Mở một tab mới và đóng tab hiện tại
  function openNewTabAndCloseCurrent(url) {
    openNewTab(url);
    closeCurrentTab();
  }
  // Hàm để kích hoạt (activate) tab có id cụ thể
  function activateTab(e) {
    let tabIdActive = Number(e.target.getAttribute('idTab')) 
    chrome.tabs.update(tabIdActive, { active: true }, function(updatedTab) {
      moveTab(tabIdActive, 0)
    });
  }
  // Hàm để sắp xếp lại vị trí của tab
  function moveTab(tabId, newIndex) {
    chrome.tabs.move(tabId, { index: newIndex }, function(movedTab) {
      console.log(`Tab with ID ${tabId} moved to index ${newIndex}.`);
    });
  }