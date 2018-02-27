import { Component, OnInit } from '@angular/core';

// Custom service
import { TruckService } from '../../../services/truck/truck.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class TruckIndexComponent implements OnInit {

  title: String;
  dataSource: any[];
  displayedColumns = ['name', 'color', 'model', 'weightCapacity'];
  packages: any[];

  constructor(private service: TruckService) { }

  ngOnInit() {
    this.title = 'Packages';

    this.service.list()
      .subscribe(response => {
        this.packages = response.json();
        this.dataSource = this.packages;
      })
  }

}
