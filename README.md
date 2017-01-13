# Sandbox code - Aurelia Contact List
Extending sample code from [Aurelia Docs](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/contact-manager-tutorial/1)
## TODO

- [x] Wiring in web-api to get contact data (from app relative path) 
  - [x] using [aurelia-fetch-client](http://aurelia.io/hub.html#/doc/article/aurelia/fetch-client/latest/http-services/1)
  - [x] and add polyfill for `window.fetch`: [github/fetch](https://github.com/github/fetch)
- [x] Restructure `./src` for `(m?-)v-vm` pattern
  - [x] move view related *view*.ts to `view-models/` folder
  - [x] update ViewLocator
- [x] Update with simple tests
- [ ] Switch web-api to get data using AWS-SDK, 
  - [ ] from AWS S3 storage blob
  - [ ] via API Gateway
  - [ ] to lambda functions
