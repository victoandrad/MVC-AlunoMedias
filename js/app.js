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

const alunoService = new AlunoService()

alunos.forEach(aluno => {
    alunoService.insert(new AlunoModel(aluno))
})

const alunoModel = new AlunoModel()
const alunoView = new AlunoView("[table-data]")
const alunoController = new AlunoController(alunoService, alunoView)

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()
    const nome = document.getElementById("first_name")

    alunoController.insert({nome: nome.value})
    nome.value = ""
})