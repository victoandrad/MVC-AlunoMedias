import { AlunoService } from "./services/AlunoService.js"
import { EditAlunoView } from "./views/EditAlunoView.js"
import { MateriaService } from "./services/MateriaService.js"
import { EditAlunoController } from "./controllers/EditAlunoController.js"

const alunoService = new AlunoService()
const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"))
const aluno = alunoService.findById(id)

const editAlunoView = new EditAlunoView("[data-edit-aluno]", new MateriaService().materias)
const editAlunoController = new EditAlunoController(aluno, editAlunoView, alunoService)

document.getElementById("first_name").value = aluno.nome

document.querySelector("[data-edit-aluno]").addEventListener("submit", e => {
    e.preventDefault()
    const nome = document.getElementById("first_name").value

    editAlunoController.edit(aluno, nome)
    window.location.assign("index.html")
})
