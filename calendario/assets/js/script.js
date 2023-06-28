function myScope() {

    const date = new Date();

    const dataBrasil = formataData(date);
    const diaSemana = date.getDay();
    const diaSemanaTexto = getDiaDaSemana(diaSemana);


    const calendar = document.querySelector('.container');
    calendar.innerHTML = `<h1>${diaSemanaTexto}, ${dataBrasil}</h1>`;

    function zeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`;
    }

    function formataData(data) {

        const dia = zeroAEsquerda(data.getDate());
        const ano = zeroAEsquerda(data.getFullYear());
        const mes = getMes(data.getMonth());
        const hora = zeroAEsquerda(data.getHours());
        const min = zeroAEsquerda(data.getMinutes());
        const sec = zeroAEsquerda(data.getSeconds());

        console.log(mes);

        return `${dia} de ${mes} de ${ano}<br>${hora}:${min}:${sec}`;
    }

    function getDiaDaSemana(data) {

        let diaDaSemana;

        switch (data) {
            case 0:
                diaDaSemana = 'Domingo';
                return diaDaSemana;
            case 1:
                diaDaSemana = 'Segunda-feira';
                return diaDaSemana;
            case 2:
                diaDaSemana = 'Terça-feira';
                return diaDaSemana;
            case 3:
                diaDaSemana = 'Quarta-feira';
                return diaDaSemana;
            case 4:
                diaDaSemana = 'Quinta-feira';
                return diaDaSemana;
            case 5:
                diaDaSemana = 'Sexta-feira';
                return diaDaSemana;
            case 6:
                diaDaSemana = 'Sábado';
                return diaDaSemana;
            default:
                diaDaSemana = '';
                return diaDaSemana;
        }
    }

    function getMes(data) {
        let mes;

        switch (data) {
            case 0:
                mes = 'Janeiro';
                return mes;
            case 1:
                mes = 'Fevereiro';
                return mes;
            case 2:
                mes = 'Março';
                return mes;
            case 3:
                mes = 'Abril';
                return mes;
            case 4:
                mes = 'Maio';
                return mes;
            case 5:
                mes = 'Junho';
                return mes;
            case 6:
                mes = 'Julho';
                return mes;
            case 7:
                mes = 'Agosto';
                return mes;
            case 8:
                mes = 'Setembro';
                return mes;
            case 9:
                mes = 'Outubro';
                return mes;
            case 10:
                mes = 'Novembro';
                return mes;
            case 11:
                mes = 'Dezembro';
                return mes;
            default:
                mes = '';
                return mes;
        }
    }

}

setInterval(myScope, 1000);