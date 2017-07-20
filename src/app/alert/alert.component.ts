import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  alert = 'test';
  count = 0;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    return this.count === 0 ? 'lightgreen' : 'rosepink';
  }

}
