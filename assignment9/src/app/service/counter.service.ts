import {EventEmitter} from "@angular/core";

export class CounterService {
  inactiveActionCount: number = 0;
  activeActionCount: number = 0;

  activeCountEvent = new EventEmitter<number>();
  inactiveCountEvent = new EventEmitter<number>();

  activeAction() {
    this.activeActionCount++;
    this.activeCountEvent.emit(this.activeActionCount);
  }
  inactiveAction() {
    this.inactiveActionCount++;
    this.inactiveCountEvent.next(this.inactiveActionCount);
  }
}
