// --------------------- Globals -------------------------------
/** Mit rechter Maustaste geklicktes DOM-Element */
var clickedNode;

// --------------------- Funktionen ----------------------------
/** Holt Knockout-Daten für übergebenes DOM-Objekt */
function getKoData(node) {
    try {
        var ko = requirejs('knockout');
        var koData = ko.dataFor(node);
        return koData; // koData ist leer wenn domElement keine data-bindings hat
    } catch (err) {
        return "No binded data available for selected Element!";
    }
}
function printKoData(printType,koData) {
    if (printType == 'alert') {
        alert(koData);
    } else {
        console.log("Knockout data:");
        console.log(koData);
    }
}

// --------------------- Listener ------------------------------
/* geklicktes Element muss hier ausgelesen werden, weil background keinen Zugriff auf DOM hat und 
 * contentScript.js nicht mit window.postMessage senden kann weil das Objekt Methoden enthält und 
 * aus nicht erkennbaren Gründen JSON.stringify() nur {} zurückliefert :^) */
document.addEventListener('mousedown', function (event) { // mousedown anstatt contextmenu weil contextmenu schon waehrend laden moeglich ist
    //rechts-klick
    if (event.button == 2) {
        clickedNode = event.target;
    }
});
window.addEventListener('message', function (event) {
    if (!window == event.source)
        return;
    var message = event.data;
    if (!message.source == 'KnockoutInfo')
        return;
    if (message.type == 'PRINTKO') {
        printKoData(message.printType, getKoData(clickedNode));
    }
}, false);

// --------------------- Code ----------------------------------
