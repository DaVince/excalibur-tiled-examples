import { TiledResource } from "@excaliburjs/excalibur-tiled";
import { game } from './index';
import { Loader } from 'excalibur';

// This is a basic example showcasing how to load and display a map.

export function BasicMapExample() {
  const map = new TiledResource("/static/map.json"); // Prepare map resource
  const loader = new Loader([map]); // Prepare loader, queue up the map resource
  
  game.start(loader) // Load the resources given to the loader
    .then(() => {    // Once they are loaded...
    const tm = map.getTileMap(); // Get the generated Excalibur TileMap
    game.add(tm);    // Add the TileMap to the default root scene.
  });
}
