namespace SpriteKind {
    export const Win_Spot = SpriteKind.create()
    export const Flame = SpriteKind.create()
    export const Spawn = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(false, effects.melt)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Goober.vy == 0) {
        Goober.vy = -65
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    game.over(true, effects.bubbles)
})
function Startlevel () {
    Goober = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f 4 4 4 4 4 f . . . . 
        . . . f f 4 4 4 4 4 4 4 f . . . 
        . . f 4 4 4 4 f 4 4 f 4 4 f . . 
        . f 4 4 4 4 4 f 4 4 f 4 4 f . . 
        . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
        . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
        . f f 4 4 4 4 4 4 4 4 f f . . . 
        . . . f f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Goober, 100, 0)
    info.setLife(3)
    tiles.placeOnRandomTile(Goober, myTiles.tile12)
    Goober.ay = 100
    scene.cameraFollowSprite(Goober)
    for (let value of tiles.getTilesByType(myTiles.tile9)) {
        Win_Portal = sprites.create(img`
            c f f f f f f f f f f f f f f c 
            c c f 4 4 4 4 4 4 4 4 4 4 f c c 
            c c f 4 4 2 d 4 4 4 4 4 4 f c c 
            c c f 4 4 2 2 4 4 4 4 4 4 f c c 
            c c f 4 4 4 4 4 4 4 4 4 4 f c c 
            c c f 4 4 4 4 4 4 d 2 4 4 f c c 
            c c f 4 4 4 4 4 4 2 2 4 4 f c c 
            c c f 4 4 4 4 4 4 4 4 4 4 f c c 
            c c f 4 4 4 4 4 4 4 4 4 4 f c c 
            c c f 4 4 4 4 4 4 4 4 4 4 f c c 
            c c f 4 4 2 d 4 4 4 4 4 4 f c c 
            c c f 4 4 2 2 4 4 4 2 d 4 f c c 
            c c f 4 4 4 4 4 4 4 2 2 4 f c c 
            c c f 4 4 4 4 4 4 4 4 4 4 f c c 
            c c f 4 4 4 4 4 4 4 4 4 4 f c c 
            c f f f f f f f f f f f f f f c 
            `, SpriteKind.Win_Spot)
        animation.runImageAnimation(
        Win_Portal,
        [img`
            . f f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 5 7 7 7 7 7 7 5 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 5 7 7 7 7 7 f . . 
            . . f 5 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 5 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 5 7 7 7 7 7 5 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 5 7 7 7 7 7 7 5 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 5 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . f f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 5 7 7 7 7 7 7 5 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 5 7 7 7 7 f . . 
            . . f 7 5 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 5 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 5 7 7 7 5 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 5 7 7 7 7 5 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 5 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 5 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . f f f f f f f f f f f f f f . 
            . . f 7 7 5 7 7 7 7 7 7 5 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 5 7 7 7 7 7 f . . 
            . . f 7 7 5 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 5 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 5 7 5 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 5 7 7 7 7 7 7 5 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 5 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 5 7 f . . 
            . . f 7 5 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . f f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 5 7 7 7 7 f . . 
            . . f 7 7 7 5 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 5 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 5 7 7 7 5 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 5 7 7 7 7 7 7 5 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 5 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 5 f . . 
            . . f 5 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 5 7 7 7 5 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `],
        200,
        true
        )
        tiles.placeOnTile(Win_Portal, value)
    }
    for (let value of tiles.getTilesByType(myTiles.tile12)) {
        Win_Portal = sprites.create(img`
            c f f f f f f f f f f f f f f c 
            c c f 4 4 4 4 4 4 4 4 4 4 f c c 
            c c f 4 4 2 d 4 4 4 4 4 4 f c c 
            c c f 4 4 2 2 4 4 4 4 4 4 f c c 
            c c f 4 4 4 4 4 4 4 4 4 4 f c c 
            c c f 4 4 4 4 4 4 d 2 4 4 f c c 
            c c f 4 4 4 4 4 4 2 2 4 4 f c c 
            c c f 4 4 4 4 4 4 4 4 4 4 f c c 
            c c f 4 4 4 4 4 4 4 4 4 4 f c c 
            c c f 4 4 4 4 4 4 4 4 4 4 f c c 
            c c f 4 4 2 d 4 4 4 4 4 4 f c c 
            c c f 4 4 2 2 4 4 4 2 d 4 f c c 
            c c f 4 4 4 4 4 4 4 2 2 4 f c c 
            c c f 4 4 4 4 4 4 4 4 4 4 f c c 
            c c f 4 4 4 4 4 4 4 4 4 4 f c c 
            c f f f f f f f f f f f f f f c 
            `, SpriteKind.Win_Spot)
        animation.runImageAnimation(
        Win_Portal,
        [img`
            . f f f f f f f f f f f f f f . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 2 4 4 4 4 4 4 2 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 2 4 4 4 4 4 f . . 
            . . f 2 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 2 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 2 4 4 4 4 4 2 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 2 4 4 4 4 4 4 2 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 2 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . f f f f f f f f f f f f f f . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 2 4 4 4 4 4 4 2 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 2 4 4 4 4 f . . 
            . . f 4 2 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 2 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 2 4 4 4 2 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 2 4 4 4 4 2 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 2 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 2 4 4 f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . f f f f f f f f f f f f f f . 
            . . f 4 4 2 4 4 4 4 4 4 2 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 2 4 4 4 4 4 f . . 
            . . f 4 4 2 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 2 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 2 4 2 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 2 4 4 4 4 4 4 2 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 2 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 2 4 f . . 
            . . f 4 2 4 4 4 4 4 4 4 4 f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . f f f f f f f f f f f f f f . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 2 4 4 4 4 f . . 
            . . f 4 4 4 2 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 2 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 2 4 4 4 2 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 2 4 4 4 4 4 4 2 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 2 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 2 f . . 
            . . f 2 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 2 4 4 4 2 4 4 f . . 
            . f f f f f f f f f f f f f f . 
            `],
        200,
        true
        )
        tiles.placeOnTile(Win_Portal, value)
    }
}
let Win_Portal: Sprite = null
let Goober: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`23001000050c0505050505050505050505050505050505050505050505050505050505050505050d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d05050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050905050505050505050505050505050505050505050505050505050505050c0d0d0d0d0d050505050505050505050505050505050505050505050505050505050d0b050505050505050a050505050505050505050505050505050505050505050505050c05050505050501020102020201010202020202020202010202010102020201010202020202020202020304020103010202020302020102020204030302020201020102020201020201020202000002040003010204000401020202020000000402020202020202010203030304020200000600000004060000000202040306000000000203010402030302060000000001030000070000000007000000060400000700000000060004000600000407000000000600000000000000000000000007000000000000000007000000070000000000000000070000000000000000000000000000000000000000000000000000000000000000000000000808080808080808080808080808080808080808080808080808080808080808080808`, img`
    ...................................
    .2222222222222222222222222222222...
    ...................................
    ...................................
    ...................................
    .............................222222
    ............................22.....
    ............................2......
    22222222222222222222222222222222222
    22222222222222222222222222222222222
    ..22.2222.222222...2222222222222222
    ......2....2222.....22222222.....22
    ............2.........2....2.......
    ...................................
    ...................................
    ...................................
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile5,myTiles.tile7,myTiles.tile6,myTiles.tile8,myTiles.tile3,myTiles.tile9,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15], TileScale.Sixteen))
Startlevel()
Goober.setFlag(SpriteFlag.AutoDestroy, false)
game.onUpdate(function () {
    Goober.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f 4 4 4 4 4 f . . . . 
        . . . f f 4 4 4 4 4 4 4 f . . . 
        . . f 4 4 4 4 f 4 4 f 4 4 f . . 
        . f 4 4 4 4 4 f 4 4 f 4 4 f . . 
        . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
        . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
        . f f 4 4 4 4 4 4 4 4 f f . . . 
        . . . f f f f f f f f . . . . . 
        `)
    if (Goober.vy < 0) {
        Goober.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . f f f 4 f f f f . . . 
            . . . . . f 4 4 4 4 4 4 f f . . 
            . . . f f f 4 f 4 4 f 4 4 f . . 
            . . f f 4 4 4 f 4 4 f 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 4 f . . 
            . . f 4 4 4 4 4 4 4 4 4 f f . . 
            . f f 4 4 4 4 4 4 4 4 4 f . . . 
            . f 4 4 4 4 4 4 4 4 4 4 f . . . 
            . f f f 4 f f 4 4 4 4 f f . . . 
            . . . . f . . f f f f . . . . . 
            . . 4 4 . . . f . . . . . . . . 
            . . . . . 4 . . . . . . . . . . 
            `)
    } else if (Goober.vy > 0) {
        Goober.setImage(img`
            . . . 4 . . . 4 . . . . . . . . 
            . . . . 4 . . . . f f f f . . . 
            . f . . . . . . f 4 . 4 f . . . 
            . f . . . f . . f f 4 4 f . . . 
            . f f . f 4 f . . f 4 4 f f . . 
            . f 4 f 4 4 4 f f 4 4 4 4 f f . 
            . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
            . . f 4 4 4 4 4 4 4 4 4 4 4 f . 
            . . f 4 4 4 4 4 f 4 4 f 4 4 f . 
            . . f 4 4 4 4 4 f 4 4 f 4 4 f . 
            . . f f f 4 4 4 4 4 4 4 4 f f . 
            . . . . f f 4 4 4 4 4 4 4 f . . 
            . . . . . f f f 4 4 4 f f f . . 
            . . . . . . . f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Goober.x % 2 == 0) {
        Goober.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f 4 4 4 4 4 f . . . . 
            . . . f f 4 4 4 4 4 4 4 f . . . 
            . . f 4 4 4 4 f 4 4 f 4 4 f . . 
            . f 4 4 4 4 4 f 4 4 f 4 4 f . . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
            . f f 4 4 4 4 4 4 4 4 f f . . . 
            . . . f f f f f f f f . . . . . 
            `)
    } else {
        if ((Goober.isHittingTile(CollisionDirection.Left) || Goober.isHittingTile(CollisionDirection.Right)) && Goober.vy >= 0) {
            Goober.vy = 0
            Goober.ay = 0
            Goober.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . f f 
                . . . . . . . . . . . . . f 4 f 
                . . . . . . . . . . . f f 4 4 f 
                . . . . . . . . . . f 4 4 4 4 f 
                . . . . . . . . . . f 4 f f 4 f 
                . . . . . . . . . f 4 4 4 4 4 f 
                . . . . . . . . . f 4 4 f f 4 f 
                . . . . . . . . . f 4 4 4 4 4 f 
                . . . . . . . . . f 4 4 4 4 4 f 
                . . . . . . . . . . f 4 4 4 4 f 
                . . . . . . . . . . . f 4 4 4 f 
                . . . . . . . . . . . . f f f f 
                . . . . . . . . . . . . . . . 4 
                . . . . . . . . . . . . . . . 4 
                . . . . . . . . . . . . . . . 4 
                `)
        } else {
            Goober.ay = 100
        }
        if (Goober.vx < 0 || Goober.isHittingTile(CollisionDirection.Left)) {
            Goober.image.flipX()
        }
    }
})
