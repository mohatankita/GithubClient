import { Component, OnInit } from '@angular/core';
import { ApiService } from '../userinfo.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  profile: any;
  user: any;
  repos: any;
  events: any;
  private userId: string;
  followers: any;
  following: any;
  gists: any;
  userrepo: any;
  gistTemp: any;
  loading: boolean = false;
  
  constructor(private _http: ApiService,
              private router: Router) { }

  async ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.loading = true;
    if (sessionStorage.getItem('username')) {
      this.userId = sessionStorage.getItem('username');
      await this._http.getUser(this.userId).subscribe(
        data => {
          this.user = data;
          this.getDetails();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }

    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
  getDetails() {
    this.getFollowers();
    this.getFollowing();
    this.getRepo();
    this.getGist();
    this.getEvents();
  }

  // Get repos
  getRepo() {
    this._http.getRepo(this.userId).subscribe(
      data => {
        this.userrepo = data;
      },
      error => {
        console.log(error);
        this.router.navigate(['**']);
      }
    );
  }
  // get gists
  getGist() {
    this._http.getGist(this.userId).subscribe(
      data => {
        this.gistTemp = data;
      },
      error => {
        console.log(error);
        this.router.navigate(['**']);
      }
    );
  }
  // get events
  getEvents() {
    this._http.getEvents(this.userId).subscribe(
      data => {
        this.events = data;
      },
      error => {
        console.log(error);
        this.router.navigate(['**']);
      }
    );
  }
  // Get followers
  getFollowers() {
    this._http.getFollowers(this.userId).subscribe(
      data => {
        this.followers = data;
      },
      error => {
        console.log(error);
        this.router.navigate(['**']);
      }
    );
  }
  // Get following
  getFollowing() {
    this._http.getFollowing(this.userId).subscribe(
      data => {
        this.following = data;
      },
      error => {
        console.log(error);
        this.router.navigate(['**']);
      }
    );
  }
}
