gatorLog.begin()
gatorLog.mkDirectory("tijdsmeting")
gatorLog.mkDirectory("temperatuurmeting")
gatorRTC.set24Time(13, 28, 0)
gatorRTC.setDate(
dayNames.Monday,
Months.January,
5,
20
)
basic.forever(function () {
    gatorLog.openFile("tijdsmeting")
    gatorLog.writeLine(gatorRTC.getTime())
    gatorLog.openFile("temperatuursmeting")
    gatorLog.writeLine(convertToText(input.temperature()))
})
