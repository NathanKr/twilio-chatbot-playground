// --- you need to configure the URL as webhook : Messaging->a message come in 
// --- for testing you can use ngrok URL

const PORT = 8080;
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const express = require('express');
const app = express();

// used for json inside body 
//app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))

app.post("/sms", (req, res) => {
  // -- body has info like : From , To , message body , ...
  console.log(req.body)

  const twiml = new MessagingResponse();

  twiml.message("The Robots are coming! Head for the hills!");

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
