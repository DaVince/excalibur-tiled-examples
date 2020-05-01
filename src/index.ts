import { Engine, Scene } from "excalibur";
import { BasicMapExample } from './example-load-map';
import { BigMapExample } from './example-bigMap-camera';


export const game = new Engine({
  width: 640,
  height: 400
});

// Set to true if you wish to see debug output
game.isDebug = true;

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    switch (button.value) {
      case 'BigMapExample':
        BigMapExample();
        break;
      case 'BasicMapExample':
        BasicMapExample();
        break;
    }
    document.querySelector('#buttons').remove();
  })
});


