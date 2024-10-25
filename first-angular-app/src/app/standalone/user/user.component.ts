import { Component, computed, EventEmitter, Input, input, InputSignal, NgZone, output, Output, Signal, signal, WritableSignal } from "@angular/core";
import { DUMMY_USERS, User } from "../../dummy-users";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  //input from parent component

  //InputSignal is readonly
  //avatar: InputSignal<string> = input.required<string>();
  //name = input<string>();
  //selectMe = output<string>(); //not signal
  requiredInputSignal = input.required<string>();

  // @Input() avatar!: string;
  // @Input() name!: string;
  // @Input() id!: string;
  @Input( {required: true}) user: User | undefined;
  @Output() selectMe = new EventEmitter<string>();

  selectedUser = signal(DUMMY_USERS[0]);
  imagePath = computed(() => {
    // console.log('signal')
    return '../assets/user/' + this.selectedUser().avatar;
  })

  constructor(private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      // console.log('zone stableed - user.component');
    });
  }

  selectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.selectMe.emit(this.user?.id);
  }

  get imagePathFromInput() {
    return '../assets/user/' + this.user?.avatar;
  }

  get imagePathFromInputSignal() {
    return computed(() => '../assets/user/' + this.user?.avatar);
  }
}