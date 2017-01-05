import { HttpClient } from 'aurelia-fetch-client';

export class apiDataClient {
    httpClient = new HttpClient();

    defaultOptions = {
        baseUrl: '/',
        acceptType: 'application/json',
        credentials: 'same-origin'
    };

    options = this.defaultOptions;

    constructor(options?) {
        this.options = Object.assign({}, this.defaultOptions, options);

        this.httpClient.configure(config => {
            config
                .withBaseUrl(this.options.baseUrl)
                .withDefaults({
                    credentials: this.options.credentials,
                    headers: {
                        'Accept': this.options.acceptType,
                        'X-Requested-With': 'Fetch'
                    }
                })
                .withInterceptor({
                    request(request) {
                        console.log(`Requesting ${request.method} ${request.url}`);
                        return request;
                    },
                    response(response) {
                        console.log(`Received ${response.status} ${response.url}`);
                        return response;
                    }
                });
        });
    }

    fetch(url: string) {
        console.log(`Fetching ${url}...`);
        return this.httpClient.fetch(url);
    }

}