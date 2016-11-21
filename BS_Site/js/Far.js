/**
 * Created by Brian on 11/20/16.
 */
function Far() {
    var texture = PIXI.Texture.fromImage("./resources/bg-far.png");
    PIXI.extras.TilingSprite.call(this, texture, 512, 256);

    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;
}

Far.prototype = Object.create(PIXI.extras.TilingSprite.prototype);