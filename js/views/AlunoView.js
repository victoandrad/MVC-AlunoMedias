class AlunoView {
    constructor(container) {
        this.container = document.querySelector(container)
        this.thead = this.container.querySelector("thead")
        this.tbody = this.container.querySelector("tbody")
        this.materias = ["portugues", "matematica", "historia", "ciencias"]

        this.renderHeader()
    }

    renderHeader() {
        let tr = document.createElement("tr")
        tr.innerHTML = `<td>Nome</td>`
        tr.innerHTML += this.materias.map(materia => {
            return `<td>${materia}</td>`
        }).join("")

        this.thead.appendChild(tr)
    }

    renderBody(alunos) {
        alunos.forEach(aluno => {
            let tr = document.createElement("tr")
            tr.innerHTML = `<td>${aluno.nome}</td>`
            this.materias.forEach(materia => {
                tr.innerHTML += `<td>${aluno.medias[materia]}</td>`
            })
            this.tbody.appendChild(tr)
        })
    }
}