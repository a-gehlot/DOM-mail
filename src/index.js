window.addEventListener('DOMContentLoaded', (e) => {
    var sidebar = document.querySelectorAll(".sidebar-nav li")
    sidebar.forEach((node) => {
        node.addEventListener("click", (e) => {
            let loc = node.innerText.toLowerCase();
            window.location.hash = loc;
        })
    })
})