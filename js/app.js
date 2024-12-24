const alunos = [
    {
        _id: 0,
        nome: "Victor Andrade",
        notas: {
            portugues: [2, 1, 2, 2],
            matematica: [2, 2, 2, 2],
            historia: [2, 2, 3, 3],
            ciencias: [3, 3, 3, 3],
        },
    },
    {
        _id: 1,
        nome: "Luiza Aurora",
        notas: {
            portugues: [4, 4, 4, 4],
            matematica: [4, 4, 5, 5],
            historia: [5, 5, 6, 6],
            ciencias: [7, 7, 8, 9],
        },
    },
]

// // Variáveis globais
// const table = document.querySelector("[table-data]")
// const thead = table.querySelector("thead")
// const tbody = table.querySelector("tbody")

// // Para renderizar o thead
// function renderThead() {
//     let header = document.createElement("tr")
//     header.innerHTML = `<td>Nome</td>`
//     header.innerHTML += Object.keys(alunos[0].notas).map(materia => {
//         return `<td>${materia}</td>`
//     }).join("")

//     thead.appendChild(header)
// }
// renderThead()

// // Para renderizar os alunos no tbody
// function renderTbody() {
//     alunos.forEach(aluno => {
//         let tr = document.createElement("tr")
//         tr.innerHTML = `<td>${aluno.nome}</td>`
//         for (let materia in aluno.medias) {
//             tr.innerHTML += `<td>${aluno.medias[materia]}</td>`
//         }
//         tbody.appendChild(tr)
//     })
// }
// renderTbody()



const alunoService = new AlunoService()

alunos.forEach(aluno => {
    alunoService.insert(new AlunoModel(aluno))
})

const alunoModel = new AlunoModel()
const alunoView = new AlunoView("[table-data]")