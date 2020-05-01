import { TiledResource } from "@excaliburjs/excalibur-tiled";
import { game } from './index';
import { Loader } from 'excalibur';

// A map with an external tileset is loaded.

export function ExternalTilesetExample() {
  const map = new TiledResource("/static/map-external-tileset.json");
  const loader = new Loader([map]);
  
  game.start(loader).then(() => {
    const tm = map.getTileMap();
    game.add(tm);
  });
}
