console.log("Bem vindo jogador!, Escolha seu nome de herói :")
let nomeJogador = "Isabelle"
console.log(nomeJogador)

console.log("O Herói de nome " +  nomeJogador   + " está no nível de:") 

let ExperienciaXp = 8.590

switch (true){
    case ExperienciaXp <= 1.000:
    console.log("Ferro")
    break

    case ExperienciaXp >= 1.001 && ExperienciaXp < 2.000:
    console.log("Bronze")
    break

    case ExperienciaXp >= 2.001 && ExperienciaXp < 5.000:
    console.log("Prata")
    break

    case ExperienciaXp >= 5.001 && ExperienciaXp < 7.000:
    console.log("Ouro")
    break

    case ExperienciaXp >= 7.001 && ExperienciaXp < 8.000:
    console.log("Platina")
    break

    case ExperienciaXp >= 8.001 && ExperienciaXp < 9.000:
    console.log("Ascendente")
    break

    case ExperienciaXp >= 9.001 && ExperienciaXp < 10.000:
    console.log("Imortal")
    break

    case ExperienciaXp >= 10.001: 
    console.log("Radiante")
    break
    
}


