console.log("app is loading");

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

client.messages
  .list()
  .then((messages) => {
    console.log(`total messages : ${messages.length}\n`);

    messages.map((msg) => {
      console.log(`from : ${msg.from} , to : ${msg.to} , body : ${msg.body}`);
    });
  })
  .catch((err) => console.log(err));
