const notaFinal = 6
const faltas = 2
const advertencias = 0

if (notaFinal < 7 && faltas > 4) {
    console.log('REPORVADO, boas festas!')
}   else {
    console.log('não foi reprovado por falta')
}

if (faltas >= 2 && !advertencias) { //o valor 0 é considerado falsy, então sem a ! para fazer a dupla negação do valor 0 da advertência,
                                    //ficaria faltas = true e advertências = false, true + false = false
                                    //aluno não receberia o bônus, mesmo tendo as condições certas para receber
    console.log('recebeu bônus')
}   else {
    console.log('não recebeu bônus')
}