
function Calculator() {

    this.display = document.querySelector('.display');

    this.addInDisplay = (button) => this.display.value += button.innerText;

    this.clearDisplay = () => this.display.value = ' ';

    this.deleteInput = () => this.display.value = this.display.value.slice(0, -1);

    this.doMath = () => {

        const expression = this.display.value;

        try {
            const result = eval(expression);
            if (!result) {
                alert('Nothing to calculate');
                return;
            }
            this.display.value = result;
        } catch (error) {
            alert('Error');
        }
    };

    this.captureKeypress = () => {
        document.addEventListener('keydown', event => {
            const keyPressed = event.key;
            const validCharacters = /[0-9()+\/*=\-\s]|Backspace|Delete/;
            if (!validCharacters.test(keyPressed)) event.preventDefault();
        });
    };

    this.captureClicks = () => {
        document.addEventListener('click', event => {
            const button = event.target;
            if (button.classList.contains('btn-num')) this.addInDisplay(button);
            if (button.classList.contains('btn-clear')) this.clearDisplay();
            if (button.classList.contains('btn-del')) this.deleteInput();
            if (button.classList.contains('btn-eq')) this.doMath();
        });

        this.captureEnter = () => {
            this.display.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    this.doMath();
                }
            });
        };

    }

    this.start = () => {
        this.captureClicks();
        this.captureKeypress();
        this.captureEnter();
    };

}

const calculator = new Calculator();
calculator.start();



