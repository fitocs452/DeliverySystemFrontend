import { Component, OnInit } from '@angular/core';

// Custom service
import { PilotService } from '../../../services/pilot/pilot.service';
import { Pilot } from '../../../models/pilot.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class PilotCreateComponent implements OnInit {

  title: String;
  newPilot = new Pilot();
  submitted = false;

  constructor(private service: PilotService) { }

  ngOnInit() {
    this.title = 'Create';
  }

  onSubmit() {
    this.submitted = true;
    this.service.create(this.newPilot.toObject())
      .subscribe(response => {
        if (response.status === 200) {
            this.newPilot = new Pilot();
        }
      })
  }

}
