var arrayPlays = []
var players = document.querySelector('input.main__input__name-of-player')
var resultList = document.querySelector('h2.main__list__result-list')
var resultTeamA = document.querySelector('h2.main__result__team-a__result-a')
var resultTeamB = document.querySelector('h2.main__result__team-b__result-b')

function add(){
    if(players.value == ''){
        alert(`Campos em branco não são permitidos!!`)
        return
    }
    
    arrayPlays.push(players.value)
    players.value = ''
}

function list(){
    if(arrayPlays == 0){
        alert(`Não há nada para ser listado!\nAdicione, no mínimo, um nome.`)
        return
    }
    
    resultList.innerHTML = ''

    for(var i=0;i<arrayPlays.length;i++){
        resultList.innerHTML += `O jogador ${arrayPlays[i]} foi adicionado!<br>`
    }    
}

function clean(){
    arrayPlays.splice(0, arrayPlays.length)
    resultList.innerHTML = ''
}

function generateTeams(){
    const result = []

    while(arrayPlays.length){
        const index = Math.floor(Math.random() * arrayPlays.length - 1);    
        const [nome] = arrayPlays.splice(index, 1);    
        result.push(nome);
    }

    for(var i = 0; i<5; i++){
        resultTeamA.innerHTML += `O ${i+1}º Jogador é: ${result[i]}<br>`
    }

    for(var i = 5; i<10; i++){
        resultTeamB.innerHTML += `O ${i+1}º Jogador é: ${result[i]}<br>`
    }
}

/*const nomes = ['Giovanne', 'Erikys', 'Lucas', 'Natanael', 'Vania', 'Luana', 'Maria', 'Jhonatan', 'Carlos', 'Edleine']

const result = [];

while (nomes.length){

    const index = Math.floor(Math.random() * nomes.length - 1);

    const [nome] = nomes.splice(index, 1);

    result.push(nome);
}

console.log("TIME A")

for(var i = 0; i<5; i++){
    console.log(`O ${i+1}º Jogador é: ${result[i]}`)
}

console.log("TIME B")
for(var i = 5; i<10; i++){
    console.log(`O ${i+1}º Jogador é: ${result[i]}`)
}
*/

