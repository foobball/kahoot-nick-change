let oldXHROpen = window.XMLHttpRequest.prototype.open;
window.XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
    console.log(url);

    if (url == 'https://apis.kahoot.it/namerator') {
        if (document.getElementById('new-name').value !== '')
            url = 'https://bonk.ml/kahoot/' + document.getElementById('new-name').value
    }
    return oldXHROpen.apply(this, arguments);
}

let injtxt = setInterval(() => {
    if (document.getElementsByClassName('styles__NameSpinnerOverlay-krycqa-2 btgHuw').length > 0) {
        clearInterval(injtxt);
        document.getElementsByClassName('styles__Heading-sc-1v4jc6t-2 feUGEI')[0].innerHTML +=
            `<input name="newname" type="tel" placeholder="Custom Name" id="new-name" class="sc-dlfnbm lflLbn" autocomplete="off" value="" aria-expanded="false">`

        log('Added custom name input box');
    }
}, 50)

function log(str) {
    console.log(`%c[Kahoot Custom] ` + `%c${str}`, 'color:#ff96fd;', 'background:none;color:black');
}

log(`Created by foob 😳`);
