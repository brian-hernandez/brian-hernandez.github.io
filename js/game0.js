/**
 * Created by Brian on 9/13/16.
 */

// Aliases
let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

// Create the stage and renderer
let stage = new Container(),
    renderer = autoDetectRenderer(512, 512); // Has a 3rd argument; {antialias: false, transparent: false, resoultion:1}
document.body.appendChild(renderer.view);

// Style customization
renderer.backgroundColor = 0xfebc19;
renderer.view.style.border = "3px solid black";

// Make canvas fill entire window
// renderer.view.style.position = "absolute";
// renderer.view.style.width = window.innerWidth + "px";
// renderer.view.style.height = window.innerHeight + "px";
// renderer.view.style.display = "block";


renderer.render(stage);


window.addEventListener("resize", event => {
    scaleToWindow(renderer.view);
});

let info = function () {
    // Find the width and height of renderer
    console.log("Renderer width: " + renderer.view.width);
    console.log("Renderer height: " + renderer.view.height);

    let scale = scaleToWindow(renderer.view);
    // The ratio by which the canvas was scaled
    console.log("The ratio by which the canvas was scaled is " + scale);
}

info();