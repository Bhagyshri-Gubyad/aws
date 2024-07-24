# created policy of start and stop instace, created iam role and attach that policy, to lambda function
  #created lambda function of stop , node js function 

const AWS = require('aws-sdk');

 exports.handler = (event, context, callback) => {
 const ec2 = new AWS.EC2({ region: event.InstanceRegion });
 
 ec2.stopInstances({ InstanceIds: [event.InstanceId] }).promise()
 .then(() => callback(null, `Successfully stopped ${event.InstanceId}`))
 .catch(err => callback(err));
 }; 
# here give parameter injson format while creating test event
{
  "InstanceRegion" : "us-east-1" ,
  "InstanceId" : "i-075367b515bef465d"
}
#for start instance change at line 9 , ec2.startInstances()

#automate process via cldwatch event
#create rule of type schedule, give cron job exp 
