import { me } from "appbit"
import { BodyPresenceSensor } from "body-presence"
import { HeartRateSensor } from "heart-rate"

var bodyPresence
var hrs = false     // Heart rate sensor
var hrm             // Heart rate monitor
var date

console.log("Application ID: " + me.applicationId);
console.log("Build ID: " + me.buildId);
console.log(`${me.appTimeoutEnabled}, ${me.appTimeoutEnabled}`)
console.log(me.permissions)

if (HeartRateSensor && me.permissions.granted("access_heart_rate")) {
    hrs = true
    hrm = new HeartRateSensor({ frequency: 1, batch: 5 })

    hrm.addEventListener("reading", () => {
        // When the batch is full
        console.log("\nHeartRateSensor Readings:")
        for (let i = 0; i < hrm.readings.timestamp.length; i++) {
            date = new Date(hrm.readings.timestamp[i])  // timestamp (ms) to time
            console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
            console.log(`BPM=${hrm.readings.heartRate[i]}`)
        }
    })

    hrm.addEventListener("error", (err) => {
        console.log(`Error at hrm: ${err}`)
    })
} else {
    console.log("The device doesn't have HearRateSensor or haven't the permission to use it")
    hrs = false
}

if (BodyPresenceSensor) {
    bodyPresence = new BodyPresenceSensor()
    bodyPresence.addEventListener("reading", () => {
        (bodyPresence.present && hrs) ? 
            hrm.start() : hrm.stop()
        // if (!bodyPresence.present) {
        //     console.log(`The device is not on the user's body.`)
        //     // Stop the heart rate monitor if exist
        //     if (hrs) hrm.stop()
        // } else {
        //     console.log(`The device is on the user's body.`)
        //     // Start the hear rate monitor if exist
        //     if (hrs) hrm.start()
        // }
    })
    bodyPresence.start()
}