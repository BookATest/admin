#!/usr/bin/env bash

set -e

# Create AWS dir for credentials and config.
echo "Creating AWS config directory..."
mkdir ~/.aws

# Set AWS CLI credentials.
echo "Setting AWS credentials..."
touch ~/.aws/credentials
cat > ~/.aws/credentials << EOF
[default]
aws_access_key_id = $AWS_ACCESS_KEY_ID
aws_secret_access_key = $AWS_SECRET_ACCESS_KEY
EOF

# Set AWS CLI config.
echo "Setting AWS config..."
touch ~/.aws/config
cat > ~/.aws/config << EOF
[default]
region = $AWS_REGION
output = $AWS_DEFAULT_OUTPUT
EOF

# Get the .env file.
echo "Downloading .env file..."
aws secretsmanager get-secret-value \
    --secret-id ${ENV_SECRET_ID:-.env.admin} | \
    python -c "import json,sys;obj=json.load(sys.stdin);print obj['SecretString'];" > .env

# Build.
echo "Building..."
node_modules/.bin/vue-cli-service build --mode staging

# Deploy to S3.
echo "Deploying..."
node_modules/.bin/vue-cli-service s3-deploy --mode staging
