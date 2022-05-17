class Router {
    constructor(node) {
        this.node = node;
    }

    start() {
        this.render();
        window.addEventListener("hashchange", this.render.bind(this))
    }

    activeRoute() {
        let frag = window.location.hash;
        frag = frag.split('#')[1];
        return frag;
    }

    render() {
        this.node.innerHTML = "";
        let name = this.activeRoute();
        let p = document.createElement("p");
        p.innerHTML = name;
        this.node.appendChild(p);
    }
}

module.exports = Router;