// --------------------- Globals -------------------------------
var INJREQUEST = {
    source: 'KnockoutInfo',
    type: 'INJREQUEST',
    file: chrome.extension.getURL('injection.js')
}

// --------------------- Funktionen ----------------------------
function sendInjection(file) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, INJREQUEST);
    });
}

// --------------------- Listener ------------------------------
chrome.contextMenus.onClicked.addListener(function (clickInfo) {
    if (clickInfo.menuItemId == 'KnockoutInfo') {
        sendInjection('injection.js');
    }
});

// --------------------- Code ----------------------------------
chrome.contextMenus.create({ title: "Knockout Info", id: "KnockoutInfo" });
