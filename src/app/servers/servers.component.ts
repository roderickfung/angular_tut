import { Component, OnInit } from '@angular/core';

// change to inline template;
// @Component({
//   selector: 'app-servers',
//   template: `
//     <p>Servers</p>
//     <app-server></app-server>
//     <app-server></app-server>
//   `,
//   styleUrls: ['./servers.component.css']
// })

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  servers = [];
  serverName = '';

  constructor() {
  }

  ngOnInit() {
  }

  serverCountCheck() {
    return this.servers.length > 0 ? false : true;
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverName = '';
    this.allowNewServer = false;
  }

  onRemoveServer() {
    this.servers.pop();
  }

  onUpdateServerName(event: Event) {
    (<HTMLInputElement>event.target).value.length != 0 ? this.allowNewServer = true : this.allowNewServer = false;
  }

}
