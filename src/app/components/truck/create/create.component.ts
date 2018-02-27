import { Component, OnInit } from '@angular/core';

// Custom service
import { TruckService } from '../../../services/truck/truck.service';
import { Truck } from '../../../models/truck.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class TruckCreateComponent implements OnInit {

  title: String;
  newTruck = new Truck();
  submitted = false;

  constructor(private service: TruckService) { }

  ngOnInit() {
    this.title = 'Create';
  }

  onSubmit() {
    this.submitted = true;
    this.service.create(this.newTruck.toObject())
      .subscribe(response => {
        if (response.status === 200) {
            this.newTruck = new Truck();
        }
      })
  }
}
