import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {InMemoryDbService, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TestData } from './testdata';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './header/header.component';
import { JwtInterceptor } from './service/jwt.service';
import { ErrorInterceptor } from './service/error.service';
import { fakeBackendProvider } from './service/fake.service';
// import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './data-subject.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    // NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule,
    InMemoryWebApiModule,
    InMemoryWebApiModule.forRoot(TestData)
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider, DataService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
                               