import { Component } from "@angular/core";
import { StandaloneHeaderComponent } from "./header/standalone.header.component";
import { StandaloneUserComponent } from "./user/standalone.user.component";


@Component({
    selector: 'standalone-app-root',
    standalone: true,
    templateUrl: './standalone.app.component.html',
    styleUrls: ['./standalone.app.component.css'],
    imports: [
        StandaloneHeaderComponent,
        StandaloneUserComponent
    ]
})
export class StandaloneAppComponent {
    title = 'first-singletone-angular-app';
}