import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {bootstrapApplication} from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { MathComponentComponent } from './app/math-component/math-component.component';

bootstrapApplication(MathComponentComponent);

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));
