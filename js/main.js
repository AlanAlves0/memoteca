import ui from "./ui.js"
import api from "./api.js"

document.addEventListener("DOMContentLoaded", () => {
    ui.redenrizarPensamentos()
    
    const formularioPensamento = document.getElementById("pensamento-form")
    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario)
})

async function manipularSubmissaoFormulario(event) {
    event.preventDefault()
    const id = document.getElementById("pensamento-id").value
    const conteudo = document.getElementById("pensamento-conteudo").value
    const autoria = document.getElementById("pensamento-autoria").value
    
    try{
        if(id){
            await api.editarPensamento({id, conteudo, autoria})
        }else{
            await api.salvarPensamento({ conteudo, autoria })
        }
        ui.redenrizarPensamentos()
       
    }
    catch {
        alert("Erro ao salvar pensamento")
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ui.redenrizarPensamentos()
  
    const formularioPensamento = document.getElementById("pensamento-form")
    const botaoCancelar = document.getElementById("botao-cancelar")
  
    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario)
    botaoCancelar.addEventListener("click", manipularCancelamento)
  })
  
  //código omitido
  
  function manipularCancelamento() {
    ui.limparFormulario();
  }