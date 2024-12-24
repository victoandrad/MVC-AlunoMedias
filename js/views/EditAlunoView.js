class EditAlunoView {
    constructor(container, materias) {
        this.container = document.querySelector(container)
        this.notas = this.container.querySelector("[data-edit-notas]")
        this.materias = materias
    }

    render(aluno) {
        const html = this.materias.map(materia => {
            return `
            <div class="row" data-materia="${materia}">    
                <div class="input-field col s4">
                    <input type="text" class="validate" id="materia_${materia}"/ disabled value="${materia}">
                </div>
                <div class="input-field col s2">
                    <input type="number" class="validate" id="nota_${materia}_1" nota/ value="${aluno.notas[materia][0]}">
                </div>
                <div class="input-field col s2">
                    <input type="number" class="validate" id="nota_${materia}_2" nota/ value="${aluno.notas[materia][0]}">
                </div>
                <div class="input-field col s2">
                    <input type="number" class="validate" id="nota_${materia}_3" nota/ value="${aluno.notas[materia][0]}">
                </div>
                <div class="input-field col s2">
                    <input type="number" class="validate" id="nota_${materia}_4" nota/ value="${aluno.notas[materia][0]}">
                </div>
            </div>`
        }).join("")

        this.notas.innerHTML = html
    }
}