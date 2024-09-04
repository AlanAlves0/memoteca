const URL_BASE = "http://localhost:3000"

const api = {
    async buscarPensamentos(){
        try{
            const response = await fetch(`${URL_BASE}/pensamentos`)
            return await response.json() 
        }
        catch{
            alert("Erro ao buscar pensamentos")
            throw error
        }
    },

    async salvarPensamento(pensamento){
        try{
            const response = await fetch(`${URL_BASE}/pensamentos`, {
                method: "POST",
                headers: {
                    "Content-type":"application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json() 
        }
        catch{
            alert("Erro ao salvar pensamentos")
            throw error
        }
    },

    async buscarPensamentosPorId(id){
        try{
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`)
            return await response.json() 
        }
        catch{
            alert("Erro ao buscar pensamentos")
            throw error
        }
    },

    async editarPensamento(pensamento){
        try{
            const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
                method: "PUT",
                headers: {
                    "Content-type":"application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json() 
        }
        catch{
            alert("Erro ao editar pensamentos")
            throw error
        }
    },

    async excluirPensamento(id){
        try{
            const response = await axios.delete(`${URL_BASE}/pensamentos/${id}` )
        }
        catch{
            alert("Erro ao excluir pensamentos")
            throw error
        }
    }

}

export default api;