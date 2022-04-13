export class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(context, color) {
    context.beginPath();
    context.fillStyle = color;
    context.rect(this.x, this.y, this.width, this.height);
    context.fill();
  }
}
