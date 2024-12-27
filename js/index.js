import { AlunoService } from "./services/AlunoService.js"
import { AlunoController } from "./controllers/AlunoController.js"
import { AlunoView } from "./views/AlunoView.js"
import { MateriaService } from "./services/MateriaService.js"

const alunoService = new AlunoService()
const alunoView = new AlunoView("[table-data]", new MateriaService().materias)
const alunoController = new AlunoController(alunoService, alunoView)

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()
    const nome = document.getElementById("first_name")
    if (nome.value) {
        alunoController.insert({nome: nome.value})
        nome.value = ""
    }
})

document.getElementById("search_name").addEventListener("input", function(e) {
    e.preventDefault()
    const nome = this.value
    alunoController.searchByName(nome)
})