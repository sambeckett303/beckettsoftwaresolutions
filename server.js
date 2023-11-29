// -----------------------------------------------
//               Define variables
// -----------------------------------------------

const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const express = require('express'),
    nodemailer = require('nodemailer'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 8080,
    app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// -----------------------------------------------
//               Configure Nodemailer
// -----------------------------------------------
const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENTID,
    process.env.OAUTH_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground' // Redirect URL
);
oauth2Client.setCredentials({
    refresh_token:  process.env.OAUTH_REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken();
  
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        accessToken,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});
  
transporter.on('token', token => {
    console.log('A new access token was generated');
    console.log('User: %s', token.user);
    console.log('Access Token: %s', token.accessToken);
    console.log('Expires: %s', new Date(token.expires));
});

// -----------------------------------------------
//               Configure Express
// -----------------------------------------------

app.set('port', port);
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/dist'));
app.set('views', './dist/views');


// -----------------------------------------------
//               Define Routes
// -----------------------------------------------

app.get('/', function (req, res) {
    console.log('got request for index.html page');
    res.render('index.html');
});

app.post('/quote', (req, res, next) => {
    if (!req.body.email || !req.body.description) {
        return res.status(400).json({ message: 'Missing email or description' });
    }
    const html =
    `<h2>New quote request!</h2>
    <p><span style="font-weight: bold; margin-right: 15px;">Email:</span>${req.body.email}</p>
    <p><span style="font-weight: bold; margin-right: 15px;">Description:</span>${req.body.description}</p>`;
    const mailOptions = {
        from: 'beckettsoftwaresolutions@gmail.com',
        to: 'sambeckett303@gmail.com',
        subject: `New quote request from ${req.body.email}!`,
        html,
        text: html.replace(/(<([^>]+)>)/gi, ''),
    };
    console.log('sending email quote', mailOptions);
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log(`Error: ${err}`);
            res.status(500).json({ message: `Something went wrong while sending requested email: ${err}` });
        } else {
            console.log('Email sent successfully');
            res.status(200).json({ success: true });
        }
    });
});

var server = app.listen(app.get('port'), function () {
    console.log('Server listening on port '+server.address().port);
});