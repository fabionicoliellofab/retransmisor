radio.onReceivedValue(function (name, value) {
    OLED.writeStringNewLine(name)
    OLED.writeNumNewLine(value)
    basic.pause(2000)
    if (name == "Presion") {
        radio.sendValue("Presion", value)
    }
    if (name == "Temp") {
        radio.sendValue("Temp", value)
    }
    if (name == "Humedad") {
        radio.sendValue("Humedad", value)
    }
})
radio.setTransmitPower(7)
radio.setGroup(1)
OLED.init(128, 64)
