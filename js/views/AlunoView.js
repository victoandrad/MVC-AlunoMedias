export class AlunoView {
    constructor(container, materias) {
        this.container = document.querySelector(container)
        this.thead = this.container.querySelector("thead")
        this.tbody = this.container.querySelector("tbody")
        this.materias = materias

        this.renderHeader()
    }

    renderHeader() {
        this.thead.innerHTML = ""
        let tr = document.createElement("tr")
        tr.innerHTML = `<td>Nome</td>`
        tr.innerHTML += this.materias.map(materia => {
            return `<td>${materia}</td>`
        }).join("")

        this.thead.appendChild(tr)
    }

    renderBody(alunos) {
        this.tbody.innerHTML = ""
        alunos.forEach(aluno => {
            let tr = document.createElement("tr")
            tr.innerHTML = `<td><a href="edit.html?id=${aluno._id}">${aluno.nome}</a></td>`
            this.materias.forEach(materia => {

                if (aluno.medias[materia] !== undefined) {
                    tr.innerHTML += `<td>${aluno.medias[materia]}</td>`
                } else {
                    tr.innerHTML += `<td><a href="edit.html?id=${aluno._id}">Incluir nota</a></td>`
                }
    
            })
            this.tbody.appendChild(tr)
        })
    }
}