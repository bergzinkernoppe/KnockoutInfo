// --------------------- Globals -------------------------------
var printInstruction = {
    source: 'KnockoutInfo',
    type: 'PRINTINSTR'
}

// --------------------- Funktionen ----------------------------
/** Schickt Ausgabeanweisung an aktiven Tab */
function sendActiveTabMessage(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
}

// --------------------- Listener ------------------------------
chrome.contextMenus.onClicked.addListener(function (clickInfo) {
    if (clickInfo.menuItemId == 'KnockoutInfo') {
        sendActiveTabMessage(printInstruction);
    }
});

// --------------------- Code ----------------------------------
chrome.contextMenus.create({ title: "Knockout Info", id: "KnockoutInfo" });