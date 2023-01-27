import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router, UrlTree} from "@angular/router";
import {JSONFile} from "@angular/cli/src/utilities/json-file";
import {CanComponentDeactivate} from "./can-deactivate-guard.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: Boolean = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        console.log('EditComponent, queryParams: ' + JSON.stringify(queryParams));
        this.allowEdit = queryParams['allowEdit'] === '1';
      }
    );

    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();

    const id = +this.route.snapshot.params['id'];

    this.server = this.serversService.getServer(id);
    // Subscribe route params to update the id if params change
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit) {
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status)
      && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    }
    return true;
  }
  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
