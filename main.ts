basic.showString("hi!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.No)
    basic.pause(1000)
})
basic.forever(function () {
    basic.setLedColor(0xff0000)
})
