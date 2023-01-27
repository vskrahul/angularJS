import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../service/user.service";
import {CounterService} from "../service/counter.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  users: string[] = [];
  constructor(private userService: UserService, private counterService: CounterService) {
  }
  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActivate(id);
  }
}
