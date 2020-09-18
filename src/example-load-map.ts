import { TiledResource } from "@excaliburjs/excalibur-tiled";
import { game } from './index';
import { Loader, Actor, Color, Texture } from 'excalibur';

// This is a basic example showcasing how to load and display a map.

export function BasicMapExample() {
  const map = new TiledResource("/static/map.json"); // Prepare map resource
  const texture = new Texture('static/trob.png');
  const loader = new Loader([map, texture]); // Prepare loader, queue up the map resource
  
  game.start(loader) // Load the resources given to the loader
  .then(() => {    // Once they are loaded...
    
    // Add the map to the scene
    const tm = map.getTileMap(); // Get the generated Excalibur TileMap
    game.add(tm);    // Add the TileMap to the default root scene.
    
    // Add an actor to the scene
    const actor = new Actor(16, 16, 32, 32, Color.Red); // Add an actor that looks like a red square by default.
    actor.addDrawing(texture); // Give the actor an actual sprite image.
    actor.anchor.setTo(0, 0); // Change the actor's center point to be top-left (default is center).
    game.add(actor); // Add the actor to the map.
  });
}
