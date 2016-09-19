/**
 * Created by Brian on 9/13/16.
 */

// Aliases
let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    TextureCache = PIXI.utils.TextureCache,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text;

// Create the stage and renderer
let stage = new Container(),
    renderer = autoDetectRenderer(720, 384); // Has a 3rd argument; {antialias: false, transparent: false, resoultion:1}
document.body.appendChild(renderer.view);

// Style customization
renderer.backgroundColor = 0xfebc19;
renderer.view.style.border = "3px solid black";

// Make canvas fill entire window
// renderer.view.style.position = "absolute";
// renderer.view.style.width = window.innerWidth + "px";
// renderer.view.style.height = window.innerHeight + "px";
// renderer.view.style.display = "block";

loader.add("./img/snow.json").on("progress", loadProgressHandler).load(setup);

function loadProgressHandler(loader, resource) {
    // Display the file `url` currently being loaded
    console.log(`Loading: ${resource.url}`); // Example of an ES6 Template String

    // Display teh percentage of files loaded
    console.log(`Progress: ${loader.progress}%`);

}

// Variables used in more than one function
let tank, state, etank;
let b = new Bump(PIXI);

function setup() {
    console.log("All files loaded");
    let id = resources["./img/snow.json"].textures;

    // Background
    let bg = new Sprite(id["bg.jpg"]);
    stage.addChild(bg);

    // User Tank
    tank = new Sprite(id["tank.gif"]);
    stage.addChild(tank);
    tank.position.set(150, 355); // Set the size of the sprite
    // tank.scale.set(1, 1); // Scale the sprite
    tank.tint = 0xccff99;
    tank.vx = 0;
    tank.vy = 0;
    tank.accelerationX = 0;
    tank.accelerationY = 0;
    tank.frictionX = 1;
    tank.frictionY = 1;
    tank.speed = 0.01;
    tank.drag = 0.98;

    // Evil tank
    let eTanks = new Container();

    // Making evil tanks
    let numberOfTanks = 4,
        spacing = 48,
        xOffset = 150;

    for (let i = 0; i < numberOfTanks; i++) {
        etank = new Sprite(id["tank.gif"]);

        let x = spacing * i + xOffset;
        let y = randomInt(0, stage.height - etank.height);
        etank.x = x;
        etank.y = y;
        etank.tint = 0xff0000;
        eTanks.addChild(etank);
        stage.addChild(etank);
    }

    //Capture the WASD keyboard keys
    var w = keyboard(87),
        a = keyboard(65),
        s = keyboard(83),
        d = keyboard(68);

    // LEFT Key Press
    a.press = () => {
        tank.accelerationX = -tank.speed;
        tank.frictionX = 1;
    };

    // LEFT Key Release
    a.release = () => {
        if (!d.isDown) {
            tank.accelerationX = 0;
            tank.frictionX = tank.drag;
        }
    };

    // UP Key Press
    w.press = () => {
        tank.accelerationY = -tank.speed;
        tank.frictionY = 1;
    };

    // UP Key Release
    w.release = () => {
        if (!s.isDown) {
            tank.accelerationY = 0;
            tank.frictionY = tank.drag;
        }
    };

    // RIGHT Key Press
    d.press = () => {
        tank.accelerationX = tank.speed;
        tank.frictionX = 1;
    };

    // RIGHT Key Release
    d.release = () => {
        if (!w.isDown) {
            tank.accelerationX = 0;
            tank.frictionX = tank.drag;
        }
    };

    // DOWN Key Press
    s.press = () => {
        tank.accelerationY = tank.speed;
        tank.frictionY = 1;
    };

    // DOWN Key Release
    s.release = () => {
        if (!w.isDown) {
            tank.accelerationY = 0;
            tank.frictionY = tank.drag;
        }
    };




    state = play;

    // Start the game loop
    gameLoop();

}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    state();
    renderer.render(stage);
}

function play() {
    // Apply acceleration by adding the acceleration to the sprite's velocity
    tank.vx += tank.accelerationX;
    tank.vy += tank.accelerationY;

    // Apply friction by multiplying sprite's velocity by the friction
    tank.vx *= tank.frictionX;
    tank.vy *= tank.frictionY;

    // Gravity
    tank.vy += 0.1;

    // Apply the velocity to the sprite's position to make it move
    tank.x += tank.vx;
    tank.y += tank.vy;

    let collision = contain(
        tank, {
            x: 0,
            y: 0,
            width: renderer.view.width,
            height: renderer.view.height
        }
    );
    if (collision) {
        //Reverse the sprite's `vx` value if it hits the left or right
        if (collision.has("left") || collision.has("right")) {
            tank.vx = 0;
        }
        //Reverse the sprite's `vy` value if it hits the top or bottom
        if (collision.has("top") || collision.has("bottom")) {
            tank.vy = 0;
        }
    }

    if(b.hitTestRectangle(tank, etank)){
        console.log("Collision");
    }else{
        console.log("No collision");
    }


}

//The `randomInt` helper function
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


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

function contain(sprite, container) {
//Create a `Set` called `collision` to keep track of the //boundaries with which the sprite is colliding
    var collision = new Set();
//Left
//If the sprite's x position is less than the container's x position, //move it back inside the container and add "left" to the collision Set
    if (sprite.x < container.x) {
        sprite.x = container.x;
        collision.add("left");
    }
    //Top
    if (sprite.y < container.y) {
        sprite.y = container.y;
        collision.add("top");
    }
//Right
    if (sprite.x + sprite.width > container.width) {
        sprite.x = container.width - sprite.width;
        collision.add("right");
    }
//Bottom
    if (sprite.y + sprite.height > container.height) {
        sprite.y = container.height - sprite.height;
        collision.add("bottom");
    }
    //If there were no collisions, set `collision` to `undefined`
    if (collision.size === 0) collision = undefined;
    //Return the `collision` value
    return collision;
}


info();