import canvasSketch from "canvas-sketch";
import { randomSketch } from './src'
import { getColorPallete } from './src/helpers' 

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    const colors = getColorPallete()
    const random = Math.floor(Math.random() * colors.length);
    const background = colors.splice(random, 1)[0];

    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    randomSketch(context, width, height, colors)

  };
};

canvasSketch(sketch, settings);
