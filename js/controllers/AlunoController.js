class AlunoController {
    constructor(service, view) {
        this.service = service
        this.view = view

        this.view.renderBody(this.service.alunos)
    }

    insert(aluno) {
        this.service.insert(new AlunoModel(aluno))
        this.view.renderBody(this.service.alunos)
    }
}