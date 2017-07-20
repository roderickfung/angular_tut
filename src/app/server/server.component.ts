import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: [
    './server.component.css'
  ]
})

export class ServerComponent {
  serverName: number = 1;
  serverStatus: boolean = false;

  getServerStatus() {
    return this.serverStatus ? 'online' : 'offline';
  }
}