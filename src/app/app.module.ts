import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, StudentComponent],
  bootstrap: [StudentComponent],
})
export class AppModule {}
