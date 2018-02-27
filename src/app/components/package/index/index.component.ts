import { Component, OnInit } from '@angular/core';

// Custom service
import { PackageService } from '../../../services/package/package.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class PackageIndexComponent implements OnInit {

  title: String;
  dataSource: any[];
  displayedColumns = ['name', 'weight', 'dimensions'];
  packages: any[];

  constructor(private service: PackageService) { }

  ngOnInit() {
    this.title = 'Packages';

    this.service.list()
      .subscribe(response => {
        this.packages = response.json();
        this.dataSource = this.packages;
      })
  }

}
