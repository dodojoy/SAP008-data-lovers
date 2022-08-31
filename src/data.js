export const filterTagOrName = (data, requirement, filterType) => {
  const filtro = (filterType==='tags') ? data.filter(champion => champion.tags.includes(requirement))
  : data.filter(champName => champName.name.includes(requirement))
  return filtro;
};

export const filterDataByDifficulty = (data, requirement) => {
  const filtro = data.filter(champion => {
    const difficulty = champion.info.difficulty;
    const baixo = (requirement === 'baixo' && difficulty < 5);
    const medio = (requirement === 'medio' && difficulty > 4 && difficulty < 8);
    const alto = (requirement === 'alto' && difficulty > 7);
    const hasDifficulty = baixo || medio || alto;
    
    return hasDifficulty;
  })
  return filtro;
};

export const sortData = (data) => data.sort((champ1, champ2) => {
  if (champ1.name > champ2.name) {
    return -1;
  } else if (champ1.name < champ2.name) {
    return 1;
  }
});

export const computerStats = (tags, champArray) => {
  let infoType = '';
  if (tags === 'Marksman' || tags === 'Assassin' || tags === 'Fighter') {
    infoType = 'attack';
  } else if (tags === 'Support' || tags === 'Tank') {
    infoType = 'defense';
  } else {
    infoType = 'magic';
  }
  
  const valores = champArray.map((champ) => champ.info[infoType]);
  const soma = valores.reduce(function(soma, i){
    return soma + i;
  })
  const media = (soma/champArray.length).toFixed(1);
  
  return {
    type: infoType,
    media: media
  };
};

