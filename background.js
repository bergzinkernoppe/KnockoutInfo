// --------------------- Globals -------------------------------
var printInstruction = {
    source: 'KnockoutInfo',
    type: 'PRINTINSTR',
    printType: ''
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
        chrome.storage.sync.get('output', function (items) {
            printInstruction.printType = items.output;
        });
        sendActiveTabMessage(printInstruction);
    }
});

// --------------------- Code ----------------------------------
chrome.contextMenus.create({ title: "Knockout Info", id: "KnockoutInfo" });