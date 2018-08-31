function sendMessage(doit) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var port = chrome.tabs.connect(tabs[0].id);
    port.postMessage(doit);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#doit').addEventListener(
    'click', () => sendMessage(true) );
});
