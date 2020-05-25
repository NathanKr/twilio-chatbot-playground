console.log("send-voice is loading ...");

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

console.log("NOTICE : using non free twilio number cost MONEY !!!");

client.calls
  .create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "972542220073",
    from: process.env.TWILIO_PHONE_NUMBER,
  })
  .then((call) => console.log(call))
  .catch((err) => console.log(err));