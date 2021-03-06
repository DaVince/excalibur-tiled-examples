import { Color, Input, BoundingBox, Actor, Loader, LimitCameraBoundsStrategy } from 'excalibur';
import { TiledResource } from "@excaliburjs/excalibur-tiled";
import { game } from './index';

// This example showcases a big map with a camera that follows an actor,
// which can be moved around using the arrow keys.
// The camera is set up to never go beyond the map boundaries.

export function BigMapExample() {

  const map = new TiledResource("/static/bigmap.json");
  const loader = new Loader([map]);

  game.start(loader).then(() => {
  
    // Set up map
    let tm = map.getTileMap();
    const tmWidth = tm.cols * tm.cellWidth;
    const tmHeight = tm.rows * tm.cellHeight;
    game.add(tm);
    
    // Set up actor
    const actor = new Actor(game.halfDrawWidth, game.halfDrawHeight, 32, 32, Color.Red);
    game.add(actor);
    
    // Set up camera
    game.currentScene.camera.strategy.lockToActor(actor);
    let camStrat = new LimitCameraBoundsStrategy(new BoundingBox(0, 0, tmWidth, tmHeight));
    game.currentScene.camera.addStrategy(camStrat);
  
    // Allow actor to move around using arrow keys
    const actorSpeed = 300;
    game.input.keyboard.on('hold', e => {
      switch (e.key) {
        case Input.Keys.Left:
          actor.vel.x = -actorSpeed;
          break;
        case Input.Keys.Right:
          actor.vel.x = actorSpeed;
          break;
        case Input.Keys.Up:
          actor.vel.y = -actorSpeed;
          break;
        case Input.Keys.Down:
          actor.vel.y = actorSpeed;
          break;
        case 189: // -
          camStrat.target.right -= 10;
          break;
        case 187: // =
          camStrat.target.right += 10;
          break;
        default:
          console.log('Pressed', e.key);
      }
    });
    game.input.keyboard.on('release', () => {
      actor.vel.x = 0;
      actor.vel.y = 0;
    });
  
  });

}
