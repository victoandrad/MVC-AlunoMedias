class AlunoView {
    constructor(container) {
        this.container = document.querySelector(container)
        this.thead = this.container.querySelector("thead")
        this.tbody = this.container.querySelector("tbody")
        this.materias = ["portugues", "matematica", "historia", "ciencias"]

        this.renderHeader()
    }

    renderHeader() {
        const header = document.createElement("header")
        header.innerHTML = `<td>Nome</td>`
        header.innerHTML += this.materias.map(materia => {
            return `<td>${materia}</td>`
        }).join("")

        this.thead.appendChild(header)
    }

    renderBody(alunos) {
        const body = ""
        alunos.forEach(aluno => {
            let tr = document.createElement("tr")
            tr.innerHTML = `<td>${aluno.nome}</td>`
            this.materias.forEach(materia => {
                tr.innerHTML += `<td>${aluno.medias[materia]}</td>`
            })
            body += tr
        })
        this.tbody.appendChild(body)
    }
}