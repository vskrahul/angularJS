import { Component } from "@angular/core";
import { DUMMY_USERS } from "../../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'module-app-user',
    standalone: false,
    templateUrl: './module.user.component.html'
  })
export class ModuleUserComponent{
  selectedUser = DUMMY_USERS[randomIndex];
}