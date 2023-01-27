import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("home_li") home_list: ElementRef;
  @ViewChild("servers_li") servers_list: ElementRef;
  @ViewChild("users_li") users_list: ElementRef;

  setHomeActive() {
    this.home_list.nativeElement.class = "active";
    this.servers_list.nativeElement.class = "";
    this.users_list.nativeElement.class = "";
  }
  setServersActive() {
    this.home_list.nativeElement.class = "";
    this.servers_list.nativeElement.class = "active";
    this.users_list.nativeElement.class = "";
  }
  setUsersActive() {
    this.home_list.nativeElement.class = "";
    this.servers_list.nativeElement.class = "";
    this.users_list.nativeElement.class = "active";
  }
}
