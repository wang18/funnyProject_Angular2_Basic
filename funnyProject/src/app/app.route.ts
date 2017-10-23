import {Routes} from '@angular/router';
import {CircularComponent} from "./circular/circular.component";
import {SearchComponent} from "./search/search.component";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";

export const AppRoutes: Routes = [
  {
    path: 'circular',
    component: CircularComponent
  },  {
    path: '',
    component: HomeComponent
  }, {
    path: 'search',
    component: SearchComponent
  }, {
    path: 'user/:userId',
    component: UserComponent
  }
];
