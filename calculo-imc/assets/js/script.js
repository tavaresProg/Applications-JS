function myScope() {

    const form = document.querySelector('.form');
    const result = document.querySelector('.resultado');
    form.addEventListener('submit', calcIMC);

    function calcIMC(event) {

        event.preventDefault();

        const inputPeso = form.querySelector('#peso');
        const inputAltura = form.querySelector('#altura');

        const weigth = Number(inputPeso.value);
        const heigth = Number(inputAltura.value);



        if (!weigth || weigth <= 0) {
            result.innerHTML = `<p>Peso inválido!</p>`;
            return;
        }

        if (!heigth || heigth <= 0) {
            result.innerHTML = `<p>Altura inválida!</p>`;
            return;
        }

        function resultIMC(weigth, heigth) {
            const imc = weigth / heigth ** 2;
            return imc.toFixed(2);
        }

        function getMessage(imc) {

            const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

            if (imc >= 39.9) return level[5];
            if (imc >= 34.9) return level[4];
            if (imc >= 29.9) return level[3];
            if (imc >= 24.9) return level[2];
            if (imc >= 18.5) return level[1];
            if (imc < 18.5) return level[0];
        }

        function pickColor(msg) {
            if (msg === 'Peso normal') return 'green';
            if (msg === 'Sobrepeso') return 'orange';
            else return 'red';
        }

        const imc = resultIMC(weigth, heigth);
        const msg = getMessage(imc);
        const color = pickColor(msg);
        result.innerHTML = ` <p style="background: ${color};">Seu imc é: ${imc} (${msg})</p>`;
    }
}

myScope();

