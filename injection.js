// --------------------- Globals -------------------------------
var clickedNode;

// --------------------- Funktionen ----------------------------
function getKoData(node) {
    var ko = requirejs('knockout');
    var koData = ko.dataFor(node);
    return koData; // koData ist leer wenn domElement keine data-bindings hat
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

// --------------------- Code ----------------------------------
try {
    alert(JSON.stringify(getKoData(clickedNode)));
} catch (err) {
    alert("No binded data available for selected Element!\nError message: " + err.message);
}
