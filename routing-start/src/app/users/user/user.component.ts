import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UsersService) {

  }
  ngOnInit() {
    this.user = this.getUser(+this.activatedRoute.snapshot.params['id']);
    console.log('parameters - ', JSON.stringify(this.activatedRoute.snapshot.params));
    this.paramsSubscription = this.activatedRoute.params
      .subscribe((params: Params) => this.onChangeOfUserIdInPathParam(params));
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
  getUser(id: number) {
    return this.userService.user(id);
  }
  onChangeOfUserIdInPathParam(params: Params) {
    console.log('[onChangeOfUserIdInPathParam] ', JSON.stringify(params));
    const _u = this.getUser(+params['id']);
    this.user.id = params['id'];
    this.user.name = _u && _u.name ? _u.name : 'Dummy Name';
  }
}
