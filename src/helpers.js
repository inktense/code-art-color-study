import { parse } from 'coolors-io'
import { coolorsLinksArray } from './styles/colorPallete'
import { sample } from 'lodash'

export function getColorPallete() {
const palleteLink = sample(coolorsLinksArray)

return parse(palleteLink)
}

export const calculateMargins = (width, height) => {
    // Creating a working space in the canvas.
    const gridW = width * 0.9;
    const gridH = height * 0.9;
    // Calculating the margin of Y and X sides.
    const margX = (width - gridW) * 0.5;
    const margY = (height - gridH) * 0.5;

    console.log(margX, margY, gridW, gridH)
    return { margX, margY, gridW, gridH };
  };
