import {computerStats, filterTagOrName, filterDataByDifficulty, sortData} from "./data.js";
import info from "./translate.js";
import data from './data/lol/lol.js';

let arrayCampeoes = Object.values(data.data);

const btnSobre = document.querySelector('#btn-sobre');
const main = document.querySelector("#main-content");
const modal = document.querySelector("#modal");
const cards = document.querySelector('#cards');
const selectTag = document.querySelector('#funcao');
const selectAZ = document.querySelector('#sort');
const btnVoltar = document.querySelector('#btn-voltar');
const voltarFooter = document.querySelector('#voltar-footer');
const btnIniciar = document.querySelector('#iniciar');
const search = document.querySelector('#findByName');


btnSobre.addEventListener('click', function(){
    modal.style.display = 'flex';
    main.style.display = 'none';
    cards.style.display = 'none';
})

btnVoltar.addEventListener('click', function(){
    main.style.display = 'flex';
    modal.style.display = 'none';
    cards.style.display = 'none';
})

voltarFooter.addEventListener('click', function(){
    modal.style.display = 'flex';
    main.style.display = 'none';
    cards.style.display = 'none'
})

btnIniciar.addEventListener('click', function(){
    main.style.display = 'none';
    cards.style.display = 'flex';
})

function printCards(lol) {
    document.getElementById('allCards').innerHTML = lol.map((key) => 
        `  
            <div class="card-container">
                <div class="card-container-inner">
                    <div id="cardFront" class="card-front">
                        <img src="${key.splash}">
                        <h2>${key.name.toUpperCase()}</h2>
                    </div>
                    <div id="cardBack" class="card-hover">
                        <ul>
                            <li>ATAQUE: ${key.info.attack}</li>
                            <li>DEFESA: ${key.info.defense}</li>
                            <li>MAGIA: ${key.info.magic}</li>
                            <li>DIFICULDADE: ${key.info.difficulty}</li>
                        </ul>
                        <h2>${key.name.toUpperCase()}</h2>
                    </div>
                </div>
            </div>
        `       
    ).join('')
}

window.addEventListener('load', () => printCards(arrayCampeoes));

function mapByType(stats, info, value) {
    if (stats.type == value) {
      return info[value];
    }
}

function mapByTag(valorSelecionado, info, value) {
    if (valorSelecionado === value) {
        return info[value]
    }
}

selectTag.addEventListener('change', function() {
    const valorSelecionado = selectTag.value;
    let arrayCampeoesFiltrados = filterTagOrName(arrayCampeoes, valorSelecionado, 'tags');
    const divMedia = document.querySelector('#media');
    if (valorSelecionado === 'TODAS AS FUNÇÕES') {
        printCards(arrayCampeoes)
        divMedia.style.display = 'none';
    } else {
        printCards(arrayCampeoesFiltrados)
        const stats = computerStats(valorSelecionado, arrayCampeoesFiltrados);
        const result = mapByType(stats, info, stats.type);
        const champTag = mapByTag(valorSelecionado, info, valorSelecionado);
        divMedia.innerHTML = 'A média de ' + result + ' dos ' + champTag + ' é de ' + stats.media;
        divMedia.style.display = 'flex';
    }
})

const selectDiff = document.querySelector('#dificuldade');
selectDiff.addEventListener('change', function() {
    const diffSelecionado = selectDiff.value;
    const filtrado = filterDataByDifficulty(arrayCampeoes, diffSelecionado);
    if (diffSelecionado === 'NÍVEL DE DIFICULDADE'){
        printCards(arrayCampeoes)
    } else {
        printCards(filtrado)
    }
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

search.addEventListener('keyup', function() {
    const searchValue = search.value;
    const firstLetterToUpperCase = searchValue[0].toUpperCase();
    const newValue = firstLetterToUpperCase + searchValue.substring(1).toLowerCase();
    if (searchValue !== undefined) {
        return printCards(filterTagOrName(arrayCampeoes, newValue, 'name'));
    } else {
        return printCards(arrayCampeoes);
    }
})