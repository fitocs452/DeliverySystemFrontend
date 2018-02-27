import { Component, OnInit } from '@angular/core';

// Custom service
import { PilotService } from '../../../services/pilot/pilot.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class PilotIndexComponent implements OnInit {

  title: String;
  dataSource: any[];
  displayedColumns = ['name', 'lastName', 'drivingLicense', 'age'];
  pilots: any[];

  constructor(private service: PilotService) { }

  ngOnInit() {
    this.title = 'Pilots';

    this.service.list()
      .subscribe(response => {
        this.pilots = response.json();
        this.dataSource = this.pilots;
        console.log(this.dataSource);
      })
  }
}
