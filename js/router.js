export class Router {

    routes = {}

    addRoute(routeName, page){
        this.routes[routeName] = page
    }

    route(event){
        event = event || window.event
        event.preventDefault()

        window.history.pushState({},'',event.target.href)

        this.handle()
    }

    handle(){
        const {pathname} = window.location 

        const route = this.routes[pathname] || this.routes[404]

        fetch(route)
            .then(data => data.text())
                .then(html => {
                    document.getElementById("app").innerHTML = html
                })    
        
                const link = document.querySelector('a[href="' + pathname + '"]');  // Seleciona o elemento <a> com href igual ao pathname

                if (link) {
                  link.classList.toggle('ctive');  // Adiciona a classe 'active' ao elemento <a> encontrado
                } 
                if (pathname == '/'){
                    const home = document.querySelector('.first')
                    home.classList.toggle('ctive')
                }
               
    }
}
