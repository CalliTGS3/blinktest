input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.House)
    basic.pause(100)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColor(0x00ff00)
    basic.showNumber(1 + 1)
})
basic.showString("hi!")
basic.forever(function () {
    basic.showIcon(IconNames.No)
    basic.pause(1000)
})
basic.forever(function () {
    basic.setLedColor(0x0000ff)
})
