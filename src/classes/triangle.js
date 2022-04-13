import { random } from "canvas-sketch-util";

export class Triangle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  generateCoordinates() {
    const x = random.range(this.x, this.y);
    const y = random.range(this.x, this.y);

    return { x, y };
  }

  calculateDistance() {
    const { x: x1, y: y1 } = this.generateCoordinates();
    const { x: x2, y: y2 } = this.generateCoordinates();
    const { x: x3, y: y3 } = this.generateCoordinates();

    return { x1, x2, x3, y1, y2, y3 };
  }

  draw(context, offset, color) {
    const { x1, x2, x3, y1, y2, y3 } = this.calculateDistance();
    context.beginPath();
    context.fillStyle = color;

    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);

    context.fill();
    context.save();
  }
}
