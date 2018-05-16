//Internet poetry(?)
var boxes = [];
//letter size
var s = 30;
var sp = 10;
var canvas;

// Variables for letters

/*var t1;
var i1;
var f1;
var f2;
var a1;
var n1;
var y1;
var f3;
var u1;
var n2;
var k1;*/

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  noFill();
  for (var i = sp; i <= width - s; i += s + sp) {
    for (var j = sp; j <= height - s; j += s + sp) {
      boxes.push(new Box(i, j));
    }
  }
  //TIFFANY FUNK
  t1 = new Letter((sp * 1) + (s * 0), sp, "t");
  i1 = new Letter((sp * 2) + (s * 1), sp, "i");
  f1 = new Letter((sp * 3) + (s * 2), sp, "f");
  f2 = new Letter((sp * 4) + (s * 3), sp, "f");
  a1 = new Letter((sp * 5) + (s * 4), sp, "a");
  n1 = new Letter((sp * 6) + (s * 5), sp, "n");
  y1 = new Letter((sp * 7) + (s * 6), sp, "y");

  f3 = new Letter((sp * 1) + (s * 0), (sp * 2) + (s * 1), "f");
  u1 = new Letter((sp * 2) + (s * 1), (sp * 2) + (s * 1), "u");
  n2 = new Letter((sp * 3) + (s * 2), (sp * 2) + (s * 1), "n");
  k1 = new Letter((sp * 4) + (s * 3), (sp * 2) + (s * 1), "k");

  //DIGITAL media
  d1 = new Letter((sp * 1) + (s * 0), (sp * 3) + (s * 2), "d");
  i2 = new Letter((sp * 1) + (s * 0), (sp * 4) + (s * 3), "i");
  g1 = new Letter((sp * 1) + (s * 0), (sp * 5) + (s * 4), "g");
  i3 = new Letter((sp * 1) + (s * 0), (sp * 6) + (s * 5), "i");
  t2 = new Letter((sp * 1) + (s * 0), (sp * 7) + (s * 6), "t");
  a2 = new Letter((sp * 1) + (s * 0), (sp * 8) + (s * 7), "a");
  l1 = new Letter((sp * 1) + (s * 0), (sp * 9) + (s * 8), "l");

  m1 = new Letter((sp * 1) + (s * 0), (sp * 10) + (s * 9), "m");
  e1 = new Letter((sp * 1) + (s * 0), (sp * 11) + (s * 10), "e");
  d2 = new Letter((sp * 1) + (s * 0), (sp * 12) + (s * 11), "d");
  i4 = new Letter((sp * 1) + (s * 0), (sp * 13) + (s * 12), "i");
  a3 = new Letter((sp * 1) + (s * 0), (sp * 14) + (s * 13),  "a");

  //VIDEO Games
  v1 = new Letter((sp * 2) + (s * 1), (sp * 3) + (s * 2), "v");
  i5 = new Letter((sp * 2) + (s * 1), (sp * 4) + (s * 3), "i");
  d3 = new Letter((sp * 2) + (s * 1), (sp * 5) + (s * 4), "d");
  e2 = new Letter((sp * 2) + (s * 1), (sp * 6) + (s * 5), "e");
  o1 = new Letter((sp * 2) + (s * 1), (sp * 7) + (s * 6), "o");
  g2 = new Letter((sp * 2) + (s * 1), (sp * 8) + (s * 7), "g");
  a4 = new Letter((sp * 2) + (s * 1), (sp * 9) + (s * 8), "a");
  m2 = new Letter((sp * 2) + (s * 1), (sp * 10) + (s * 9), "m");
  e3 = new Letter((sp * 2) + (s * 1), (sp * 11) + (s * 10), "e");
  s1 = new Letter((sp * 2) + (s * 1), (sp * 12) + (s * 11), "s");

  //DATA VIZ
  d4 = new Letter((sp * 3) + (s * 2), (sp * 3) + (s * 2), "d");
  a5 = new Letter((sp * 3) + (s * 2), (sp * 4) + (s * 3), "a");
  t3 = new Letter((sp * 3) + (s * 2), (sp * 5) + (s * 4), "t");
  a6 = new Letter((sp * 3) + (s * 2), (sp * 6) + (s * 5), "a");

  v2 = new Letter((sp * 3) + (s * 2), (sp * 7) + (s * 6), "v");
  i6 = new Letter((sp * 3) + (s * 2), (sp * 8) + (s * 7), "i");
  z1 = new Letter((sp * 3) + (s * 2), (sp * 9) + (s * 8), "z");
}

function mousePressed() {
  t1.clicked();
  i1.clicked();
  f1.clicked();
  f2.clicked();
  a1.clicked();
  n1.clicked();
  y1.clicked();

  f3.clicked();
  u1.clicked();
  n2.clicked();
  k1.clicked();

  d1.clicked();
  i2.clicked();
  g1.clicked();
  i3.clicked();
  t2.clicked();
  a2.clicked();
  l1.clicked();

  m1.clicked();
  e1.clicked();
  d2.clicked();
  i4.clicked();
  a3.clicked();

  v1.clicked();
  i5.clicked();
  d3.clicked();
  e2.clicked();
  o1.clicked();
  g2.clicked();
  a4.clicked();
  m2.clicked();
  e3.clicked();
  s1.clicked();

  d4.clicked();
  a5.clicked();
  t3.clicked();
  a6.clicked();

  v2.clicked();
  i6.clicked();
  z1.clicked();
}

function mouseDragged() {
  t1.clickMove();
  i1.clickMove();
  f1.clickMove();
  f2.clickMove();
  a1.clickMove();
  n1.clickMove();
  y1.clickMove();

  f3.clickMove();
  u1.clickMove();
  n2.clickMove();
  k1.clickMove();

  d1.clickMove();
  i2.clickMove();
  g1.clickMove();
  i3.clickMove();
  t2.clickMove();
  a2.clickMove();
  l1.clickMove();

  m1.clickMove();
  e1.clickMove();
  d2.clickMove();
  i4.clickMove();
  a3.clickMove();

  v1.clickMove();
  i5.clickMove();
  d3.clickMove();
  e2.clickMove();
  o1.clickMove();
  g2.clickMove();
  a4.clickMove();
  m2.clickMove();
  e3.clickMove();
  s1.clickMove();

  d4.clickMove();
  a5.clickMove();
  t3.clickMove();
  a6.clickMove();

  v2.clickMove();
  i6.clickMove();
  z1.clickMove();
}

function mouseReleased() {
  t1.unClick();
  i1.unClick();
  f1.unClick();
  f2.unClick();
  a1.unClick();
  n1.unClick();
  y1.unClick();

  f3.unClick();
  u1.unClick();
  n2.unClick();
  k1.unClick();

  d1.unClick();
  i2.unClick();
  g1.unClick();
  i3.unClick();
  t2.unClick();
  a2.unClick();
  l1.unClick();

  m1.unClick();
  e1.unClick();
  d2.unClick();
  i4.unClick();
  a3.unClick();

  v1.unClick();
  i5.unClick();
  d3.unClick();
  e2.unClick();
  o1.unClick();
  g2.unClick();
  a4.unClick();
  m2.unClick();
  e3.unClick();
  s1.unClick();

  d4.unClick();
  a5.unClick();
  t3.unClick();
  a6.unClick();

  v2.unClick();
  i6.unClick();
  z1.unClick();
}

function draw() {
  background(255);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].display();
  }
  //visualize letters

  t1.display();
  t1.test();
  i1.display();
  i1.test();
  f1.display();
  f1.test();
  f2.display();
  f2.test();
  a1.display();
  a1.test();
  n1.display();
  n1.test();
  y1.display();
  y1.test();

  f3.display();
  f3.test();
  u1.display();
  u1.test();
  n2.display();
  n2.test();
  k1.display();
  k1.test();

  d1.display();
  d1.test();
  i2.display();
  i2.test();
  g1.display();
  g1.test();
  i3.display();
  i3.test();
  t2.display();
  t2.test();
  a2.display();
  a2.test();
  l1.display();
  l1.test();

  m1.display();
  m1.test();
  e1.display();
  e1.test();
  d2.display();
  d2.test();
  i4.display();
  i4.test();
  a3.display();
  a3.test();

  v1.display();
  v1.test();
  i5.display();
  i5.test();
  d3.display();
  d3.test();
  e2.display();
  e2.test();
  o1.display();
  o1.test();
  g2.display();
  g2.test();
  a4.display();
  a4.test();
  m2.display();
  m2.test();
  e3.display();
  e3.test();
  s1.display();
  s1.test();

  d4.display();
  d4.test();
  a5.display();
  a5.test();
  t3.display();
  t3.test();
  a6.display();
  a6.test();

  v2.display();
  v2.test();
  i6.display();
  i6.test();
  z1.display();
  z1.test();

  // override colors here
  d1.pink();
  i2.pink();
  g1.pink();
  i3.pink();
  t2.pink();
  a2.pink();
  l1.pink();

  m1.pink();
  e1.pink();
  d2.pink();
  i4.pink();
  a3.pink();

  v1.pink();
  i5.pink();
  d3.pink();
  e2.pink();
  o1.pink();
  g2.pink();
  a4.pink();
  m2.pink();
  e3.pink();
  s1.pink();

  d4.pink();
  a5.pink();
  t3.pink();
  a6.pink();

  v2.pink();
  i6.pink();
  z1.pink();
}

function Box(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    rectMode(CENTER);
    var c = color("#ffccff");
    stroke(c);
    rect(this.x + (s / 2), this.y + (s / 2), s + sp, s + sp);
  }
}
