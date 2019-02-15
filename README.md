# Book A Test - Admin

The admin web app component to the [API](https://github.com/BookATest/api).

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](https://github.com/BookATest/admin#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

* [Book A Test - API](https://github.com/BookATest/api)
* [Node.js](https://nodejs.org)
* [AWS CLI (for deploying)](https://aws.amazon.com/cli)

### Installing

Start by installing the dependencies.

```bash
npm install
```

Set the configuration by creating the environment file.

```bash
# If needed, change the values to fit in with your installation.
cat > .env.local << EOF
VUE_APP_URI=http://localhost:8080
VUE_APP_API_URI=http://localhost
VUE_APP_OAUTH_CLIENT_ID=1

VUE_APP_S3D_BUCKET=name_of_s3_bucket_to_host_site_on
VUE_APP_S3D_CLOUDFRONT_ID=id_of_cloudfront_distribution
EOF
```

Run a server with hot reload.

```bash
npm run serve
```

You should now have you app up and running, ready to use.

## Running the tests
```bash
# All tests.
npm run test

# Only init tests.
npm run test:unit

# Only end-to-end tests.
npm run test:e2e

# Code style tests.
npm run lint
```

## Deployment

This project is intended to be hosted on AWS infrastructure and includes a deployment script for uploading to an S3 bucket behind a CloudFront CDN.

```bash
# Build.
npm run build

# Deploy.
npm run deploy
```

## Built with

* [Vue.js](https://vuejs.org) - The JavaScript Framework Used
* [Vue CLI](https://cli.vuejs.org) - Project management tooling

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the
process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the
[tags on this repository](https://github.com/BookATest/admin/tags).

## Authors

* [Ayup Digital](https://ayup.agency/)

See also the list of [contributors](https://github.com/BookATest/admin/contributors) who
participated in this project.

## License

This project is licensed under the GNU License - see the [LICENSE.md](LICENSE.md) file for details.
