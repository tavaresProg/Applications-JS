function myScope() {

    const date = new Date();
    const dataBrasil = formataData(date);

    function zeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`;
    }

    function formataData(data) {
        const dia = zeroAEsquerda(data.getDate());
        const mes = zeroAEsquerda(data.getMonth() + 1);
        const ano = zeroAEsquerda(data.getFullYear());
        const hora = zeroAEsquerda(data.getHours());
        const min = zeroAEsquerda(data.getMinutes());
        const sec = zeroAEsquerda(data.getSeconds());

        return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
    }

    const calendar = document.querySelector('#calendario');
    calendar.innerHTML = `${dataBrasil.slice(0,10)}`;

    const tempo = document.querySelector('#tempo');
    tempo.innerHTML = `${dataBrasil.slice(10)}`;

}

setInterval(myScope, 1000);