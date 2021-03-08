let number = 0;
let count = 0;

const input = document.querySelector('input');
const confirm = document.querySelector('#confirm');

const last_guess = document.createElement('p');
const last_result = document.createElement('p');
const last_hint = document.createElement('p');
const new_game = document.createElement('button');

function init_game() {
    number = Math.floor(Math.random() * 100);
    count = 0;
    last_guess.textContent = '上次猜的数:';
    new_game.textContent = '开始新游戏';
    // 添加click监听事件只需要做一次，重复添加会引入bug
    new_game.addEventListener('click', function() {
        confirm.disabled = false;
        reset_game();
    });
}

function reset_game() {
    number = Math.floor(Math.random() * 100);
    count = 0;

    document.body.removeChild(last_guess);
    document.body.removeChild(last_result);
    document.body.removeChild(new_game);
    last_guess.textContent = '上次猜的数:';
    last_result.textContent = '';
    last_hint.textContent = '';
}

function check_guess() {
    if (count === 0) {
        document.body.appendChild(last_guess);
        document.body.appendChild(last_result);
        document.body.appendChild(last_hint);
    }

    const value = Number(input.value);
    last_guess.textContent += ' ' + value;
    input.value = '';

    if (value === number) {
        game_end('恭喜你！猜对了！');
        return
    }

    last_result.textContent = '你猜错了！';
    if (value === NaN || value < number) {
        last_hint.textContent = '你猜低了'
    } else {
        last_hint.textContent = '你猜高了'
    }

    if (++count === 10) {
        game_end('GAME OVER');
        return
    }
}

function game_end(result) {
    last_result.textContent = result;
    confirm.disabled = true;
    document.body.removeChild(last_hint);
    document.body.appendChild(new_game);
}

init_game();
confirm.addEventListener('click', check_guess);