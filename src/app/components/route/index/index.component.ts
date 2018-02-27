import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class RouteIndexComponent implements OnInit {
  title: 'Routes';

  constructor() { }

  ngOnInit() {
    this.title = 'Routes';
  }

}
