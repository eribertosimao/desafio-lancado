let nomeHeroi = "Avatar"
let valorXP = 0
let nivel = "Ferro"

if (valorXP < 1000) {
    nivel = "Ferro"
} else if (valorXP >= 1001 && xp <= 2000) {
    nivel = "Bronze"
} else if (valorXP >= 2001 && xp <= 5000) {
    nivel = "Prata"
} else if (valorXP >= 6001 && xp <= 7000) {
    nivel = "Ouro"
} else if (valorXP >= 7001 && xp <= 8000) {
    nivel = "Platina"
} else if (valorXP >= 8001 && xp <= 9000) {
    nivel = "Ascendente"
} else if (valorXP >= 9001 && xp <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel)
