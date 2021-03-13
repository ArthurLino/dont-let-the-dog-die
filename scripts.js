const body = document.getElementsByTagName('body')[0]


const initializeButton = document.getElementById('iniciar')

let buttons = document.getElementById('buttonsContainer')

let fomeL = document.getElementById('lblFome')
let sedeL = document.getElementById('lblSede')
let sonoL = document.getElementById('lblSono')

let comeu = 0
let bebeu = 0
let dormiu = 0

const ageButton = document.getElementById('ageButton')
var ageDisplay = document.getElementById('petAge')

const orelhaRight = document.getElementById('orelhaRight')
const orelhaLeft = document.getElementById('orelhaLeft')
const olhoLeft = document.getElementById('olhoLeft')
const olhoRight = document.getElementById('olhoRight') 

const sunOrMoon = document.getElementById('sun_moon')
const tigela = document.getElementById('waterBowl-content')

const Pet = {
    nome : '',
    fome : document.getElementById('Fome'),
    sede : document.getElementById('Sede'),
    sono : document.getElementById('Sono'),
    age : 1,
}

const Botão = {
    Fo : document.getElementById('fomeButton'),
    Se : document.getElementById('sedeButton'),
    So : document.getElementById('sonoButton'),
}

ageDisplay.innerHTML += Pet.age

// -------------------------------------------------------------------------------------------------
// Funções de início de jogo

// window.onload = function getName(){
//     Pet.nome = window.prompt('Qual será o nome do seu Cachorrinho?')
//     if(Pet.nome === ''){
//         window.alert('Digite um nome')
//         document.location.reload();
//     }
//     else if(Pet.nome === null){
//         window.alert('Digite um nome')
//         document.location.reload();
//     }
// }

initializeButton.onclick = function initialize(){
    Pet.fome.value = 50
    Pet.sede.value = 50
    Pet.sono.value = 50

    console.log('------------------------------')
    console.log(`O jogo começou! Não deixe ${Pet.nome} morrer!`)
    console.log(`${Pet.nome} esta com ${Pet.fome.value}% de fome!`) 
    console.log(`${Pet.nome} esta com ${Pet.sede.value}% de sede!`)
    console.log(`${Pet.nome} esta com ${Pet.sono.value}% de sono!`)
    console.log('------------------------------')

    percentages()

    initializeButton.style.display = 'none'
    buttons.style.display = 'flex'
}

// -------------------------------------------------------------------------------------------------
// Funções relativas aos botões principais

function getPetValues(){
    const min = Math.ceil(5)
    const max = Math.floor(12)
    let number = Math.floor(Math.random() * (max - min) + min) 
    return number
}

function percentages(){
    fomeL.innerHTML = `${Pet.fome.value}%`
    sedeL.innerHTML = `${Pet.sede.value}%`
    sonoL.innerHTML = `${Pet.sono.value}%`
}

function nightModeRemove(){
    orelhaLeft.classList.remove('oLSad')
    orelhaRight.classList.remove('oRSad')
    olhoLeft.classList.remove('eSad')
    olhoRight.classList.remove('eSad')
    body.classList.remove('night')
    sunOrMoon.classList.remove('moon')
    ageDisplay.style.color = '#000'
}

function nightModeAdd(){
    orelhaLeft.classList.add('oLSad')
    orelhaRight.classList.add('oRSad')
    olhoLeft.classList.add('eSad')
    olhoRight.classList.add('eSad')
    body.classList.add('night')
    sunOrMoon.classList.add('moon')
    ageDisplay.style.color = '#fff'
}
 

// -------------------------------------------------------------------------------------------------
// Botões principais

Botão.Fo.onclick = function fClick(){
    tigela.classList.add('waterBowl-feed')
    tigela.classList.remove('waterBowl-water')

    console.log(`${Pet.nome} comeu um Pedigree sachê!`)

    Pet.fome.value -= getPetValues();
    Pet.sede.value += getPetValues();
    Pet.sono.value += getPetValues();

    console.log(`Fome: ${Pet.fome.value}| Sede: ${Pet.sede.value}| Sono: ${Pet.sono.value}`)

    percentages()
    itsOver()
    ageButtonAppear()
    nightModeRemove()

    comeu += 1
}

Botão.Se.onclick = function SeClick(){
    tigela.classList.add('waterBowl-water')
    tigela.classList.remove('waterBowl-feed')
    
    console.log(`${Pet.nome} bebeu aguinha geladinha`)

    Pet.fome.value += getPetValues();
    Pet.sede.value -= getPetValues();
    Pet.sono.value += getPetValues();

    console.log(`Fome: ${Pet.fome.value}| Sede: ${Pet.sede.value}| Sono: ${Pet.sono.value}`)

    percentages()
    nightModeRemove()
    itsOver()
    ageButtonAppear()

    bebeu += 1
}

Botão.So.onclick = function SoClick(){
    tigela.classList.remove('waterBowl-water')
    tigela.classList.remove('waterBowl-feed')

    console.log(`${Pet.nome} está a mimir`)

    Pet.fome.value += getPetValues();
    Pet.sede.value += getPetValues();
    Pet.sono.value -= getPetValues();

    console.log(`Fome: ${Pet.fome.value}| Sede: ${Pet.sede.value}| Sono: ${Pet.sono.value}`)

    percentages()
    nightModeAdd()
    itsOver()
    ageButtonAppear()

    dormiu += 1
}

// -------------------------------------------------------------------------------------------------
// Botão da idade

function ageButtonAppear(){
    let i = 5*Pet.age
    if(bebeu + comeu + dormiu == i){
        ageButton.style.display = 'block'
        ageDisplay.style.color = '#ffbb00'
    }
}

ageButton.onclick = function getOlder(){
    Pet.age += 1

    Pet.fome.value -= getPetValues();
    Pet.sede.value -= getPetValues();
    Pet.sono.value -= getPetValues();

    ageDisplay.innerHTML = `Idade: ${Pet.age}`

    console.log(`${Pet.nome} fez ${Pet.age} anos de idade!`)
    console.log(`Fome: ${Pet.fome.value}| Sede: ${Pet.sede.value}| Sono: ${Pet.sono.value}`)

    ageButton.style.display = 'none'
    ageDisplay.style.color = '#000'

    percentages()
    nightModeRemove()
}


// -------------------------------------------------------------------------------------------------
// Funções de fim de jogo

function itsOver(){
    if(Pet.fome.value == 100){
        
        window.alert(`${Pet.nome} morreu de fome! T-T`)
        document.location.reload()
    }
    if(Pet.sede.value == 100){
        window.alert(`${Pet.nome} morreu de sede! T-T`)
        document.location.reload()
    }
    if(Pet.sono.value == 100){
        window.alert(`${Pet.nome} finalmente dormiu! T-T`)
        document.location.reload()
    }
}

// -------------------------------------------------------------------------------------------------
