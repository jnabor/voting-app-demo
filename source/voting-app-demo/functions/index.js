const functions = require('firebase-functions');

const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = functions.config().sendgrid.key
sgMail.setApiKey(SENDGRID_API_KEY);

const msg = {
  to: 'sonabstudios@gmail.com',
  from: 'sonabstudios@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

exports.httpEmail = functions.https.onRequest((req, res) => {
  sgMail.send(msg);
})
