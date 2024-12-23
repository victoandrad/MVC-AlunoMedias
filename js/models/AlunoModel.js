class AlunoModel {
    constructor({_id, nome, notas} = {notas: {}}) {
        this._id = _id !== undefined ? _id : this.generateId()
        this.nome = nome
        this.notas = {...notas}

        if (this._id > AlunoModel.maxId) AlunoModel.maxId = this._id
        
        this.calculateAverage()
    }

    generateId() {
        return AlunoModel.maxId++
    }

    calculateAverage() {
        this.medias = {}
        let materias = Object.keys(this.notas)
        materias.forEach(materia => {
            this.medias[materia] = avarege(...this.notas[materia])
        })
    }
}

AlunoModel.maxId = 0