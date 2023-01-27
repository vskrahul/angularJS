import {Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
  }

  @Output() displayEvent = new EventEmitter<{viewName: string}>();

  onSelect(viewNameSelected: string) {
    this.displayEvent.emit({viewName: viewNameSelected});
  }
}
