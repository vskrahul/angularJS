import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Data, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  paramSubscription: Subscription;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  _ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    console.log('id = ' + id);
    if(id && !isNaN(id)) {
      console.log('valid id');
      this.paramSubscription = this.route.params.subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(+params['id']);
          console.log(this.server);
        });
    } else {
      console.log('not a valid id');
      this.server = {
        id: 100,
        name: 'No Server Found',
        status: 'Offline'
      };
    }
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      )
  }

  onEdit() {
    let pr = this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: "preserve"});
    pr.then((v) => {
      console.log(this.route.snapshot.pathFromRoot);
      console.log(this.route.queryParams)
    }).catch((err) => console.error(err));
  }

}
