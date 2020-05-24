console.log("app is loading");

const mailer = require("@sendgrid/mail");
mailer.setApiKey(process.env.SENDGRID_API_KEY);
const msg ={
    from : "natankrasney@gmail.com",
    to : "theyallabeitar1@gmail.com",
    subject : "sendGrid test",
    // text : "this is the text",
    html : "<h2>You cam also send html</h2>"
}

mailer.send(msg)
