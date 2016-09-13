var TextureCache = PIXI.utils.TextureCache,
    Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Rectangle = PIXI.Rectangle,
    Sprite = PIXI.Sprite,
    Texture = PIXI.Texture,
    Text = PIXI.Text;


var stage = new Container(),
    renderer = autoDetectRenderer(600, 600);
document.body.appendChild(renderer.view);

renderer.backgroundColor = 0x991611;


loader.add("./img/worldmap.json").on("progress", loadProgressHandler).load(setup);

function loadProgressHandler(loader, resource) {
    console.log("loading: " + resource.url);
    console.log("progress: " + loader.progress + "%");
}

var id, fireTux, ground, ground2, ground3, ground4, smallTux;

function setup() {
    console.log("All files loaded");


    // Ground
    var groundTexture = TextureCache["snowman.png"];
    // ground = new Sprite(groundTexture);
    ground = new PIXI.extras.TilingSprite(groundTexture, 32, 600);
    ground2 = new PIXI.extras.TilingSprite(groundTexture, 600, 32);
    ground3 = new PIXI.extras.TilingSprite(groundTexture, 600, 32);
    ground4 = new PIXI.extras.TilingSprite(groundTexture, 32, 600);
    ground3.x = 0;
    ground3.y = 568;
    ground4.x = 568;
    ground4.y = 0;
    ground.addChild(ground2);
    ground.addChild(ground3);
    ground.addChild(ground4);
    stage.addChild(ground);

    // Small Tux
    smallTux = new Sprite(
        resources["./img/worldmap.json"].textures["smalltux.png"]
    );
    smallTux.x = 100;
    smallTux.y = stage.height / 2 - smallTux.height / 2;
    stage.addChild(smallTux);
    smallTux.vx = 0;
    smallTux.vy = 0;

    // Fire Tux
    id = resources["./img/worldmap.json"].textures;
    fireTux = new Sprite(id["firetux.png"]);
    stage.addChild(fireTux);
    fireTux.x = 500;
    fireTux.y = 400;
    stage.addChild(fireTux);


    var left = keyboard(65),
        up = keyboard(87),
        right = keyboard(68),
        down = keyboard(83);

    // LEFT
    left.press = function () {
        smallTux.vx = -5;
        smallTux.vy = 0;
    };

    left.release = function () {
        if (!right.isDown && smallTux.vy === 0) {
            smallTux.vx = 0;
        }
    };

    // UP
    up.press = function () {
        smallTux.vy = -5;
        smallTux.vx = 0;
    };
    up.release = function () {
        if (!down.isDown && smallTux.vx === 0) {
            smallTux.vy = 0;
        }
    };

    //Right
    right.press = function () {
        smallTux.vx = 5;
        smallTux.vy = 0;
    };
    right.release = function () {
        if (!left.isDown && smallTux.vy === 0) {
            smallTux.vx = 0;
        }
    };

    //Down
    down.press = function () {
        smallTux.vy = 5;
        smallTux.vx = 0;
    };
    down.release = function () {
        if (!up.isDown && smallTux.vx === 0) {
            smallTux.vy = 0;
        }
    };


    gameLoop()

}

var state = play;

var message = new Text(
    "Hello Pixi!",
    {font: "32px sans-serif", fill: "white"}
);

message.position.set(150, 150);
stage.addChild(message);


function gameLoop() {
    requestAnimationFrame(gameLoop);

    state();

    renderer.render(stage);
}

function play() {

    smallTux.x += smallTux.vx;
    smallTux.y += smallTux.vy;

    if (hitTestRectangle(smallTux, fireTux)) {
        message.text = "hit!";
        fireTux.tint = 0xff3300;

    } else {

        //if there's no collision, reset the message
        //text and the box's color
        message.text = "No collision...";
        fireTux.tint = 0xccff99;
    }
}
function keyboard(keyCode) {
    var key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;

    key.downHandler = function (event) {
        if (event.keyCode === key.code) {
            if (key.isUp && key.press) {
                key.press();
            }
            key.isDown = true;
            key.isUp = false;
        }
        event.preventDefault();
    };

    key.upHandler = function (event) {
        if (event.keyCode === key.code) {
            if (key.isDown && key.release) {
                key.release();
            }
            key.isDown = false;
            key.isUp = true;
        }
        event.preventDefault();
    };

    window.addEventListener(
        "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
        "keyup", key.upHandler.bind(key), false
    );
    return key;
}

function hitTestRectangle(r1, r2) {

    //Define the variables we'll need to calculate
    var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    //hit will determine whether there's a collision
    hit = false;

    //Find the center points of each sprite
    r1.centerX = r1.x + r1.width / 2;
    r1.centerY = r1.y + r1.height / 2;
    r2.centerX = r2.x + r2.width / 2;
    r2.centerY = r2.y + r2.height / 2;

    //Find the half-widths and half-heights of each sprite
    r1.halfWidth = r1.width / 2;
    r1.halfHeight = r1.height / 2;
    r2.halfWidth = r2.width / 2;
    r2.halfHeight = r2.height / 2;

    //Calculate the distance vector between the sprites
    vx = r1.centerX - r2.centerX;
    vy = r1.centerY - r2.centerY;

    //Figure out the combined half-widths and half-heights
    combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    combinedHalfHeights = r1.halfHeight + r2.halfHeight;

    //Check for a collision on the x axis
    if (Math.abs(vx) < combinedHalfWidths) {

        //A collision might be occuring. Check for a collision on the y axis
        if (Math.abs(vy) < combinedHalfHeights) {

            //There's definitely a collision happening
            hit = true;
        } else {

            //There's no collision on the y axis
            hit = false;
        }
    } else {

        //There's no collision on the x axis
        hit = false;
    }

    //`hit` will be either `true` or `false`
    return hit;
};