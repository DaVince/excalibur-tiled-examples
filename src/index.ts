import * as ex from "excalibur";
import { TiledResource } from "@excaliburjs/excalibur-tiled";
import { Physics, Body, Collider, Vector, Color, Input, BoundingBox } from 'excalibur';

const game = new ex.Engine();
const map = new TiledResource("/static/bigmap.json");
const loader = new ex.Loader([map]);

game.start(loader).then(() => {

  // Set up map
  let tm = map.getTileMap();
  const tmWidth = tm.cols * tm.cellWidth;
  const tmHeight = tm.rows * tm.cellHeight;
  game.add(tm);
  
  // Set up actor
  const actor = new ex.Actor(game.halfDrawWidth, game.halfDrawHeight, 32, 32, Color.Red);
  game.add(actor);
  
  // Set up camera
  game.currentScene.camera.strategy.lockToActor(actor);
  game.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, tmWidth, tmHeight));

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
    }
  });
  game.input.keyboard.on('release', () => {
    actor.vel.x = 0;
    actor.vel.y = 0;
  });

});
