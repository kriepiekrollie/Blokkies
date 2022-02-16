const c = document.getElementById("cnvs");
const ctx = c.getContext('2d');
const sqrt3 = Math.sqrt(3);
const side_length = 80;
const dist_between_blocks = 10;
width = 2000;
height = 1000;
mx = Math.sqrt(width*width + height*height);
function clear() {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0,2000,2000);
}

function draw(block) {
    sY1 = -block.z + (block.x + block.y) / 2;
    sX1 = (block.x - block.y) * sqrt3 / 2;
    sY2 = -block.z + (block.x + side_length + block.y) / 2;
    sX2 = (block.x + side_length - block.y) * sqrt3 / 2;
    sY3 = sY1;
    sX3 = (block.x + 2 * side_length - block.y) * sqrt3 / 2;

    sY4 = sY1 - side_length;
    sX4 = sX1;
    sY5 = sY2 - side_length; 
    sX5 = sX2;
    sY6 = sY3 - side_length;
    sX6 = sX3;

    sY7 = sY5 - side_length;
    sX7 = sX5;

    ctx.fillStyle = "#aaaaaa";
    ctx.beginPath();
    ctx.moveTo(sX1,sY1);
    ctx.lineTo(sX2,sY2);
    ctx.lineTo(sX5,sY5);
    ctx.lineTo(sX4,sY4);
    ctx.lineTo(sX1,sY1);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#bbbbbb";
    ctx.beginPath();
    ctx.moveTo(sX2,sY2);
    ctx.lineTo(sX3,sY3);
    ctx.lineTo(sX6,sY6);
    ctx.lineTo(sX5,sY5);
    ctx.lineTo(sX2,sY2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#cccccc";
    ctx.beginPath();
    ctx.moveTo(sX4,sY4);
    ctx.lineTo(sX5,sY5);
    ctx.lineTo(sX6,sY6);
    ctx.lineTo(sX7,sY7);
    ctx.lineTo(sX4,sY4);
    ctx.closePath();
    ctx.fill();

}

blocks = [];

d = side_length + dist_between_blocks;
for (i = 0; i <= mx + 100; i += d)
    for (j = -i; j <= i; j += d)
        blocks.push({x:i-d,y:j+d,z:0});

t = 0;

function render() {
    clear();
    for (i = 0; i < blocks.length; i++)
        draw(blocks[i]);
    for (i = 0; i < blocks.length; i++)
        blocks[i].z = 10 + 10 * Math.sin(((7*blocks[i].x + 3*blocks[i].y) + t)/900);
    t+= 30;
}

setInterval(render, 20);