import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];
  promise: Promise<Boolean>;

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReload() {
    this.promise = this.router.navigate(['/servers'], {relativeTo: this.route});
    this.promise.then((navigated: Boolean) => {
      if(navigated) {
        console.log('navigated to /servers');
      } else {
        console.log('failed to navigate to /servers');
      }
    }).catch((error) => {
      console.error('error while navigating to /servers' + error);
    });
  }

}
