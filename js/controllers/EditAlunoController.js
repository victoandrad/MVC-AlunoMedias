export class EditAlunoController {
    constructor(model, view, service) {
        this.model = model
        this.view = view
        this.service = service
        
        this.view.render(this.model)
    }

    edit(aluno, nome) {
        const notas = {}
        const materiasRow = [...this.view.notas.querySelectorAll("[data-materia]")]
        materiasRow.forEach(materiaRow => {
            const notasRow = [...materiaRow.querySelectorAll("[nota]")]
            notas[materiaRow.getAttribute("data-materia")] = notasRow.map(nota => parseFloat(nota.value) || 0) 
        })
        this.service.edit(aluno, nome, notas)
    }
}