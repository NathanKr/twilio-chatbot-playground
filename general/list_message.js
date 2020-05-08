console.log("app is loading");

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

client.messages
  .list()
  .then((messages) =>
    messages.map((msg) =>
      console.log(`from : ${msg.from} , to : ${msg.to} , body : ${msg.body}`)
    )
  )
  .catch((err) => console.log(err));
