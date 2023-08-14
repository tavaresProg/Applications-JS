const inputDoNumero = document.querySelector('#number');
const InputDoMultiplicador = document.querySelector('#multiplicator');
const formulario = document.querySelector('#multiplication-form');
const campoDeOperacoes = document.querySelector('#multiplication-operations');
const text = document.querySelector('#multiplication-operations p');
const multiplicationTitle = document.querySelector('#multiplication-title span');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const number = inputDoNumero.value;
    const multiplicator = InputDoMultiplicador.value;
    if (!multiplicator || !number) return;
    createTable(number, multiplicator);
});

const createTable = (number, multiplicator) => {

    campoDeOperacoes.innerHTML = '';
    multiplicationTitle.innerText = number;

    for (let i = 1; i <= multiplicator; i++) {

        const result = number * i;

        const template =
        `<div class='row'>
            <div class='operation'>${number} x ${i} = </div>
            <div class='result'>${result}</div>
         </div>`;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, 'text/html');
        const row = htmlTemplate.querySelector('.row');
        campoDeOperacoes.appendChild(row);


        // const row = document.createElement('div');
        // row.classList.add('row');

        // campoDeOperacoes.appendChild(row);

        // const operation = document.createElement('div');
        // operation.classList.add('operation');
        // operation.innerText = `${number} * ${i} =`;

        // const result = document.createElement('div');
        // result.classList.add('result');
        // result.innerText = number * i;

        // row.appendChild(operation);
        // row.appendChild(result);
        // campoDeOperacoes.appendChild(row);
    }
}