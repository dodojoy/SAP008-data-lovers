import {filterTagOrName, filterDataByDifficulty, sortData, computerStats} from '../src/data.js';


describe('filterTagOrName', () => {
  it('Deveria retornar os campeões que contém a tag Suporte', () => {
    const dados = [
      {
        name: "Nami",
        tags: [
          "Support",
          "Mage"
        ]
      },
      {
        name: "Blitzcrank",
        tags: [
          "Tank",
          "Fighter"
        ]
      },
      {
        name: "Taric",
        tags: [
          "Support",
          "Fighter"
        ]
      }
    ];
    
    const resultado = [
      {
        tags: [
          "Support",
          "Mage"
        ],
        name: "Nami"
      },
      {
        name: "Taric",
        tags: [
          "Support",
          "Fighter"
        ]
      }
    ];
    expect(filterTagOrName(dados, "Support", 'tags')).toStrictEqual(resultado);
  });

  it('Deveria retornar os campeões com as letras digitadas', () => {
    const dados = [
      {
        name: "Nami",
        tags: [
          "Support",
          "Mage"
        ]
      },
      {
        name: "Blitzcrank",
        tags: [
          "Tank",
          "Fighter"
        ]
      },
      {
        name: "Taric",
        tags: [
          "Support",
          "Fighter"
        ]
      }
    ];
    
    const resultado = [
      {
        tags: [
          "Support",
          "Mage"
        ],
        name: "Nami"
      },
    ];
    expect(filterTagOrName(dados, 'Na', 'name')).toStrictEqual(resultado);
  });
});

describe('filterDataByDifficulty', () => {
  it('Deveria retornar os campeões dificuldade baixa', () => {
    const dados = [
      {
        name: "Nami",
        tags: [
          "Support",
          "Mage"
        ],
        info: {
          attack: 8,
          defense: 4,
          magic: 3,
          difficulty: 4
        }
      },
      {
        name: "Blitzcrank",
        tags: [
          "Tank",
          "Fighter"
        ],
        info: {
          attack: 3,
          defense: 4,
          magic: 8,
          difficulty: 5
        }
      },
      {
        name: "Taric",
        tags: [
          "Support",
          "Fighter"
        ],
        info: {
          attack: 3,
          defense: 4,
          magic: 8,
          difficulty: 5
        }
      }];
    
    const resultado = [{
      name: "Nami",
      tags: [
        "Support",
        "Mage"
      ],
      info: {
        attack: 8,
        defense: 4,
        magic: 3,
        difficulty: 4
      }
    }];
    expect(filterDataByDifficulty(dados, 'baixo')).toStrictEqual(resultado);
  })

  it('Deveria retornar os campeões com dificuldade media', () => {
    const dados = [
      {
        name: "Nami",
        tags: [
          "Support",
          "Mage"
        ],
        info: {
          attack: 8,
          defense: 4,
          magic: 3,
          difficulty: 5
        }
      },
      {
        name: "Blitzcrank",
        tags: [
          "Tank",
          "Fighter"
        ],
        info: {
          attack: 3,
          defense: 4,
          magic: 8,
          difficulty: 6
        }
      },
      {
        name: "Taric",
        tags: [
          "Support",
          "Fighter"
        ],
        info: {
          attack: 3,
          defense: 4,
          magic: 8,
          difficulty: 10
        }
      }];
    
    const resultado = [{
      name: "Nami",
      tags: [
        "Support",
        "Mage"
      ],
      info: {
        attack: 8,
        defense: 4,
        magic: 3,
        difficulty: 5
      }
    },
    {
      name: "Blitzcrank",
      tags: [
        "Tank",
        "Fighter"
      ],
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 6
      }
    }];
    expect(filterDataByDifficulty(dados, 'medio')).toStrictEqual(resultado);
  })

  it('Deveria retornar os campeões com dificuldade alta', () => {
    const dados = [
      {
        name: "Nami",
        tags: [
          "Support",
          "Mage"
        ],
        info: {
          attack: 8,
          defense: 4,
          magic: 3,
          difficulty: 5
        }
      },
      {
        name: "Blitzcrank",
        tags: [
          "Tank",
          "Fighter"
        ],
        info: {
          attack: 3,
          defense: 4,
          magic: 8,
          difficulty: 9
        }
      },
      {
        name: "Taric",
        tags: [
          "Support",
          "Fighter"
        ],
        info: {
          attack: 3,
          defense: 4,
          magic: 8,
          difficulty: 10
        }
      }];
    
    const resultado = [{
      name: "Blitzcrank",
      tags: [
        "Tank",
        "Fighter"
      ],
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 9
      }
    },
    {
      name: "Taric",
      tags: [
        "Support",
        "Fighter"
      ],
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 10
      }
    }];
    expect(filterDataByDifficulty(dados, 'alto')).toStrictEqual(resultado);
  })
})

describe('sortData', () => {
  it('Deveria retornar os campeões em ordem decrescente', () => {
    const dados = [
      {
        name: "Nami",
        
      },
      {
        name: "Blitzcrank",
       
      },
      {
        name: "Taric",
        
      }
    ];
    
    const resultado = [
      {
        
        name: "Taric"
      },
      {
        name: "Nami",
        
      },
      {
        name: "Blitzcrank"
      }
    ];
    expect(sortData(dados)).toStrictEqual(resultado)
  });

})

describe ('computerStats', () => {
  it('Deveria retornar a média de defesa dos suportes', () => {
    const dados = 
    [
      {
        name: "Nami",
        tags: [
          "Support",
          "Mage"
        ],
        info: {
          attack: 8,
          defense: 4,
          magic: 3,
          difficulty: 4
        }
      },
      {
        name: "Blitzcrank",
        tags: [
          "Tank",
          "Fighter"
        ],
        info: {
          attack: 3,
          defense: 4,
          magic: 8,
          difficulty: 5
        }
      },
      {
        name: "Taric",
        tags: [
          "Support",
          "Fighter"
        ],
        info: {
          attack: 3,
          defense: 4,
          magic: 8,
          difficulty: 5
        }
      }
    ];

    const resultado =
      {
        type: 'defense',
        media: '4.0'
      }
    ;
    expect(computerStats('Support', dados)).toStrictEqual(resultado);

  });
})