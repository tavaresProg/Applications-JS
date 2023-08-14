const container = document.querySelector('.container');
const button = document.querySelector('.input-field button');
const input = document.querySelector('.input-field input');
const qrCode = document.querySelector('#qr-code img');


function generateQrCode() {
    const value = input.value;
    if (!value) return;
    button.innerText = 'Gerando código...';
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    qrCode.addEventListener('load', () => {
        container.classList.add('active');
        button.innerText = 'QR Code gerado!';
    });
}

button.addEventListener('click', () => {
    generateQrCode();
});

input.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        generateQrCode();
    }
});

input.addEventListener('keyup', () => {
    if (!input.value) {
        container.classList.remove('active');
        button.innerText = 'Gerar QR Code';
    }
})