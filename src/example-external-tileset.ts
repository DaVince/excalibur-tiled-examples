import { TiledResource } from "@excaliburjs/excalibur-tiled";
import { game } from './index';
import { Loader } from 'excalibur';

// A map with an external tileset is loaded.
// map-external-tileset.json refers to tilemap.json for its actual tilemap data.

// This is unlike map.json, which has the tilemap embedded. When you have many
// maps, this will bloat your map file sizes with lots of redundant data.

export function ExternalTilesetExample() {
  const map = new TiledResource("/static/map-external-tileset.json");
  const loader = new Loader([map]);
  
  game.start(loader).then(() => {
    const tm = map.getTileMap();
    game.add(tm);
  });
}
