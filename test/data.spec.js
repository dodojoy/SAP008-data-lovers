import { sortData, computerStats} from '../src/data.js';


// describe('filterData', () => {
//   it('Deveria ser uma constante', () => {
//     expect(typeof filtroDoSelect).toBe('function');
//   });


//   it('Deveria retornar os campeões que contém a tag Suporte', () => {
//     const dados = [
//       {
//         name: "Nami",
//         tags: [
//           "Support",
//           "Mage"
//         ]
//       },
//       {
//         name: "Blitzcrank",
//         tags: [
//           "Tank",
//           "Fighter"
//         ]
//       },
//       {
//         name: "Taric",
//         tags: [
//           "Support",
//           "Fighter"
//         ]
//       }
//     ];
    
//     const resultado = [
//       {
//         tags: [
//           "Support",
//           "Mage"
//         ],
//         name: "Nami"
//       },
//       {
//         name: "Taric",
//         tags: [
//           "Support",
//           "Fighter"
//         ]
//       }
//     ];
//     expect(filterData(dados, "Support")).toStrictEqual(resultado);
//   });
// });

describe('sortData', () => {
  it('Deveria ser uma função', () => {
    expect(typeof sortData).toBe('function');
  });


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
  it('Deveria retornar a média do ataque, magia ou defesa do campeão de acordo com sua função', () => {
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