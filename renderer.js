function show() {
    var p = document.getElementById('pass');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pass');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false)
const {BrowserWindow} = require('electron').remote
const path = require('path')

const newWindowBtn = document.getElementById('btn1')

newWindowBtn.addEventListener('click', function() {
    let win = new BrowserWindow({ width: 1920, height: 1080})
    win.loadFile('menu.html')
    win.show()
})
    
    
