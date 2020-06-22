// Criar um programa que calcula a média 
// das notas entre os alunos e envia 
// mensagem do calculo da media

const aluno01 = 'Roger'
const notaaluno01 = 9.8

const aluno02 = 'Diego'
const notaaluno02 = 10 

const aluno03 = 'Fulano'
const notaaluno03= 2

const media = (notaaluno01+ notaaluno02 + notaaluno03) /3 

// se a media for maior que 5, parabenlizar a turma

if (media >5) {

    console.log('A nota foi de $(media). Parabéns')

} else {
    console.log('A media é menor que 5')
}
