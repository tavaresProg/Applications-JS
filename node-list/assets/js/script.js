//objetivo colocar a cor de fundo do body como cor de fundo
//dos parágrafos
//colocar a cor do texto do parágrafo de branco

const divDosParagrafos = document.querySelector('.paragrafos');
const paragrafos = divDosParagrafos.querySelectorAll('p');
const estilosDoBody = getComputedStyle(document.body);
const corDeFundo = estilosDoBody.backgroundColor;
console.log(corDeFundo);

for (let p of paragrafos) {
   p.style.backgroundColor = corDeFundo;
   p.style.color = 'white';
}

