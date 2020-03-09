//Funktionen
function injectScript(script) { // Skript darf keine ä, ö, ü, ß, etc. enthalten, sonst compiler error (danke chrome <3)
    chrome.tabs.executeScript({
        file: script
    });
}

//Listener
chrome.contextMenus.onClicked.addListener(function (clickInfo) {
    if (clickInfo.menuItemId === 'KnockoutInfo') {
        injectScript('content.js');
    }
});
chrome.runtime.onMessage.addListener(function (message, sender, sendReply) {
    if (sender.id === 'KnockoutInfo') {
        if (message.source === 'KnockoutInfo' && message.type === 'KODATA') {
            console.log(message.data);
        }
    }
});

//Code
chrome.contextMenus.create({ title: "Knockout Info", id: "KnockoutInfo" });
