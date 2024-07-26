//arrow-function também é uma expressão de função

const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return true
    } else {
        return false
    }
}


// const exibeNome = (nome) => {
//     return nome
// }
// abaixo a versão reduzida usado para funções curtas e callbacks

const exibeNome = (nome) => nome

console.log(estudanteReprovou(6, 5))
console.log(estudanteReprovou(10, 2))
console.log(exibeNome('Caroline'))