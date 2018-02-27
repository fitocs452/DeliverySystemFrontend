import { Component, OnInit } from '@angular/core';

// Custom service
import { RouteService } from '../../../services/route/route.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class RouteIndexComponent implements OnInit {

  title: String;
  dataSource: any[];
  displayedColumns = ['initialLocation', 'finalLocation', 'pilot', 'truck'];
  routes: any[];

  constructor(private service: RouteService) { }

  ngOnInit() {
    this.title = 'Packages';

    this.service.list()
      .subscribe(response => {
        this.routes = response.json();
        this.dataSource = this.routes;
      })
  }


}
