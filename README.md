ExcaliburJS Tiled map engine examples
=====================================

Just a small collection of what's possible in Excalibur with Tiled map loading.

To prepare:
```
npm install
```

To run:
```
npm start
```

Examples
--------

The examples are separated into their own files in the `src` folder. The resources (map and image files) are stored in `static`. `index.html` in the project root contains the HTML page displayed when running the demo.

### index.ts
Provides basic code to launch the examples.

### example-external-tileset.ts
The most barebones example showing how to load a Tiled map (saved as JSON with base64 encoded data).

Also demonstrates how you can separate the tilemap into its own JSON file and refer to it, and Excalibur-tiled will simply support it.

### example-load-map.ts
Basic map example. Loads and displays a Tiled map. Also places a basic actor sprite into the map.

### example-bigMap-camera.ts
Demonstrates how, with a map bigger than the game resolution, you can use Excalibur's camera strategies to lock the camera to the actor's position and limit the constraints so that the camera does not go beyond the actual map's boundaries.

Also demonstrates how to bind keyboard input to actions, I suppose. (In this case it influences the sprite's "velocity" to a fixed value to make the actor move around until the key is released again.)
