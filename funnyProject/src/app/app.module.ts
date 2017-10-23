import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutes} from './app.route';
import { AppComponent } from './app.component';
import { CircularComponent } from './circular/circular.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CircularComponent,
    SearchComponent,
    UserComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, MatButtonModule, MatCheckboxModule, NgbModule.forRoot(), RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
