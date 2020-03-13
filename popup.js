var radioConsole = document.getElementById('typeConsole');
var radioAlert = document.getElementById('typeAlert');
radioConsole.addEventListener('click', function (event) {
    chrome.storage.sync.set({ output: 'console' });
});
radioAlert.addEventListener('click', function (event) {
    chrome.storage.sync.set({ output: 'alert' });
});

//standard auf console
chrome.storage.sync.set({ output: 'console' });