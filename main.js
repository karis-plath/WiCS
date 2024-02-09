import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

// set size of 'canvas'
kaboom()

const SPEED = 320
setBackground(141, 183, 255)

// load a sprite from an image
loadSprite("sun", "/assets/sun.png")
loadSound("bell", "/assets/bell.mp3")

// make level


// init player
const player = add([
    sprite("sun"),
    pos(120, 80),
    area(),
    body()
])

// keyboard movement
onKeyDown("left", () => {
    player.move(-SPEED, 0)
})
onKeyDown("right", () => {
    player.move(SPEED, 0)
})
onKeyDown("up", () => {
    player.move(0, -SPEED)
})
onKeyDown("down", () => {
    player.move(0, SPEED)
})

// adding a completely unnecessary sound
onKeyPress("space", () => {
    play("bell", {
        detune: -1000,
    }
    )
})