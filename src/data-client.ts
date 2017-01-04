import { HttpClient } from 'aurelia-fetch-client';

export class apiDataClient {
    httpClient = new HttpClient();
    
    constructor() {
        this.httpClient.configure(config => {
            config
                .withBaseUrl('/')
                .withDefaults({
                    credentials: 'same-origin',
                    headers: {
                        'Accept': 'application/json',
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