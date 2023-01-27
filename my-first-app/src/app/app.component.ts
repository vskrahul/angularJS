import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentViewName: string = "recipes";

  switchView(event: {viewName: string}) {
    this.currentViewName = event.viewName;
  }
}
