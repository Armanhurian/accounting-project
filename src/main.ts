import { appRoutingModule } from './app/app-routes.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


platformBrowserDynamic().bootstrapModule(appRoutingModule)
  .catch(err => console.error(err));
