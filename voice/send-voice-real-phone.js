console.log("send-voice is loading ...");

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

console.log("NOTICE : using non free twilio number cost MONEY !!!");

client.calls
  .create({
    // url: "http://demo.twilio.com/docs/voice.xml",
    // -- following is implemented using twilio assets
    url : "https://wine-hedgehog-8979.twil.io/assets/marketing-25-05-20.xml",
    to: process.env.NATHAN_PHONE_NUMBER,
    from: process.env.TWILIO_PHONE_NUMBER,
  })
  .then((call) => console.log(call))
  .catch((err) => console.log(err));
