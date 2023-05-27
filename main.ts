bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.LeftTriangle)
    ConnectedToBluetooth = 1
    while (ConnectedToBluetooth == 1) {
        DataReceivedFromBluetooth = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        serial.writeString(DataReceivedFromBluetooth)
        serial.writeLine("")
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Duck)
})
let DataReceivedFromBluetooth = ""
let ConnectedToBluetooth = 0
serial.redirectToUSB()
basic.showIcon(IconNames.Yes)
