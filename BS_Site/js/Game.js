function init() {
    console.log("init() successfully called!");
    stage = new PIXI.Container();
    renderer = PIXI.autoDetectRenderer(512, 384, {view: document.getElementById("game-canvas")});
    scroller = new Scroller(stage);

    requestAnimationFrame(update);
}


function update() {
    scroller.update();
    renderer.render(stage);

    requestAnimationFrame(update);
}