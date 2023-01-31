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
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  _ngOnInit() {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log('id = ' + id);
    if(id && !isNaN(id)) {
      console.log('valid id');
      this.paramSubscription = this.activatedRoute.params.subscribe(
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
    this.activatedRoute.data
      .subscribe(
        (data: Data) => {
          console.log('activated route data = ' + JSON.stringify(data));
          this.server = data['server'];
        }
      )
  }

  onEdit() {
    let pr = this.router.navigate(['edit'], {relativeTo: this.activatedRoute, queryParamsHandling: "preserve"});
    pr.then((v) => {
      console.log(this.activatedRoute.snapshot.pathFromRoot);
      console.log(this.activatedRoute.queryParams)
    }).catch((err) => console.error(err));
  }

}
