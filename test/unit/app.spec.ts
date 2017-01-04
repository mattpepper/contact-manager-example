import {App} from '../../src/app';
import {WebAPI} from '../../src/svc/web-api'
import * as $ from 'jquery';
import * as jasmineJq from 'jasmine-jquery'

let app = new App(new WebAPI());

describe('the app', () => {
  it('exposes the web-api', () => {
    expect(app.api).toBeDefined('App’s web-api should be defined.')
  });
});

describe('the api', () => {
  it('has an ‘isRequesting’ boolean property', () => {
    expect(app.api.isRequesting).toBeDefined('Api should have an ‘isRequesting’ boolean property defined.');
    expect(app.api.isRequesting).toBe(false, 'Api ‘isRequesting’ property should be `false`.');
  });
  
  it('has a ‘contacts’ array property', () => {
    expect(app.api.contacts).toBeDefined('Api should have a ‘contacts’ array property defined.');
    expect(app.api.contacts.length).toBe(0, 'Api ‘contacts’ property should be `empty`.');
  });

  it('has an ‘httpClient’ object', () => {
    expect(app.api.httpClient).toBeDefined('Api has an ‘httpClient’ object defined.');
  });

  it('has a ‘fetch’ method', () => {
    expect(app.api.fetch).toBeDefined('Api has a ‘fetch’ method defined.');
    expect($.isFunction(app.api.fetch)).toBe(true, 'Api has a ‘fetch’ method defined which is a function type.');
  });  

  it('has a ‘getContactList’ web method', () => {
    expect(app.api.getContactList).toBeDefined('Api has a ‘getContactList’ web method defined.');
    expect($.isFunction(app.api.getContactList)).toBe(true, 'Api has a ‘getContactList’ web method defined which is a function type.');
  });

  it('has a ‘getContactDetails’ web method', () => {
    expect(app.api.getContactDetails).toBeDefined('Api has a ‘getContactDetails’ web method defined.');
    expect($.isFunction(app.api.getContactList)).toBe(true, 'Api has a ‘getContactDetails’ web method defined which is a function type.');
  });

  it('has a ‘saveContact’ web method', () => {
    expect(app.api.saveContact).toBeDefined('Api has a ‘saveContact’ web method defined.');
    expect($.isFunction(app.api.saveContact)).toBe(true, 'Api has a ‘saveContact’ web method defined which is a function type.');
  });
});
