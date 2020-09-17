console.log("app is loading ...");

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendboxWhatsup = "whatsapp:+14155238886";

console.log(`verify the this sendbox is updated : ${sendboxWhatsup}`);

client.messages
  .create({
    body: "hello from send-sendbox-whatsup-message.js",
    from: sendboxWhatsup,
    to: `whatsapp:${process.env.NATHAN_PHONE_NUMBER}`,
  })
  .then((message) => console.log(message.sid))
  .catch((err) => console.log(err));

  console.log('i see the message in twilio monitor but it was not sent to my phone');