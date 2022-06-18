const ctx = document.getElementById('canvas').getContext('2d');
const game = new Game(ctx);

window.onload = () => {
    document.getElementById('startBtn').onclick = () => {
        game.start();
    };
};