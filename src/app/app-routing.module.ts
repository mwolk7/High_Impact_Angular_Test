import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchAtmsComponent} from './screens/search-atms/search-atms.component';
import {TokenGuard} from './guards/token.guard';
import {LoginComponent} from './screens/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchAtmsComponent, canActivate: [TokenGuard]},
  {path: '**', redirectTo: 'search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const screensComponents = [
  LoginComponent,
  SearchAtmsComponent
];
