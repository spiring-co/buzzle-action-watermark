const addWatermark = require("./index")

const output = "output.mp4";
let input = "golden.mp4"
const watermark = 'https://img.apksum.com/77/wedding.invitation.videos/3.1.0/icon.png'
let started = Date.now()
addWatermark(
    { output: "C:\\Users\\Utkarsh\\Desktop", workpath: "C:\\Users\\Utkarsh\\Desktop" }, { logger: { log: console.log }, workpath: "C:\\Users\\Utkarsh\\Desktop" }, {
    input, watermark, output,
    onStart: () => {
        console.log("Started")
        started = Date.now()
    },
    onComplete: () => console.log("completed in", (Date.now() - started) / 1000, " secs")
})
