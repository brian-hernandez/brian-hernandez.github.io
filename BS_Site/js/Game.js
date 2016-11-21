function init() {
    console.log("init() successfully called!");
    stage = new PIXI.Container();
    renderer = PIXI.autoDetectRenderer(512, 384, {view: document.getElementById("game-canvas")});

    far = new Far();
    stage.addChild(far);

    var midTexture = PIXI.Texture.fromImage("./resources/bg-mid.png");
    //mid = new PIXI.Sprite(midTexture);
    mid = new PIXI.extras.TilingSprite(midTexture, 512, 256);
    mid.position.x = 0;
    mid.position.y = 128;
    mid.tilePosition.x = 0;
    mid.tilePosition.y = 0;
    stage.addChild(mid);


    requestAnimationFrame(update);
}


function update() {
    far.tilePosition.x -= 0.128;
    mid.tilePosition.x -= 0.64;
    renderer.render(stage);
    requestAnimationFrame(update);
}