chrome.browserAction.onClicked.addListener(function(activeTab) {
  var newURL = chrome.extension.getURL('event.html');
  chrome.tabs.create({ url: newURL });
}); 
