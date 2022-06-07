const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

var width;
var height;

render = () => {

    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

    window.requestAnimationFrame(render);
}

(init = () => {
    width = 700;
    height = 700;

    canvas.width = width;
    canvas.height = height;

    window.requestAnimationFrame(render);
})();

