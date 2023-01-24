import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, EmployeeComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [EmployeeComponent],
})
export class AppModule {}
