class AlunoModel {
    constructor({_id, nome, notas} = {notas: {}}) {
        this._id = _id !== undefined ? _id : this.generateId()
        this.nome = nome
        this.notas = {...notas}

        if (this._id > AlunoModel.maxId) AlunoModel.maxId = this._id

        this.medias = {}
        for (let materia in this.notas) {
            this.medias[materia] = avarege(...this.notas[materia])
        }

    }

    generateId() {
        return AlunoModel.maxId++
    }


}

AlunoModel.maxId = 0