/*
function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}

function routekoData(message) {
    chrome.runtime.sendMessage(message);
}

function requestKoData() {
    var message = {
        source: 'KnockoutInfo',
        type: 'KOREQUEST'
    }
    window.postMessage(message, '*');
}

chrome.runtime.onMessage.addListener(function (request, sender, response) {
    if (request.source === 'KnockoutInfo' && request.type === 'KOREQUEST') {
        requestKoData();
    }
});

window.addEventListener('message', function (e) {
      if (e.source !== window)
    { return; }
    var message = e.data;
    if (!message.source === 'KnockoutInfo')
    { return; }
    if (message.type === 'KODATA') {     
        routekoData(message);
    }
});

injectScript(chrome.extension.getURL('injection.js'), 'body');
*/

//Globals
var INJREPLY = {
    source: 'KnockoutInfo',
    type: 'INJREPlY',
    result: ''
}
var NODEREPLY = {
    source: 'KnockoutInfo',
    type: 'NODEREPLY',
    result: ''
}
var REQKODATA = {
    source: 'KnockoutInfo',
    type: 'REQKODATA',
    node: ''
}

//Funktionen
function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}
function reqKoData() {
    window.postMessage(REQKODATA, '*');
}
chrome.runtime.onMessage.addListener(function (message, sender, sendReply) {
    if (!message.source == 'KnockoutInfo')
        return;
    if (message.type == 'INJREQUEST') {
        try {
            injectScript(message.file, 'body');
            INJREPLY.result = 'Successfully injected ' + message.file;
        } catch (err) {
            console.log('Injection failure: ' + err);
            INJREPLY.result = 'Failed injection of ' + message.file;
        }
        sendReply(INJREPLY);
    }
    else if (message.type == 'SENDSELNODE') {
        try {
            reqKoData();
            NODEREPLY.result = 'Successfully sent node "' + REQKODATA.node + '"';
        } catch (err) {
            console.log('SendNode failure: ' + err);
            NODEREPLY.result = 'Failed to send node "' + REQKODATA.node + '"';
        }
        sendReply(NODEREPLY);
    }
})


//Code
console.log("look dad im useful");




