radio.onReceivedValue(function (name, value) {
    OLED.writeStringNewLine("RECIBIENDO")
    if (name == "Presion") {
        radio.sendString(name)
        radio.sendNumber(value)
    } else {
        if (name == "Temp") {
            radio.sendString(name)
            radio.sendNumber(value)
        } else {
            if (name == "Humedad") {
                radio.sendString(name)
                radio.sendNumber(value)
            }
        }
    }
})
radio.setTransmitPower(7)
radio.setGroup(1)
OLED.init(128, 64)
