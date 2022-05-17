const Router = require('./router');

window.addEventListener('DOMContentLoaded', (e) => {
    var content = document.querySelector(".content");
    let router = new Router(content);
    router.start();
    var sidebar = document.querySelectorAll(".sidebar-nav li")
    sidebar.forEach((node) => {
        node.addEventListener("click", (e) => {
            let loc = node.innerText.toLowerCase();
            window.location.hash = loc;
        })
    })
})