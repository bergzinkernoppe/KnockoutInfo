function getKOData(event) {
    var ko = requirejs('knockout');
    var koData = ko.dataFor(event.target);
    //console.log(ko);
    //console.log(node.target);
    //console.log(koData);
    return koData;
}

function sendKOData(koData) {
    try {
        var message = {
            source: 'KnockoutInfo',
            type: 'KODATA',
            data: JSON.stringify(koData)
        }
        window.postMessage(message, '*');
    } catch (err) {
        alert("No binded data available!");
    }
}

window.addEventListener("message", function (e) {
    if (e.source !== window) { return; }
    var message = e.data;
    if (!message.source === 'KnockoutInfo') { return; }
    if (message.type === 'KOREQUEST') {
        sendKOData(getKOData(e));
    }
});

