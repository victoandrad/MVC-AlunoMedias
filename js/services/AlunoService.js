class AlunoService {
    constructor() {
        this.alunos = []
    }

    insert(aluno) {
        if (!(aluno instanceof AlunoModel)) {
            throw Error("Only AlunoModel instances can be inserted into the service")
        } 
        this.alunos.push(aluno)
    }
}