// --------------------- Globals -------------------------------
var printKoData = {
    source: 'KnockoutInfo',
    type: 'PRINTKO',
    printType: ''
}
// --------------------- Funktionen ----------------------------
/** Injiziert den Skript 'file' in den Bereich 'node' des Dokuments in dem sich die Funktion befindet */
function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}
/** Schickt eine Nachricht 'message' an Skript-ausfuehrendes Fenster */
function sendWindowMessage(message) {
    window.postMessage(message, '*');
}

// --------------------- Listener ------------------------------
chrome.runtime.onMessage.addListener(function (message, sender, sendReply) {
    if (!message.source == 'KnockoutInfo')
        return;
    if (message.type == 'PRINTINSTR') {
        printType = message.printType;
        sendWindowMessage(printKoData);
    }
})


// --------------------- Code ----------------------------------------
injectScript(chrome.runtime.getURL('injection.js'), 'body');




