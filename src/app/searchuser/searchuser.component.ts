import { Component, OnInit } from '@angular/core';
import { ApiService } from '../userinfo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {

  public username: string;
  public userinfo: any;
  followers: any;
  following: any;
  gists: any;
  userrepo: any;
  gistTemp: any;
  events: any;
  loading: boolean = false;

  constructor(private _http: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.loading = true;
    this.route.params.subscribe(
      result => {
        this.username = result.id;
        this._http.getUser(this.username).subscribe(
          data => {
            this.userinfo = data;
            this.getDetails();
          },
          error => {
            console.log(error);
            this.router.navigate(['nouser']);
          });
      }
    );

    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  ngOnChange() {}

  getDetails() {
    this.getFollowers();
    this.getFollowing();
    this.getRepo();
    this.getGist();
    this.getEvents();
  }

  // Get repos
  getRepo() {
    this._http.getRepo(this.username).subscribe(
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
    this._http.getGist(this.username).subscribe(
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
    this._http.getEvents(this.username).subscribe(
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
    this._http.getFollowers(this.username).subscribe(
      data => {
        this.followers = data;
      },
      error => {
        console.log(error);
        this.router.navigate(['**']);
      });
  }
  // Get following
  getFollowing() {
    this._http.getFollowing(this.username).subscribe(
      data => {
        this.following = data;
      },
      error => {
        console.log(error);
        this.router.navigate(['**']);
      });
  }
}
