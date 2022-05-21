const Inbox = require('./inbox');
const Sent = require('./sent')
const Router = require('./router');
const Compose = require('./compose')

const routes = {
    inbox: Inbox,
    sent: Sent,
    compose: Compose,
}

window.addEventListener('DOMContentLoaded', (e) => {
    var content = document.querySelector(".content");
    let router = new Router(content, routes);
    router.start();
    window.location.hash = "#inbox"
    var sidebar = document.querySelectorAll(".sidebar-nav li")
    sidebar.forEach((node) => {
        node.addEventListener("click", (e) => {
            let loc = node.innerText.toLowerCase();
            window.location.hash = loc;
        })
    })
})