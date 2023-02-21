input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.House)
    basic.pause(100)
})
basic.showString("hi!")
basic.forever(function () {
    basic.showIcon(IconNames.No)
    basic.pause(1000)
})
basic.forever(function () {
    basic.setLedColor(0x0000ff)
})
