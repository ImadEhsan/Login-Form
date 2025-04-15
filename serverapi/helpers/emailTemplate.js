import * as config from '../config/config.js';


export const sendingEmail = (receiver_email, subject, message) => {
    return {
        Source: config.SENDER_EMAIL,
        Destination: {
            ToAddresses: [receiver_email]
        },
        Message: {
            Subject: {
                Charset: 'UTF-8',
                Data: `NeXskills Store - ${subject}`,
            },
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: `
                    <html>
                    <body>
                    <h1>NeXskills Store</h1>
                    <p>${message}</p>
                    </body>

                    </html>`
                }
            }
        }
    }

}