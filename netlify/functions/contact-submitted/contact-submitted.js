const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
    // Set your SendGrid API key
    console.log('Inside handler function!');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Parse the form data
    const formData = JSON.parse(event.body);

    // Create the email content
    const msg = {
        to: 'sambeckett303@gmail.com', // Replace with your email
        from: 'donotreply@beckettsoftwaresolutions.com', // Replace with your "verified" sender
        subject: 'New Contact Form Submission',
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nDescription: ${formData.description}`,
    };

    try {
        // Send the email
        await sgMail.send(msg);
        return {
            statusCode: 200,
            body: 'Email sent successfully!',
        };
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
        return {
            statusCode: error.code,
            body: JSON.stringify({msg: error.message}),
        };
    }
};