let number = 0;
let count = 0;

document.addEventListener('DOMContentLoaded', function() {
    number = Math.floor(Math.random() * 100);
    let guessed = null;
    let result = document.createElement('p');
    let tips = document.createElement('p');
    let newGame = document.createElement('button');
    newGame.textContent = '开始新游戏';
    const input = document.querySelector('input');
    const btn_ok = document.querySelector('#btn_ok');
    btn_ok.addEventListener('click', function() {
        count++;
        if (count > 10) {
            btn_ok.disabled = true;
            result.textContent = 'GAME OVER';
            document.body.removeChild(tips);
            newGame.addEventListener('click', function() {
                btn_ok.disabled = false;
                number = Math.floor(Math.random() * 100);
                count = 0;
                document.body.removeChild(guessed);
                guessed = null;
                document.body.removeChild(result);
                result.textContent = '';
                document.body.removeChild(tips);
                tips.textContent = '';
                document.body.removeChild(newGame);
            });
            document.body.appendChild(newGame);
            return
        }
        let value = Number(input.value);
        input.value = '';

        if (guessed === null) {
            guessed = document.createElement('p');
            guessed.textContent = '上次猜的数:';
            document.body.appendChild(guessed);
            document.body.appendChild(result);
            document.body.appendChild(tips);
        }

        guessed.textContent = guessed.textContent + ' ' + value;

        if (value === number) {
            btn_ok.disabled = true;
            result.textContent = '恭喜你！猜对了！';
            document.body.removeChild(tips);
            newGame.addEventListener('click', function() {
                btn_ok.disabled = false;
                number = Math.floor(Math.random() * 100);
                count = 0;
                document.body.removeChild(guessed);
                guessed = null;
                document.body.removeChild(result);
                result.textContent = '';
                document.body.removeChild(tips);
                tips.textContent = '';
                document.body.removeChild(newGame);
            });

            
            document.body.appendChild(newGame);
            return
        }

        result.textContent = '你猜错了！';
        if (value === NaN || value < number) {
            tips.textContent = '你猜低了'
        } else {
            tips.textContent = '你猜高了'
        }
    });
});