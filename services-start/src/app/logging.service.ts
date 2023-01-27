export class LoggingService {
  logStatusChange(status: string) {
    console.log("A server status changed, new status: " + status);
  }
  logNewAccountCreated(name: string, status: string) {
    console.log("New server " + name + " created with status " + status);
  }
}
