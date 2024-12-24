class EditAlunoView {
    constructor(container, materias) {
        this.container = document.querySelector(container)
        this.materias = materias
    }

    render(aluno) {
        const html = this.materias.map(materia => {
            return `
            <div class="row">    
                <div class="input-field col s4">
                    <input type="text" class="validate" id="materia_${materia}"/ disabled value="${materia}">
                </div>
                <div class="input-field col s2">
                    <input type="text" class="validate" id="nota_materia_1"/>
                </div>
                <div class="input-field col s2">
                    <input type="text" class="validate" id="nota_materia_2"/>
                </div>
                <div class="input-field col s2">
                    <input type="text" class="validate" id="nota_materia_3"/>
                </div>
                <div class="input-field col s2">
                    <input type="text" class="validate" id="nota_materia_4"/>
                </div>
            </div>`
        }).join("")

        this.container.innerHTML = html
    }
}