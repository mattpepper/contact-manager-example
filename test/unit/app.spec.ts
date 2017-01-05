import {Router, RouterConfiguration} from 'aurelia-router'
import {Container} from 'aurelia-dependency-injection';
import {History} from 'aurelia-history';

import {inject} from 'aurelia-framework';
import { App } from '../../src/app';
import { WebAPI } from '../../src/svc/web-api'

let app = new App(new WebAPI());
app.configureRouter(new RouterConfiguration(), new Router(new Container(), new History()));

describe('the app', () => {
  it('has an `api` object', () => {
    expect(app.api).toBeDefined('The `api` should be defined.')
  });

  it('has a `configRouter` method defined', () => {
    expect(app.configureRouter).toBeDefined('The `configRouter` should be defined.');
  });

  it('with a `router` property', () => {
    expect(app.router).toBeDefined('The `router` should be defined.');
  });
});
