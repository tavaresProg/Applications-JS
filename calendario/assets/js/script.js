// Solução 1

// function myScope() {

//     const date = new Date();
//     const body = document.querySelector('.container h1');
//     const formatedDate = `${getDayOfTheWeek(date.getDay())}, ${date.getDate()} de ${getMonth(date.getMonth())} de ${date.getFullYear()} <br> ${formatTime(date)}`;
//     body.innerHTML = formatedDate;

//     function getDayOfTheWeek(date) {

//         let dayOfTheWeek;

//         switch (date) {
//             case 0:
//                 dayOfTheWeek = 'Domingo';
//                 return dayOfTheWeek;
//             case 1:
//                 dayOfTheWeek = 'Segunda-feira';
//                 return dayOfTheWeek;
//             case 2:
//                 dayOfTheWeek = 'Terça-feira';
//                 return dayOfTheWeek;
//             case 3:
//                 dayOfTheWeek = 'Quarta-feira';
//                 return dayOfTheWeek;
//             case 4:
//                 dayOfTheWeek = 'Quinta-feira';
//                 return dayOfTheWeek;
//             case 5:
//                 dayOfTheWeek = 'Sexta-feira';
//                 return dayOfTheWeek;
//             case 6:
//                 dayOfTheWeek = 'Sábado';
//                 return dayOfTheWeek;
//             default:
//                 dayOfTheWeek = '';
//                 return dayOfTheWeek;
//         }
//     }

//     function getMonth(date) {
//         let month;

//         switch (date) {
//             case 0:
//                 month = 'Janeiro';
//                 return month;
//             case 1:
//                 month = 'Fevereiro';
//                 return month;
//             case 2:
//                 month = 'Março';
//                 return month;
//             case 3:
//                 month = 'Abril';
//                 return month;
//             case 4:
//                 month = 'Maio';
//                 return month;
//             case 5:
//                 month = 'Junho';
//                 return month;
//             case 6:
//                 month = 'Julho';
//                 return month;
//             case 7:
//                 month = 'Agosto';
//                 return month;
//             case 8:
//                 month = 'Setembro';
//                 return month;
//             case 9:
//                 month = 'Outubro';
//                 return month;
//             case 10:
//                 month = 'Novembro';
//                 return month;
//             case 11:
//                 month = 'Dezembro';
//                 return month;
//             default:
//                 month = '';
//                 return month;
//         }
//     }

//     function formatTime(date) {

//         const hour = zeroOnLeft(date.getHours());
//         const min = zeroOnLeft(date.getMinutes());
//         const sec = zeroOnLeft(date.getSeconds());
//         return `${hour}:${min}:${sec}`;

//     }

//     function zeroOnLeft(number) {
//         return number >= 10 ? number : `0${num}`;
//     }

// }

// setInterval(myScope, 1000);

// Solução 2 sem switch

// function myScope() {

//     const date = new Date();
//     const body = document.querySelector('.container h1');
//     const formatedDate = `${getDayOfTheWeek(date.getDay())}, ${date.getDate()} de ${getMonth(date.getMonth())} de ${date.getFullYear()} <br> ${formatTime(date)}`;
//     body.innerHTML = formatedDate;

//     function getDayOfTheWeek(date) {

//         const week = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
//         return week[date];
//     }

//     function getMonth(date) {
//         const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
//         return months[date];
//     }

//     function formatTime(date) {

//         const hour = zeroOnLeft(date.getHours());
//         const min = zeroOnLeft(date.getMinutes());
//         const sec = zeroOnLeft(date.getSeconds());
//         return `${hour}:${min}:${sec}`;

//     }

//     function zeroOnLeft(number) {
//         return number >= 10 ? number : `0${num}`;
//     }

// }

// setInterval(myScope, 1000);

//Solução 3

function startTimer() {
    const date = new Date();
    const h1 = document.querySelector('.container h1');
    h1.innerHTML = date.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'medium' });
}

setInterval(startTimer, 1000);

