input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
    }
})
let counter = 0
while (counter <= 5) {
    basic.showNumber(counter)
    music.playTone(349, music.beat(BeatFraction.Whole))
    counter += 1
}
basic.clearScreen()
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
})
