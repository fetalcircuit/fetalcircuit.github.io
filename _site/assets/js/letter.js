function Letter(x, y, letter) {
  this.x = x;
  this.y = y;
  this.letter = letter;
  this.OverBox = false;
  this.Locked = false;
  this.xOffset = 0.0;
  this.yOffset = 0.0;
  this.col = color(0);

  this.display = function() {
    stroke(this.col);
    if (this.letter == "a") {
      beginShape();
      vertex(this.x + 2 * (s / 5), this.y);
      vertex(this.x + 3 * (s / 5), this.y);
      vertex(this.x + s, this.y + s);
      vertex(this.x + 4 * (s / 5), this.y + s);
      vertex(this.x + 3.5 * (s / 5), this.y + 3.5 * (s / 5));
      vertex(this.x + 1.5 * (s / 5), this.y + 3.5 * (s / 5));
      vertex(this.x + s / 5, this.y + s);
      vertex(this.x, this.y + s);
      beginContour();
      vertex(this.x + s / 2, this.y + s / 5);
      vertex(this.x + 3 * (s / 5), this.y + 2.5 * (s / 5));
      vertex(this.x + 2 * (s / 5), this.y + 2.5 * (s / 5));
      endContour();
      endShape(CLOSE);
    } else if (this.letter == "d") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + 4 * (s / 5), this.y);
      vertex(this.x + s, this.y + s / 5);
      vertex(this.x + s, this.y + 4 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + s);
      vertex(this.x, this.y + s);
      endShape(CLOSE);
    } else if (this.letter == "e") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + s, this.y);
      vertex(this.x + s, this.y + s / 5);
      vertex(this.x + s / 5, this.y + s / 5);
      vertex(this.x + s / 5, this.y + 2 * (s / 5));
      vertex(this.x + s, this.y + 2 * (s / 5));
      vertex(this.x + s, this.y + 3 * (s / 5));
      vertex(this.x + s / 5, this.y + 3 * (s / 5));
      vertex(this.x + s / 5, this.y + 4 * (s / 5));
      vertex(this.x + s, this.y + 4 * (s / 5));
      vertex(this.x + s, this.y + s);
      vertex(this.x, this.y + s);
      endShape(CLOSE);
    } else if (this.letter == "f") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + s, this.y);
      vertex(this.x + s, this.y + s / 5);
      vertex(this.x + s / 5, this.y + s / 5);
      vertex(this.x + s / 5, this.y + 2 * (s / 5));
      vertex(this.x + s, this.y + 2 * (s / 5));
      vertex(this.x + s, this.y + 3 * (s / 5));
      vertex(this.x + s / 5, this.y + 3 * (s / 5));
      vertex(this.x + s / 5, this.y + s);
      vertex(this.x, this.y + s);
      endShape(CLOSE);
    } else if (this.letter == "g") {
      beginShape();
      vertex(this.x + s / 5, this.y);
      vertex(this.x + 4 * (s / 5), this.y);
      vertex(this.x + 4 * (s / 5), this.y);
      vertex(this.x + s, this.y + s / 5);
      vertex(this.x + s, this.y + 2 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + 2 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + 1.5 * (s / 5));
      vertex(this.x + 3.5 * (s / 5), this.y + s / 5);
      vertex(this.x + 1.5 * (s / 5), this.y + s / 5);
      vertex(this.x + s / 5, this.y + 1.5 * (s / 5));
      vertex(this.x + s / 5, this.y + 3.5 * (s / 5));
      vertex(this.x + 1.5 * (s / 5), this.y + 4 * (s / 5));
      vertex(this.x + 3.5 * (s / 5), this.y + 4 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + 3.5 * (s / 5));
      vertex(this.x + s / 2, this.y + 3.5 * (s / 5));
      vertex(this.x + s / 2, this.y + s / 2);
      vertex(this.x + s, this.y + s / 2);
      vertex(this.x + s, this.y + 4 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + s);
      vertex(this.x + s / 5, this.y + s);
      vertex(this.x, this.y + 4 * (s / 5));
      vertex(this.x, this.y + s / 5);
      endShape(CLOSE);
    } else if (this.letter == "h") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + s / 5, this.y);
      vertex(this.x + s / 5, this.y + s / 5);
      vertex(this.x + s / 5, this.y + 2 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + 2 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y);
      vertex(this.x + s, this.y);
      vertex(this.x + s, this.y + s);
      vertex(this.x + 4 * (s / 5), this.y + s);
      vertex(this.x + 4 * (s / 5), this.y + 3 * (s / 5));
      vertex(this.x + s / 5, this.y + 3 * (s / 5));
      vertex(this.x + s / 5, this.y + s);
      vertex(this.x, this.y + s);
      endShape(CLOSE);
    } else if (this.letter == "i") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + s, this.y);
      vertex(this.x + s, this.y + s / 5);
      vertex(this.x + 3 * (s / 5), this.y + s / 5);
      vertex(this.x + 3 * (s / 5), this.y + 4 * (s / 5));
      vertex(this.x + s, this.y + 4 * (s / 5));
      vertex(this.x + s, this.y + s);
      vertex(this.x, this.y + s);
      vertex(this.x, this.y + 4 * (s / 5));
      vertex(this.x + 2 * (s / 5), this.y + 4 * (s / 5));
      vertex(this.x + 2 * (s / 5), this.y + s / 5);
      vertex(this.x, this.y + s / 5);
      endShape(CLOSE);
    } else if (this.letter == "k") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + s / 5, this.y);
      vertex(this.x + s / 5, this.y + 2 * (s / 5));
      vertex(this.x + 3.5 * (s / 5), this.y);
      vertex(this.x + s, this.y);
      vertex(this.x + 2 * (s / 5), this.y + s / 2);
      vertex(this.x + s, this.y + s);
      vertex(this.x + 3.5 * (s / 5), this.y + s);
      vertex(this.x + s / 5, this.y + 3 * (s / 5));
      vertex(this.x + s / 5, this.y + s);
      vertex(this.x, this.y + s);
      endShape(CLOSE);
    } else if (this.letter == "l") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + s / 5, this.y);
      vertex(this.x + s / 5, this.y + 4 * (s / 5));
      vertex(this.x + s, this.y + 4 * (s / 5));
      vertex(this.x + s, this.y + s);
      vertex(this.x, this.y + s);
      endShape(CLOSE);
    } else if (this.letter == "m") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + 1.3 * (s / 5), this.y);
      vertex(this.x + s / 2, this.y + (4 * (s / 5)));
      vertex(this.x + 3.7 * (s / 5), this.y);
      vertex(this.x + s, this.y);
      vertex(this.x + s, this.y + s);
      vertex(this.x + 4 * (s / 5), this.y + s);
      vertex(this.x + 4 * (s / 5), this.y + 1.5 * (s / 5));
      vertex(this.x + 3 * (s / 5), this.y + s);
      vertex(this.x + 2 * (s / 5), this.y + s);
      vertex(this.x + s / 5, this.y + 1.5 * (s / 5));
      vertex(this.x + s / 5, this.y + s);
      vertex(this.x, this.y + s);
      endShape(CLOSE);
    } else if (this.letter == "n") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + s / 5, this.y);
      vertex(this.x + 4 * (s / 5), this.y + 3.5 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y);
      vertex(this.x + s, this.y);
      vertex(this.x + s, this.y + s);
      vertex(this.x + 4 * (s / 5), this.y + s);
      vertex(this.x + s / 5, this.y + 1.5 * (s / 5));
      vertex(this.x + s / 5, this.y + s);
      vertex(this.x, this.y + s);
      endShape(CLOSE);
    } else if (this.letter == "o") {
      beginShape();
      vertex(this.x + s / 5, this.y);
      vertex(this.x + 4 * (s / 5), this.y);
      vertex(this.x + 4 * (s / 5), this.y);
      vertex(this.x + s, this.y + (s / 5));
      vertex(this.x + s, this.y + (2 * (s / 5)));
      vertex(this.x + s, this.y + 4 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + s);
      vertex(this.x + s / 5, this.y + s);
      vertex(this.x, this.y + 4 * (s / 5));
      vertex(this.x, this.y + s / 5);
      endShape(CLOSE);
    } else if (this.letter == "r") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + 4 * (s / 5), this.y);
      vertex(this.x + 4 * (s / 5), this.y);
      vertex(this.x + s, this.y + s / 5);
      vertex(this.x + s, this.y + 2 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + (3 * (s / 5)));
      vertex(this.x + s, this.y + s);
      vertex(this.x + 4 * (s / 5), this.y + s);
      vertex(this.x + 3 * (s / 5), this.y + 3 * (s / 5));
      vertex(this.x + s / 5, this.y + 3 * (s / 5));
      vertex(this.x + s / 5, this.y + s)
      vertex(this.x, this.y + s);
      beginContour();
      vertex(this.x + s / 5, this.y + s / 5);
      vertex(this.x + 3.5 * (s / 5), this.y + s / 5);
      vertex(this.x + 4 * (s / 5), this.y + 1.5 * (s / 5));
      vertex(this.x + 3.5 * (s / 5), this.y + 2 * (s / 5));
      vertex(this.x + s / 5, this.y + 2 * (s / 5));
      endContour();
      endShape(CLOSE);
    } else if (this.letter == "s") {
      beginShape();
      vertex(this.x + s / 5, this.y);
      vertex(this.x + 4 * (s / 5), this.y);
      vertex(this.x + s, this.y + .75 * (s / 5));
      vertex(this.x + s, this.y + 1.5 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + 1.5 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + 1.5 * (s / 5));
      vertex(this.x + 3.5 * (s / 5), this.y + s / 5);
      vertex(this.x + 1.5 * (s / 5), this.y + s / 5);
      vertex(this.x + s / 5, this.y + 1.5 * (s / 5));
      vertex(this.x + 1.5 * (s / 5), this.y + 2 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + 2 * (s / 5));
      vertex(this.x + s, this.y + 3 * (s / 5));
      vertex(this.x + s, this.y + 4 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + s);
      vertex(this.x + s / 5, this.y + s);
      vertex(this.x, this.y + 4 * (s / 5));
      vertex(this.x, this.y + 3.5 * (s / 5));
      vertex(this.x + s / 5, this.y + 3.5 * (s / 5));
      vertex(this.x + 1.5 * (s / 5), this.y + 4 * (s / 5));
      vertex(this.x + 3.5 * (s / 5), this.y + 4 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + 3.5 * (s / 5));
      vertex(this.x + 3.5 * (s / 5), this.y + 3 * (s / 5));
      vertex(this.x + s / 5, this.y + 3 * (s / 5));
      vertex(this.x, this.y + 2 * (s / 5));
      vertex(this.x, this.y + s / 5);
      endShape(CLOSE);
    } else if (this.letter == "t") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + s, this.y);
      vertex(this.x + s, this.y + s / 5);
      vertex(this.x + 3 * (s / 5), this.y + s / 5);
      vertex(this.x + 3 * (s / 5), this.y + s);
      vertex(this.x + 2 * (s / 5), this.y + s);
      vertex(this.x + 2 * (s / 5), this.y + s / 5);
      vertex(this.x, this.y + s / 5);
      endShape(CLOSE);
    } else if (this.letter == "u") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + s / 5, this.y);
      vertex(this.x + s / 5, this.y + 3.5 * (s / 5));
      vertex(this.x + 2 * (s / 5), this + 4 * (s / 5));
      vertex(this.x + 1.5 * (s / 5), this.y + 4 * (s / 5));
      vertex(this.x + 3.5 * (s / 5), this.y + 4 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + 3.5 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y);
      vertex(this.x + s, this.y);
      vertex(this.x + s, this.y + 4 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y + s);
      vertex(this.x + s / 5, this.y + s);
      vertex(this.x, this.y + 4 * (s / 5));
      endShape(CLOSE);
    } else if (this.letter == "v") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + s / 5, this.y);
      vertex(this.x + s / 2, this.y + 4 * (s / 5));
      vertex(this.x + 4 * (s / 5), this.y);
      vertex(this.x + s, this.y);
      vertex(this.x + 3 * (s / 5), this.y + s);
      vertex(this.x + 2 * (s / 5), this.y + s);
      endShape(CLOSE);
    } else if (this.letter == "y") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + s / 5, this.y);
      vertex(this.x + s / 2, this.y + s / 2);
      vertex(this.x + 4 * (s / 5), this.y);
      vertex(this.x + s, this.y);
      vertex(this.x + 3 * (s / 5), this.y + 3.5 * (s / 5));
      vertex(this.x + 3 * (s / 5), this.y + s);
      vertex(this.x + 2 * (s / 5), this.y + s);
      vertex(this.x + 2 * (s / 5), this.y + 3.5 * (s / 5));
      endShape(CLOSE);
    } else if (this.letter == "z") {
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + s, this.y);
      vertex(this.x + s, this.y + s / 5);
      vertex(this.x + 1.5 * s / 5, this.y + 4 * (s / 5));
      vertex(this.x + s, this.y + 4 * (s / 5));
      vertex(this.x + s, this.y + s);
      vertex(this.x, this.y + s);
      vertex(this.x, this.y + 4 * (s / 5));
      //vertex(this.x + 2 * (s / 5), this.y + 4 * (s / 5));
      vertex(this.x + 3.5 * (s / 5), this.y + s / 5);
      vertex(this.x, this.y + s / 5);
      endShape(CLOSE);
  }
}

  this.blink = function() {
    var r = 5;
    this.x = (s * r) + (sp * r);
    this.y = (s * r) + (sp * r);
  }

  this.test = function() {
    if (mouseX > this.x && mouseX < this.x + s &&
      mouseY > this.y && mouseY < this.y + s) {
      this.OverBox = true;
      if (!this.Locked) {}
    } else {
      this.OverBox = false;
    }
  }
  this.clicked = function() {
    if (this.OverBox) {
      this.Locked = true;
      this.col = color(255, 0, 0);
    } else {
      this.Locked = false;
    }
    this.xOffset = mouseX - this.x;
    this.yOffset = mouseY - this.y;
  }
  this.clickMove = function() {
    if (this.Locked) {
      this.x = mouseX - this.xOffset;
      this.y = mouseY - this.yOffset;
    }
  }
  this.unClick = function() {
    this.col = color(0);

    //snaps into grid
    this.x = int(this.x / (s + sp)) * (s + sp) + sp;
    this.y = int(this.y / (s + sp)) * (s + sp) + sp;

    this.Locked = false;
  }

  this.intersects = function() {

  }

  this.pink = function() {
    this.col = color(255, 0, 255, 150);
  }
}
