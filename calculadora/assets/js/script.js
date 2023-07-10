function criaCalculadora() {
    return {

        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        realizaConta() {
            //eval é uma função perigosa que tenta executar uma string
            //como javascript
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = conta;
            } catch (e) {
                alert('Conta inválida');
                return;
            }

        },

        delOne() {
            //slice(0, -1) > sempre é o tamanho da string -1
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.delOne();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();