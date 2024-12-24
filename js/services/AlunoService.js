class AlunoService {
    constructor() {
        this.alunos = []

        this.recoverLocalStorage()
    }

    insert(aluno) {
        if (!(aluno instanceof AlunoModel)) {
            throw Error("Only AlunoModel instances can be inserted into the service")
        } 
        this.alunos.push(aluno)
        this.updateLocalStorage()
        return this.alunos[this.alunos.length - 1]
    }

    findById(id) {
        if (typeof id !== "number") {
            throw Error("Only numbers are accepted")
        }
        return this.alunos.find(aluno => aluno._id === id)
    }

    updateLocalStorage() {
        const data = JSON.stringify(this.alunos)
        localStorage.setItem("alunos", data)
    }

    recoverLocalStorage() {
        const data = localStorage.getItem("alunos")
        if (data) {
            JSON.parse(data).forEach(aluno => {
                this.alunos.push(new AlunoModel(aluno))
            })
        } else {
            this.alunos = []
        }
    }
}