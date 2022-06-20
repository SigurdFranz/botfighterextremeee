radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.go(BBDirection.Forward, 89)
    } else if (receivedNumber == 2) {
        bitbot.go(BBDirection.Reverse, 100)
    } else if (receivedNumber == 3) {
        bitbot.rotate(BBRobotDirection.Left, 28)
    } else if (receivedNumber == 4) {
        bitbot.rotate(BBRobotDirection.Right, 28)
    } else if (receivedNumber == 5) {
        bitbot.stop(BBStopMode.Coast)
    }
})
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
basic.showIcon(IconNames.Giraffe)
bitbot.setLedColor(0xFF00FF)
