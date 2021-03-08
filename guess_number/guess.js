var number = 0;
var guess_history = [];
document.addEventListener('DOMContentLoaded', function() {
    number = Math.random();
    let guessed = null;
    
    const input = document.querySelector('input');
    const btn_ok = document.querySelector('#btn_ok');
    btn_ok.addEventListener('click', function() {
        if (guessed === null) {
            guessed = document.createElement('p');
            guessed.textContent = '上次猜的数:';
            document.body.appendChild(guessed);
        }

        let value = Number(input.value);
        guessed.textContent = guessed.textContent + ' ' + value;
    });
});