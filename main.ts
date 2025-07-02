radio.onReceivedValue(function (name, value) {
    OLED.writeStringNewLine("RECIBIENDO")
    if (name == "Presion") {
        radio.sendString("Presion")
        radio.sendNumber(value)
    } else {
        if (name == "Temp") {
            radio.sendString("Temp")
            radio.sendNumber(value)
        } else {
            if (name == "Humedad") {
                radio.sendString("Humedad")
                radio.sendNumber(value)
            }
        }
    }
})
radio.setTransmitPower(7)
radio.setGroup(1)
OLED.init(128, 64)
