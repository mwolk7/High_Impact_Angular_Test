import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchAtmsComponent } from './screens/search-atms/search-atms.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import {ApiService} from './providers/api.service';

@NgModule({
  declarations: [
    SearchAtmsComponent,
    AppComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ApiService],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
