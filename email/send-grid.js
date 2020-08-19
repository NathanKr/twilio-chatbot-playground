const mailer = require("@sendgrid/mail");

console.log("app is loading");

mailer.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  from: "natankrasney@gmail.com",
  // --- the email will be sent to span if from and to are equal
  to: "theyallabeitar1@gmail.com",
  subject: "sendGrid test !!!! ",
  // text : "this is the text",
  html: "<h2>You can also send html</h2>",
};

mailer
  .send(msg)
  .then((clientResponse) => console.log(clientResponse))
  .catch((errReason) => console.log(errReason));
