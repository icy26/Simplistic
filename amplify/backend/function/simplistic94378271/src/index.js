
/* Amplify Params - DO NOT EDIT
  ENV
  REGION
  SES_EMAIL
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const aws = require('aws-sdk')
const ses = new aws.SES()

exports.handler = async (event) => {
  console.log("Lambda Triggered");
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const prospectName = streamedItem.dynamodb.NewImage.name.S
      const prospectEmail = streamedItem.dynamodb.NewImage.email.S

      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: { Data: 'Candidate Submission' },
            Body: {
              Text: { Data: `My name is ${prospectName}. You can reach me at ${prospectEmail}` },
            },
          },
        })
        .promise()
    }
  }
  return { status: 'done' }
}