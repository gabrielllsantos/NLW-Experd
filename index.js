const perguntas = [
    {
      pergunta: "Qual processo geomorfológico é responsável pela formação de vales profundos e estreitos?",
      respostas: [
        "a) Erosão eólica",
        "b) Erosão glacial",
        "c) Erosão fluvial",
      ],
      correta: 2    
    },
    {
      pergunta: "Que tipo de solo é caracterizado por sua formação em regiões áridas e semiáridas, com pouca vegetação e alta taxa de evaporação?",
      respostas: [
        "a) Latossolo",
        "b) Podzol",
        "c) Solo aridisol",
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes agentes geomorfológicos é mais associado à formação de dunas?",
      respostas: [
        "a) Água",
        "b) Vento",
        "c) Gelo",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o processo geomorfológico responsável pela formação de cavernas em rochas calcárias?",
      respostas: [
        "a) Dissolução química",
        "b) Erosão glacial",
        "c) Intemperismo físico",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um morro testemunho em termos geomorfológicos?",
      respostas: [
        "a) Um morro remanescente de uma área mais erodida, cercada por erosão ao redor.",
        "b) Um tipo de montanha formada por movimentos tectônicos recentes.",
        "c)Um morro que se forma devido à ação do vento em áreas desérticas.",
      ],
      correta: 0 
    },
  ];
  
  const quiz = document.querySelector('#quizg')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizGeo = template.content.cloneNode(true)
    quizGeo.querySelector('h4').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizGeo.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)  
        }
      
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
      }
      quizGeo.querySelector('dl').appendChild(dt)
    }
    
    quizGeo.querySelector('dl dt').remove()
    
    //coloca a pergunta na tela
    quiz.appendChild(quizGeo)
  
  }