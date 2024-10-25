import { Component, NgZone } from "@angular/core";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html'
  })
export class HeaderComponent {
  constructor (private ngZone: NgZone) {
    this.ngZone.onStable.subscribe(() => {
      // console.log('zone stableed - header.component');
    });
  }
}