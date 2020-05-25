console.log('app is loading')

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

console.log('NOTICE : using non free twilio number cost MONEY !!!');

const userName = 'נתן'
const body = `שלום ${userName}
אני פונה אליך בהמשך להתענינותך בקורס ערב לפיתוח תוכנה. הקורס מתחיל ב 31.5.
https://lodigital.org/
!!! ההרשמה עומדת להסגר.
!!! ניתן ליצור איתי קשר במידה ושינוי עתידך והשתלבות בעולם ההי-טק מענינת אותך.
נתן קרסני
0542220073
www.nathankrasney.com
`

client.messages
  .create({
    body: body,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: "0542220073"
  })
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
