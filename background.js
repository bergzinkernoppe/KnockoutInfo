/*
function sendKoRequest() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var options = {
            source: "KnockoutInfo",
            type: "KOREQUEST",
        }
        chrome.tabs.sendMessage(tabs[0].id, options, function (response) {
            // bisher nichts, weil zu lange dauert
        });
    });
}

chrome.contextMenus.create({ title: "Knockout Info", id: "KnockoutInfo" });

// TODO: testen ob so messages funktionieren
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    //alert(request.data);
    console.log(request.data);
});

chrome.contextMenus.onClicked.addListener(function (clickInfo) {
    sendKoRequest();
});
*/

//Globals
var INJREQUEST = {
    source: 'KnockoutInfo',
    type: 'INJREQUEST',
    file: chrome.extension.getURL('injection.js')
}
var SENDSELNODE = {
    source: 'KnockoutInfo',
    type: 'SENDSELNODE'
}

//Funktionen
/*
function contentConnection() {;
    var TabId;
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabArray) {
        TabId = tabArray[0];
    });
    var port = chrome.tabs.connect(TabId, { name: "KnockoutConnection" });
    port.postMessage(REQINJECTION);
    port.onMessage.addListener(function (msg) {
        if (msg.source == 'KnockoutInfo') {
            if (msg.type == 'REPINJECTION') {
                port.postMessage(SENDSELECTEDNODE);
            }
        }
    });
}
*/
function sendInjection(file) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, INJREQUEST, function (response) {
            if (response.source == 'KnockoutInfo' && response.type == 'INJREPLY')
                console.log(response.result);
        });
    });
}
function sendSelNode() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, SENDSELNODE, function (response) {
            if (response.source == 'KnockoutInfo')
                console.log(response.result);
        });
    });
}

//Listener
chrome.contextMenus.onClicked.addListener(function (clickInfo) {
    if (clickInfo.menuItemId == 'KnockoutInfo') {
        sendInjection('injection.js');
        //sendSelNode();
    }
});

//Code
chrome.contextMenus.create({ title: "Knockout Info", id: "KnockoutInfo" });
