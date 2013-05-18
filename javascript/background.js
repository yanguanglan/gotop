// Yanguanglan <http://lanyg.com>
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'window.scrollTo(0, 0);'
  });
});