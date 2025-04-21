import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from 'src/component/student/student.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from 'src/component/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
