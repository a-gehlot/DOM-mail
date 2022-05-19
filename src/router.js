class Router {
    constructor(node, routes) {
        this.node = node;
        this.routes = routes;
    }

    start() {
        this.render();
        window.addEventListener("hashchange", this.render.bind(this))
    }

    activeRoute() {
        let frag = window.location.hash;
        frag = frag.split('#')[1];
        return this.routes[frag];
    }

    render() {
        this.node.innerHTML = "";
        let component = this.activeRoute();
        if (component) {
            this.node.innerHTML = "";
            let p = document.createElement("p");
            p.innerHTML = component.render().outerHTML
            this.node.appendChild(p);
        }
    }
}

module.exports = Router;