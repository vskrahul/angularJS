import { Component } from "@angular/core";
import { DUMMY_USERS } from "../../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'standalone-app-user',
    standalone: true,
    templateUrl: './standalone.user.component.html'
  })
export class StandaloneUserComponent{
  selectedUser = DUMMY_USERS[randomIndex];
}