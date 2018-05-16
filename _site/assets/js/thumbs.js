function setup() {
  var canvasT = createCanvas(700, 100);
    canvasT.parent('thumbs');
    //canvas.position(0, 0);
    //canvas.style('z-index', '1');

  for (var i = 0; i <= 800; i += 100) {
    noStroke();
    fill(random(0, 255), random(0, 255), random(0, 255));
    rect(i, 0, height, height);
  }
}

function draw() {
}
