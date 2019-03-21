import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NouserComponent } from './nouser/nouser.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'profile', component: UserprofileComponent },
  { path: 'search/:id', component: SearchuserComponent },
  { path: 'nouser', component: NouserComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
