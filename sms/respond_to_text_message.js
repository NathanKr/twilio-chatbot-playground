// --- you need to configure the URL as webhook : Messaging->a message come in 
// --- for testing you can use ngrok URL

const PORT = 8080;
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const express = require('express');
const app = express();

app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message("The Robots are coming! Head for the hills!");

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
