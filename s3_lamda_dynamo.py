
#1 Iam role -> name , aws services , use-case - lambda, create role, select dyanmo db full access, enter role name 
#done
#2 lambda function : 
#create function , enter name, runtime = python 3.6, change def execution rle= above created role select , done
#now to add trigger , create s3 bkt in same region of function and bkt should be available to public
#3 s3 bkt creation
#4 add trigger select bkt name and event type ie. put/delete / all 
#5 paste code 

import boto3
from uuid import uuid4
def lambda_handler(event, context):
    s3 = boto3.client("s3")
    dynamodb = boto3.resource('dynamodb')
    for record in event['Records']:
        bucket_name = record['s3']['bucket']['name']
        object_key = record['s3']['object']['key']
        size = record['s3']['object'].get('size', -1)
        event_name = record ['eventName']
        event_time = record['eventTime']
        dynamoTable = dynamodb.Table('newtable')
        dynamoTable.put_item(
            Item={'unique': str(uuid4()), 'Bucket': bucket_name, 'Object': object_key,'Size': size, 'Event': event_name, 'EventTime': event_time})

#6 now create dynamo db table with newtable bkt name and unique partition key.
#7 upload filein s3 bkt  wll auto store metadata in dynamo db table , with scan mtd.

#and delete iam role, bkt, dynamodb, lambda function
