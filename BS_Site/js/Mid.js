/**
 * Created by Brian on 11/20/16.
 */
function Mid() {
    var texture = PIXI.Texture.fromImage("./resources/bg-mid.png");
    PIXI.extras.TilingSprite.call(this, texture, 512, 256);

    this.position.x = 0;
    this.position.y = 128;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;
}

Mid.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Mid.prototype.update = function () {
    this.tilePosition.x -= 0.64;
}