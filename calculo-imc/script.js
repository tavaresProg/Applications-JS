function meuEscopo() {

    const formulario = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function calculaIMC(evento) {
        evento.preventDefault();
        const peso = formulario.querySelector('#peso');
        const altura = formulario.querySelector('#altura');
        const imc = peso.value / (altura.value * altura.value);
        let msg;
        let msgColor;
        if(imc < 18.5){
            msg = '(Abaixo do peso)';
            msgColor = 'style="background: red"';
        } else if (imc >= 18.5 && imc <= 24.9) {
            msg = '(Peso normal)';
            msgColor = 'style="background: green"';
        }

        resultado.innerHTML = `<p ${msgColor} >Seu imc é: ${imc.toFixed(2)} ${msg}</p>`;
    }

    formulario.addEventListener('submit', calculaIMC);

}

meuEscopo();