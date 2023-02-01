const lista = document.querySelector("ul")

document.querySelector("#botao").addEventListener('click', ()=>{

    lista.setAttribute("data-lista", "mostrar")

    const mostrar = lista.getAttribute("data-lista")

    listaVisivel(mostrar)
})

document.querySelector(".close").addEventListener('click', ()=>{

    lista.setAttribute('data-lista', "esconder")

    const esconder = lista.getAttribute('data-lista')

    listaVisivel(esconder)
})

const listaVisivel = (dado)=>{

    if(dado === "mostrar"){

        lista.style.visibility = "visible"

    }else{

        lista.style.visibility = "hidden"
    }

}