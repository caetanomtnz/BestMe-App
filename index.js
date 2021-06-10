

const questions = [
    "Qual é o seu nome?",
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n"+questions[index]+">")
}

ask()
// const respostas
const answers = []

process.stdin.on("data", data => {
// O "on" vai estar atento quando foi inserido dados = data
    answers.push(data.toString().trim())
// fez push de answers, transformou em String, e trim pra remover espaços
   if(answers.length < questions.length){
// se respostas for menor do que questões
       ask(answers.length)
//  carregue outra pergunta
   }else{
// senão
   process.exit()
// fechar processo
  }
})
  

process.on('exit', () => {
    console.log(`
    Beleza
    
    O que você aprendeu hoje foi:
    ${answers[0]}


    O que te aborecei e você poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz foi:
    ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje

    Volte amanhã para novas reflexões
    `)
})






