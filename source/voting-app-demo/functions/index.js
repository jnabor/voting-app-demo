const functions = require('firebase-functions');

const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = functions.config().sendgrid.key
sgMail.setApiKey(SENDGRID_API_KEY);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const msg = {
  to: 'sonabstudios@gmail.com',
  from: 'donotreply@voting-app.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

exports.httpEmail = functions.https.onRequest((req, res) => {
  sgMail.send(msg);
})
