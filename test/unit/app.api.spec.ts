import { App } from '../../src/app';
import { WebAPI } from '../../src/svc/web-api'
import * as $ from 'jquery';
import * as jasmineJq from 'jasmine-jquery'


describe('the App api has', () => {
  let app: App = new App(new WebAPI({ baseUrl: '/test/' })); // acceptType, credentials

  describe('an ‘httpClient’ object', () => {
    it('defined', () => {
      expect(app.api.httpClient).toBeDefined('Api has an ‘httpClient’ object defined.');
    });

    describe('with `defaultOptions` values', () => {
      it('defined', () => {
        expect(app.api.defaultOptions).toBeDefined('Api default values should be defined');
      });

      it('with an `acceptType` property.', () => {
        expect(app.api.defaultOptions.acceptType).toBeDefined('Api default values should define a `acceptType` value.');
        expect(app.api.defaultOptions.acceptType).toBe('application/json', 'Api default value for `acceptType` should define be ‘application/json’.');
      });

      it('with a `baseUrl` property.', () => {
        expect(app.api.defaultOptions.baseUrl).toBeDefined('Api default values should define a `baseUrl` value.');
        expect(app.api.defaultOptions.baseUrl).toBe('/', 'Api default value for `baseUrl` should define be ‘/’.');
      });

      it('with a `credentials` property.', () => {
        expect(app.api.defaultOptions.credentials).toBeDefined('Api default values should define a `credentials` value.');
        expect(app.api.defaultOptions.credentials).toBe('same-origin', 'Api default value for `credentials` should define be ‘same-origin’.');
      });
    });

    describe('with `options` values', () => {
      it('defined', () => {
        expect(app.api.options).toBeDefined('Api options values should be defined');
      });

      it('with an `acceptType` property.', () => {
        expect(app.api.options.acceptType).toBeDefined('Api options values should define a `acceptType` value.');
        expect(app.api.options.acceptType).toBe(app.api.defaultOptions.acceptType, 'Api options value for `acceptType` should be ' + app.api.defaultOptions.acceptType);
      });
 
      it('with a `baseUrl` property.', () => {
        expect(app.api.options.baseUrl).toBeDefined('Api options values should define a `baseUrl` value.');
        expect(app.api.options.baseUrl).not.toBe(app.api.defaultOptions.baseUrl, 'Api options value for `baseUrl` should be overridden to ' + app.api.options.baseUrl);
        expect(app.api.options.baseUrl).toBe('/test/', 'Api options value for `baseUrl` should define be ‘/test/’.');
      });

      it('with a `credentials` property.', () => {
        expect(app.api.options.credentials).toBeDefined('Api options values should define a `credentials` value.');
        expect(app.api.options.credentials).toBe(app.api.defaultOptions.credentials, 'Api options value for `credentials` should be ' + app.api.defaultOptions.credentials);
      });
    });

    describe('with settings from `options`', () => {
      it ('`baseUrl` value', () => {
        expect(app.api.httpClient.baseUrl).toBeDefined('The `httpclient.baseUrl` should be defined.');
        expect(app.api.httpClient.baseUrl).toBe(app.api.options.baseUrl, 'The `httpclient.baseUrl` value should be ' + app.api.options.baseUrl);
      }); 
      
      it ('`credentials` value', () => {
        expect(app.api.httpClient.defaults.credentials).toBeDefined('The `httpclient.defaults.credentials` should be defined.');
        expect(app.api.httpClient.defaults.credentials).toBe(app.api.options.credentials, 'The `httpclient.defaults.credentials` value should be ' + app.api.options.credentials);        
      }); 
      
      it ('`accept` value', () => {
        let acceptType = Object.getOwnPropertyDescriptor(app.api.httpClient.defaults.headers, 'Accept');
        expect(acceptType).toBeDefined('The `httpclient.defaults.headers.Accept` should be defined.');
        expect(acceptType.value).toBe(app.api.options.acceptType, 'The `httpclient.defaults.headers.Accept` value should be ' + app.api.options.acceptType);        
      });
    });
  });

  it('an ‘isRequesting’ boolean property', () => {
    expect(app.api.isRequesting).toBeDefined('Api should have an ‘isRequesting’ boolean property defined.');
    expect(app.api.isRequesting).toBe(false, 'Api ‘isRequesting’ property should be `false`.');
  });

  it('a ‘contacts’ array property', () => {
    expect(app.api.contacts).toBeDefined('Api should have a ‘contacts’ array property defined.');
    expect(app.api.contacts.length).toBe(0, 'Api ‘contacts’ property should be `empty`.');
  });

  it('a ‘fetch’ method', () => {
    expect(app.api.fetch).toBeDefined('Api has a ‘fetch’ method defined.');
    expect($.isFunction(app.api.fetch)).toBe(true, 'Api has a ‘fetch’ method defined which is a function type.');
  });

  it('a ‘getContactList’ web method', () => {
    expect(app.api.getContactList).toBeDefined('Api has a ‘getContactList’ web method defined.');
    expect($.isFunction(app.api.getContactList)).toBe(true, 'Api has a ‘getContactList’ web method defined which is a function type.');
  });

  it('a ‘getContactDetails’ web method', () => {
    expect(app.api.getContactDetails).toBeDefined('Api has a ‘getContactDetails’ web method defined.');
    expect($.isFunction(app.api.getContactList)).toBe(true, 'Api has a ‘getContactDetails’ web method defined which is a function type.');
  });

  it('a ‘saveContact’ web method', () => {
    expect(app.api.saveContact).toBeDefined('Api has a ‘saveContact’ web method defined.');
    expect($.isFunction(app.api.saveContact)).toBe(true, 'Api has a ‘saveContact’ web method defined which is a function type.');
  });
});