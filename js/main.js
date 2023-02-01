const controlador = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}



controlador.forEach(item =>{

    item.addEventListener("click", (evento)=>{

        manipulaDados(evento.target.dataset.controle, evento.target.parentNode.querySelector("[data-contador]"))
        atualizaEstatisticas(evento.target.dataset.peca)

    })
})


const manipulaDados = (operacao, controle) =>{

    // const peca = controle.querySelector(".controle-contador")

    if(operacao === "-"){

        controle.value = parseInt(controle.value) - 1

    }else{

        controle.value = parseInt(controle.value) + 1
    }
 }

 const atualizaEstatisticas = (peca) =>{
    console.log(pecas[peca])

    estatisticas.forEach((elemento)=>{
        
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
 }


 