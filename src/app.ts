import {Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {WebAPI} from './svc/web-api';

@inject(WebAPI)
export class App {
  router: Router;

  constructor(public api: WebAPI) {}

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Contacts';
    config.map([
      { route: '',              moduleId: './views/no-selection',   title: 'Select'},
      { route: 'contacts/:id',  moduleId: './views/contact-detail', name:'contacts' }
    ]);

    this.router = router;
  }
}