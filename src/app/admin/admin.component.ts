import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public counter: boolean = true;

  constructor() {}

  ngOnInit(): void {
    console.log(this.counter);
  }

  showName() {
    this.counter = false;
    console.log(this.counter);
  }
}
