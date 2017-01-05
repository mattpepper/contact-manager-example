import {ViewLocator, Aurelia, Origin} from 'aurelia-framework'
import environment from './system/environment';
import 'whatwg-fetch';

//Configure Bluebird Promises.
(<any>Promise).config({
  longStackTraces: environment.debug,
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  ViewLocator.prototype.convertOriginToViewUrl = (origin: Origin): string => {
    let moduleId = origin.moduleId,
      id = (moduleId.endsWith('.js') || moduleId.endsWith('.ts')) ? moduleId.substring(0, moduleId.length - 3) : moduleId,
      viewPath =  id.replace('view-models/', 'views/') + '.html';
console.log(id);
console.log(viewPath);
    return viewPath;
  };

  aurelia.start().then(() => aurelia.setRoot());
}
