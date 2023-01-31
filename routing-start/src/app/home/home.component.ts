import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onLoadServers(id: number) {
    console.log('loading server of id = ' + id);
    this.router.navigate(
      ['servers', id, 'edit'],
      {queryParams: {allowEdit: 1}, fragment: 'loading', relativeTo: this.route});
  }
  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}
