//Funktionen
function getKoData(domElement) {
    var ko = requirejs('knockout');
    var koData = ko.dataFor(domElement);
    return koData; // koData ist leer wenn domElement keine data-bindings hat
}

function sendKoData(koData) {
    var message = {
        source: 'KnockoutInfo',
        type: 'KODATA',
        data: JSON.stringify(koData) // wirft error wenn koData leer ist
    }
    chrome.runtime.sendMessage('KnockoutInfo', message);
}

//Listener
document.addEventListener('mousedown', function (event) { // mousedown anstatt contextmenu weil contextmenu schon waehrend laden moeglich ist
    //rechts-click
    if (event.button == 2) {
        sendKoData(getKoData(event.target));
    }
});

//Code





