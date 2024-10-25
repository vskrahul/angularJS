import { Component, NgZone } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS, User } from "../dummy-users";
import { CommonModule } from "@angular/common";
import { TaskComponent } from "./task/task.component";


@Component({
    selector: 'standalone-app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
        HeaderComponent,
        UserComponent,
        TaskComponent,
        CommonModule
    ]
})
export class AppComponent {
    counter: number = 0;
    title = 'first-singletone-angular-app';
    users = DUMMY_USERS;
    selectedUser?: User;

    constructor (private ngZone: NgZone) {
      this.ngZone.onStable.subscribe(() => {
        // console.log('zone stableed - app.component');
      });
    }
      
    onSelectUser(id: string) {
      this.selectedUser = DUMMY_USERS.find(u => u.id === id);
    }

    incrementCouter() {
      this.counter++;
    }
}