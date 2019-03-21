import { Component, OnInit } from '@angular/core';
import { ApiService } from '../userinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent implements OnInit {

  public searchUser: string;

  constructor(private router: Router) { }

  ngOnInit() { }

  getUser(event) {
    if(this.searchUser) {
      let id = this.searchUser;
      this.router.navigate(['/search/' + id]);
    }
  }

}
