function meuEscopo() {

    const formulario = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function calculaIMC(evento) {
        evento.preventDefault();
        const peso = formulario.querySelector('#peso');
        const altura = formulario.querySelector('#altura');

        if (peso.value <= 0 || undefined || altura.value <= 0 || undefined) {
            resultado.innerHTML = `<p style="background: orange">Preencha ambos os campos corretamente</p>`;
        } else {

            const imc = peso.value / (altura.value * altura.value);
            let msg;
            let msgColor;

            if (imc < 18.5) {
                msg = '(Abaixo do peso)';
                msgColor = 'style="background: red"';
            } else if (imc >= 18.5 && imc <= 24.9) {
                msg = '(Peso normal)';
                msgColor = 'style="background: green"';
            } else if (imc >= 25 && imc <= 29.9) {
                msg = '(Sobrepeso)';
                msgColor = 'style="background: orange"';
            } else if (imc >= 30 && imc <= 34.9) {
                msg = '(Obesidade grau 1)';
                msgColor = 'style="background: red"';
            } else if (imc >= 35 && imc <= 39.9) {
                msg = '(Obesidade grau 2)';
                msgColor = 'style="background: red"';
            } else if (imc >= 40) {
                msg = '(Obesidade grau 3)';
                msgColor = 'style="background: red"';
            }

            resultado.innerHTML = `<p ${msgColor} >Seu imc é: ${imc.toFixed(2)} ${msg}</p>`;
        }
    }

    formulario.addEventListener('submit', calculaIMC);
}

meuEscopo();
