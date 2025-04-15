import SES from 'aws-sdk/clients/ses.js';


export const SENDER_EMAIL = "'Nexskills Store' <imadehsan4@gmail.com>";


export const port = 8080
export const MONGDB_CLOUD = "mongodb+srv://admin:12345@clusternexskills.kxrkp.mongodb.net/nexskills"
export const JWT_SECRET = "KJSDF74H234HJGKJH34GH34HGJH3G4"

const config = {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_KEY,
    region: AWS_REGION,
    apiVersion: AWS_VERSION 
}

export const AWSSES = new SES(config)

export const CLIENT_URL = 'http://localhost:5173/auth'
