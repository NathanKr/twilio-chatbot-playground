// --- take accountSidTestCredntial / authTokenTestCredntial from
// --- https://www.twilio.com/console/voice/project/test-credentials

const test_credential = require("../general/test_credential_config.json");

//This phone number is valid and available.
const magicPhoneNumner = "+15005550006";

// you might want to use the following : 
//  +15005550001	This phone number is invalid.
//  +15005550000	This phone number is unavailable.
//  +15005550006	This phone number is valid and available.

console.log(`use magic number ${magicPhoneNumner} - free`)

const accountSidTestCredntial = test_credential.accountSid;
const authTokenTestCredntial = test_credential.authToken;

console.log(`accountSidTestCredntial : ${accountSidTestCredntial}`);
console.log(`authTokenTestCredntial : ${authTokenTestCredntial}`);


const client = require("twilio")(
  accountSidTestCredntial,
  authTokenTestCredntial
);

// --- send sms
client.messages
  .create({
    body: "All in the game, yo",
    from: magicPhoneNumner,
    to: "+19389991491",
  })
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
