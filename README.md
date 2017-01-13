# Sandbox code - Aurelia Contact List
Extending sample code from [Aurelia Docs](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/contact-manager-tutorial/1)

## Setup
1. Install [`aurelia-cli`](https://www.npmjs.com/package/aurelia-cli)
2. Open a terminal, `cd` to the `contact-manager` folder
3. Run the app using `au run` or `au run --watch`
4. Open `http://localhost:9000/` in a browser
5. BrowserSync's UI is available in `http://localhost:3001`

## Changes made to example code
- [x] Wiring in web-api to get contact data 
  - [x] from app relative path
  - [x] using [aurelia-fetch-client](http://aurelia.io/hub.html#/doc/article/aurelia/fetch-client/latest/http-services/1)
  - [x] adding polyfill for `window.fetch`: [github/fetch](https://github.com/github/fetch)
- [x] Restructure `./src` for `(m?-)v-vm` pattern
  - [x] move view related *view*.ts to `view-models/` folder
  - [x] update ViewLocator
- [x] Update with simple tests

## To do
- [ ] Switch web-api to get data using AWS-SDK, 
  - [ ] from AWS S3 storage blob
  - [ ] via API Gateway
  - [ ] to lambda functions
