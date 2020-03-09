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



