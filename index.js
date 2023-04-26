const mqtt = require("mqtt");

const conn  = "mqtt://192.168.1.119:1883"

const client = mqtt.connect(
  conn,
    {
        username: "admin",
        password: "1234"
    }
)

client.on("connect", () => {
    const data = {
        DeviceId:"A2", 
        Co2: "22", 
        PM25:12, 
        VOC: 12, 
        PressureValue: 23, 
        SupplyFanStatusSpeed: 12,
        ExhaustFan: 22, 
        Filter: 100
    }

    const datastr = JSON.stringify(data)
    client.publish("wb/reciver", datastr,() => {
        console.log("sent!")
    })
})