// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
var SENDGRID_API_KEY='YOUR_API_KEY';
const sgMail = require('@sendgrid/mail');

const fs = require("fs");

const attach = fs.readFileSync(`${__dirname}/attach.csv`).toString("base64");

sgMail.setApiKey(SENDGRID_API_KEY);

const msg = {
  to: 'webdevelopercrane@gmail.com',
  from: 'softdeveloper1214@hotmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  attachments: [
    {
      content: attach,
      filename: "attach.csv",
      type: "application/csv",
      disposition: "attachment"
    }
  ]
};
sgMail.send(msg)
.then(response => console.log(response))
.catch(err => console.log(err));
