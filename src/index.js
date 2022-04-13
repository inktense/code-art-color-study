import { Circle, Triangle, Rectangle } from "./classes";
import { sample } from "lodash";
import { calculateMargins } from "./helpers";
import { random } from "canvas-sketch-util";

export const randomSketch = (context, width, height, colors) => {
  const { margX, margY, gridW, gridH } = calculateMargins(width, height);
  const circlesArray = [];
  const trianglesArray = [];
  const rectArray = [];

  // Create circles
  for (let i = 0; i < random.range(1, 10); i++) {
    const x = random.range(margX, gridW);
    const y = random.range(margY, gridH);
    const shapeDimension = random.range(margX, gridW / 3);
    circlesArray.push(new Circle(x, y, shapeDimension));

    // Randomply generate a new circle that has same staring point but larger radius
    if (random.boolean()) {
      circlesArray.push(
        new Circle(x, y, shapeDimension * random.range(0.2, 0.8))
      );
    }
  }

  // Create triangles
  for (let i = 0; i < random.range(1, 5); i++) {
    const x = random.range(margX, gridW);
    const y = random.range(margY, gridH);
    trianglesArray.push(new Triangle(margX, gridW - margY));
  }

  // Create rectangles
  for (let i = 0; i < random.range(1, 10); i++) {
    const x = random.range(margX, gridW);
    const y = random.range(margY, gridH);
    const width = random.range(margX, gridW / 2 - margX);
    const height = random.range(margX, gridH / 2 - margY);

    rectArray.push(new Rectangle(x, y, width, height));

    if (random.boolean()) {
      rectArray.push(new Rectangle(x + 10, y + 10, width * 0.6, height * 0.6));
    }
  }

  circlesArray.forEach((circle) => {
    circle.draw(context, sample(colors));
  });

  trianglesArray.forEach((triangle) => {
    const shapeDimension = random.range(margX, gridW / 2);
    triangle.draw(context, shapeDimension, sample(colors));

    if (random.boolean()) {
    }
  });

  rectArray.forEach((rect) => {
    rect.draw(context, sample(colors));
  });
};
