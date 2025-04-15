import SES from 'aws-sdk/clients/ses.js';

// const AWS_ACCESS_KEY_ID = 'AKIA46ZDFGESLPQCM5XF'
// const AWS_SECRET_KEY = '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'
// const AWS_REGION = 'us-east-1'
// const AWS_VERSION = '2010-12-01'

const AWS_ACCESS_KEY_ID = 'AKIA5CBDRAOEHH2R3YQ3'
const AWS_SECRET_KEY = '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'
const AWS_REGION = 'eu-north-1'
const AWS_VERSION = '2010-12-01'

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