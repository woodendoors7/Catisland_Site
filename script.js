setInterval(() => {
    createStuff()
}, 200);

let count = 0;
let array = ["https://c.tenor.com/4CHnbg_zVEoAAAAC/space-kitten.gif", "https://c.tenor.com/Hd0ldAlnLbkAAAAC/bahn-mi-space-cat.gif", "https://c.tenor.com/bmOrikjSbG0AAAAC/cat-galactic.gif", "https://c.tenor.com/QLFBxdXvC5IAAAAC/heavy-breathing-cat.gif", "https://c.tenor.com/MHJ3oQ8KTUwAAAAC/space-galaxy.gif", "sussytext.gif", "catisland.gif"]

function createStuff() {
    let element = document.createElement("img")
    element.onclick = function() { openSite() }
    element.src = array[count]
    if (count > 4) element.classList = "catisland"
    document.body.appendChild(element)
    count++
    if (count > 6) count = 0;
}

function openSite() {
    document.location = "https://discord.gg/invite/catisland"
}

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
});