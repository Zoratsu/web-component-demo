import {createApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {createCustomElement} from "@angular/elements";

(async () => {

  const app = await createApplication(appConfig);

  const appComponent = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('otp-web-component', appComponent);
})();
