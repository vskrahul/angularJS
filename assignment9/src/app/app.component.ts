import {Component, OnInit} from '@angular/core';
import {UserService} from "./service/user.service";
import {CounterService} from "./service/counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CounterService]
})
export class AppComponent implements OnInit {

  activeActionCount: number = 0;
  inactiveActionCount: number = 0;

  constructor(private counterService: CounterService) {
    this.counterService.activeCountEvent.subscribe(
      (activeCount: number) => this.handleActiveCountEvent(activeCount)
    );
    this.counterService.inactiveCountEvent.subscribe(
      (inactiveCount: number) => this.handleInactiveCountEvent(inactiveCount)
    );
  }
  ngOnInit() {
    this.activeActionCount = this.counterService.activeActionCount;
    this.inactiveActionCount = this.counterService.inactiveActionCount;
  }
  handleActiveCountEvent(count: number) {
    this.activeActionCount = count;
  }
  handleInactiveCountEvent(count: number) {
    this.inactiveActionCount = count;
  }
}
