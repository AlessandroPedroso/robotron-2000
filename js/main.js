const controlador = document.querySelectorAll("[data-controle]")


const manipulaDados = (operacao, controle) =>{

    // const peca = controle.querySelector(".controle-contador")

    if(operacao === "-"){

        controle.value = parseInt(controle.value) - 1

    }else{

        controle.value = parseInt(controle.value) + 1
    }
 }

controlador.forEach(item =>{

    item.addEventListener("click", (evento)=>{

        manipulaDados(evento.target.dataset.controle, evento.target.parentNode.querySelector("[data-contador]"))

    })
})


 