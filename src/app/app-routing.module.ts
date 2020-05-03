import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchAtmsComponent} from './components/search-atms/search-atms.component';
import {TokenGuardGuard} from './guards/token-guard.guard';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchAtmsComponent, canActivate: [TokenGuardGuard]},
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
