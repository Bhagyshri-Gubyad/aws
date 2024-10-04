# created policy of start and stop instace, created iam role and attach that policy, to lambda function
  #created lambda function of stop , python function 
***
import boto3

def lambda_handler(event, context):
    ec2 = boto3.client('ec2', region_name='us-east-1')  # Specify your region

    # List of EC2 instance IDs to start
    instance_ids = ['i-086818d1e82851567']

    # Start the instances
    ec2.start_instances(InstanceIds=instance_ids)

    return f'Started instances: {instance_ids}'

*****
#automate process via cldwatch event
#create rule of type schedule, give cron job exp 
6.30 am ust + 5.30 = 12 pm ist
8 am ist = 8 -5.30 = 2.30 am ust 
