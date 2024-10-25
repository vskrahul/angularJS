import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { User } from "src/app/dummy-users";

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    imports: [
        CommonModule
    ]
})
export class TaskComponent {
    @Input({required: true}) user: User | undefined;
}