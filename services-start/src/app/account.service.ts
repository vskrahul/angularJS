import {LoggingService} from "./logging.service";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdateEvent = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {
  }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logNewAccountCreated(name, status);
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
