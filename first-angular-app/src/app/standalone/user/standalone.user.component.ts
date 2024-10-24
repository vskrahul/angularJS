import { Component, Signal, signal, WritableSignal } from "@angular/core";
import { DUMMY_USERS } from "../../dummy-users";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'standalone-app-user',
    standalone: true,
    imports: [
      CommonModule
    ],
    templateUrl: './standalone.user.component.html'
  })
export class StandaloneUserComponent{
  selectedUser = signal(DUMMY_USERS[0]);
  imagePath = '../assets/user/' + this.selectedUser().avatar;

  selectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}