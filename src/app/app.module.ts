import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './main-components/header/header.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';

@NgModule({
  declarations: [AppComponent, CardComponent, HomeComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
