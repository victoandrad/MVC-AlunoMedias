class EditAlunoView {
    constructor() {
        this.render()
    }

    render(aluno) {
        const html = `
        <div class="row">
          
          <div class="input-field col s4">
            <input type="text" class="validate" id="materia"/>
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

        document.querySelector("[data-edit-notas]").innerHTML = html
        return html
    }
}