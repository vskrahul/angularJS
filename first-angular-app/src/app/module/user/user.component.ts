import { Component } from "@angular/core";
import { DUMMY_USERS } from "../../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    standalone: false,
    templateUrl: './user.component.html'
  })
export class UserComponent{
  selectedUser = DUMMY_USERS[randomIndex];
}