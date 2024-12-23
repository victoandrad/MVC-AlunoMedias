function sum() {
    return [...arguments].reduce((sum, atual) => {
        return sum + atual
    }, 0)
}

function avarege() {
    return sum(...arguments) / arguments.length
}