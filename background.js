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

