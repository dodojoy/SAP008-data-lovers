import {computerStats, filterDataByTag, filterDataByDifficulty, sortData} from "./data.js";
import data from './data/lol/lol.js';

let arrayCampeoes = Object.values(data.data);

const btnSobre = document.querySelector('#btn-sobre');
const main = document.querySelector("#main-content");
const modal = document.querySelector("#modal");
const cards = document.querySelector('#cards');
const selectTag = document.querySelector('#funcao');
const selectAZ = document.querySelector('#sort');

btnSobre.addEventListener('click', function(){
    modal.style.display = 'flex';
    main.style.display = 'none';
    cards.style.display = 'none';
})

const btnVoltar = document.querySelector('#btn-voltar');
btnVoltar.addEventListener('click', function(){
    main.style.display = 'flex';
    modal.style.display = 'none';
    cards.style.display = 'none';
})

const voltarFooter = document.querySelector('#voltar-footer');
voltarFooter.addEventListener('click', function(){
    modal.style.display = 'flex';
    main.style.display = 'none';
    cards.style.display = 'none'
})

const btnIniciar = document.querySelector('#iniciar');
btnIniciar.addEventListener('click', function(){
    main.style.display = 'none';
    cards.style.display = 'flex';
})

function printCards(lol) {
    document.getElementById('cardzinho').innerHTML = lol.map((key) => 
        `  
            <div class="card-container">
                <div class="card-front">
                    <img src="${key.splash}">
                    <h2>${key.name}</h2>
                </div>
                <div class="card-hover">
                    <ul>
                        <li>ATAQUE: ${key.info.attack}</li>
                        <li>DEFESA: ${key.info.defense}</li>
                        <li>MAGIA: ${key.info.magic}</li>
                        <li>DIFICULDADE: ${key.info.difficulty}</li>
                    </ul>
                    <h2>${key.name}</h2>
            </div>
        `    
    ).join('')
}

window.addEventListener('load', () => printCards(arrayCampeoes));

selectTag.addEventListener('change', function() {
    const valorSelecionado = selectTag.value;
    let arrayCampeoesFiltrados = filterDataByTag(arrayCampeoes, valorSelecionado);
    printCards(arrayCampeoesFiltrados)
    const stats = computerStats(valorSelecionado, arrayCampeoesFiltrados);
    const divMedia = document.querySelector('#media');
    divMedia.innerHTML = 'A média de ' + stats.type + ' dos ' + valorSelecionado + ' é de ' + stats.media;
    // if (valorSelecionado === 'Assassin') {
    //     valorSelecionado = 'assassino';
    // } else if (valorSelecionado === 'Marksman') {
    //     divMedia.innerHTML = 'A média de ataque dos atiradores é de '  + stats.media;
    // }
})

const selectDiff = document.querySelector('#dificuldade');
selectDiff.addEventListener('change', function() {
    const diffSelecionado = selectDiff.value;
    const filtrado = filterDataByDifficulty(arrayCampeoes, diffSelecionado);
    printCards(filtrado);
})

selectAZ.addEventListener('change', function() {
    const sortSelecionado = selectAZ.value;
    const ordem = sortData(arrayCampeoes);
    if (sortSelecionado === 'az') {
        printCards(ordem.reverse())
    } else {
        printCards(ordem)
    }
})