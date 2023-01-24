import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
//import { MathComponentComponent } from './math-component/math-component.component';
import { MathServiceService } from 'libs/my-app-lib/src/lib/math-service/math-service.service';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule],
  providers: [MathServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
