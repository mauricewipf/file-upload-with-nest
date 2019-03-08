# File Upload with Nest

## Description

A showcase how to upload files with **Nest Framework**.

Nest comes with [multer](https://www.npmjs.com/package/multer) under the hood for file uploading. 
There is a section about [File upload in the Nest documentation](https://docs.nestjs.com/techniques/file-upload). 

## Configuration

The configuration happens in `multerOptions`.

In the project the following options are used:

- File size limit
- Check mimetype
- Storage destination is `files/` folder
- The original file name is overwritten with a `uuid`
- More options are available. See [multer documentation](https://www.npmjs.com/package/multer#multeropts).

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/udacity/ud777-writing-readmes/blob/master/LICENSE).
