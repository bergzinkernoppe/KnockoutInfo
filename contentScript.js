// --------------------- Globals -------------------------------

// --------------------- Funktionen ----------------------------
function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}

// --------------------- Listener ------------------------------
chrome.runtime.onMessage.addListener(function (message, sender, sendReply) {
    if (!message.source == 'KnockoutInfo')
        return;
    if (message.type == 'INJREQUEST') {
        injectScript(message.file, 'body');
    }
})

// --------------------- Code ----------------------------------------
console.log("look dad im useful");




