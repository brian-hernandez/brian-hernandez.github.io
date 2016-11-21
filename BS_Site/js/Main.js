/**
 * Created by Brian on 11/20/16.
 */
function Main() {
    console.log("init() successfully called!");
    this.stage = new PIXI.Container();
    this.renderer = PIXI.autoDetectRenderer(512, 384, {view: document.getElementById("game-canvas")});
    this.loadSpriteSheet();
}

Main.SCROLL_SPEED = 2;

Main.prototype.update = function () {
    this.scroller.moveViewportXBy(Main.SCROLL_SPEED);
    this.renderer.render(this.stage);
    requestAnimationFrame(this.update.bind(this));
};

Main.prototype.loadSpriteSheet = function () {
    var loader = PIXI.loader;
    loader.add("wall", "./resources/wall.json");
    loader.add("bg-mid", "./resources/bg-mid.png");
    loader.add("bg-far", "./resources/bg-far.png");
    loader.once("complete", this.spriteSheetLoaded.bind(this));
    loader.load();
};

Main.prototype.spriteSheetLoaded = function () {
    this.scroller = new Scroller(this.stage);
    requestAnimationFrame(this.update.bind(this));

    // this.pool = new WallSpritesPool();
    // this.wallSlices = [];

};

// Main.prototype.generateTestWallSpan = function () {
//     var lookupTable = [
//         this.pool.borrowFrontEdge,
//         this.pool.borrowWindow,
//         this.pool.borrowDecoration,
//         this.pool.borrowStep,
//         this.pool.borrowWindow,
//         this.pool.borrowBackEdge
//     ];
//
//     var yPos = [
//         128, 128, 128, 192, 192, 192
//     ];
//
//     for (var i = 0; i < lookupTable.length; i++) {
//         var func = lookupTable[i];
//
//         var sprite = func.call(this.pool);
//         sprite.position.x = 64 + (i * 64);
//         sprite.position.y = yPos[i];
//
//         this.wallSlices.push(sprite);
//         this.stage.addChild(sprite);
//     }
// };
//
// Main.prototype.clearTestWallSpan = function () {
//     var lookupTable = [
//         this.pool.returnFrontEdge,
//         this.pool.returnWindow,
//         this.pool.returnDecoration,
//         this.pool.returnStep,
//         this.pool.returnWindow,
//         this.pool.returnBackEdge
//     ];
//
//     for (var i = 0; i < lookupTable.length; i++) {
//         var func = lookupTable[i];
//         var sprite = this.wallSlices[i];
//
//         this.stage.removeChild(sprite);
//         func.call(this.pool, sprite);
//     }
//
//     this.wallSlices = [];
// };
