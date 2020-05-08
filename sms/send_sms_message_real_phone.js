console.log('app is loading')

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

console.log('NOTICE : using non free twilio number cost MONEY !!!')

client.messages
  .create({
    body: "All in the game, yo",
    from: process.env.TWILIO_PHONE_NUMBER,
    to: "972542220073"
  })
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
