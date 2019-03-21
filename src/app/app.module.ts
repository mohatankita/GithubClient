import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// mdb import
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { NgxPaginationModule } from 'ngx-pagination';

import { LoginComponent } from './login/login.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AuthenticationService } from './authentication/authenticate.service';
import { ApiService } from './userinfo.service';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoaderComponent } from './loader/loader.component';
import { NouserComponent } from './nouser/nouser.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent,
    UserprofileComponent,
    NavheaderComponent,
    LoaderComponent,
    SearchuserComponent,
    NouserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatBadgeModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [AuthenticationService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
