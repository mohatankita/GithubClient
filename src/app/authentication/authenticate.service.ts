import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../userinfo.service';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  authenticatedUsername: string;

  private AUTH_CONFIG = {
    apiKey: "AIzaSyCMaGw6ua9kuRUXDFiWwYj86IK3vusV0nk",
    authDomain: "mygithub-project.firebaseapp.com",
    projectId: "mygithub-project",
    storageBucket: "mygithub-project.appspot.com",
    messagingSenderId: "1055316200125"
  };

  constructor(public router: Router,
    public userService: ApiService,
  ) {
    firebase.initializeApp(this.AUTH_CONFIG);
   }

  private provider = new firebase.auth.GithubAuthProvider();

  public githubSignin() {
    let self = this;
    firebase.auth().signInWithPopup(this.provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.additionalUserInfo;
        sessionStorage.setItem('username',user.username);
        sessionStorage.setItem('access-token',token);
        self.router.navigate(['/profile']);
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
  }

  public githubSignout() {
    firebase.auth().signOut()
      .then(function () {
        console.log('Signout successful!')
      }, function (error) {
        console.log('Signout failed')
      });
  }
}