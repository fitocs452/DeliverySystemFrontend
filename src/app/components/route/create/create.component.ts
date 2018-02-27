import { Component, OnInit } from '@angular/core';

// Model
import { Route } from '../../../models/route.model';

// Services for selects
import { RouteService } from '../../../services/route/route.service';
import { TruckService } from '../../../services/truck/truck.service';
import { PilotService } from '../../../services/pilot/pilot.service';
import { PackageService } from '../../../services/package/package.service';

// Data binding
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class RouteCreateComponent implements OnInit {
  title: String;

  // Route
  newRoute = new Route();

  // form
  submitted = false;
  truck: string;
  pilot: string;
  packages = new FormControl();

  // options
  trucksAvailable = [];
  pilotsAvailable = [];
  packagesAvailable = [];

  constructor(
    private routeService: RouteService,
    private truckService: TruckService,
    private pilotService: PilotService,
    private packageService: PackageService
  ) { }

  ngOnInit() {
    this.title = 'Create';

    // Charge on memory the options for selector
    // Trucks available
    this.truckService.list()
      .subscribe(response => {
        this.trucksAvailable = response.json();
      });

    // Pilots available
    this.pilotService.list()
      .subscribe(response => {
        this.pilotsAvailable = response.json();
      });

    // Packages available
    this.packageService.list()
      .subscribe(response => {
        this.packagesAvailable = response.json();
      })
  }

  onSubmit() {
    this.submitted = true;
    this.routeService.create({
      ...this.newRoute,
      truck: this.truck,
      pilot: this.pilot,
      packages: this.packages.value
    }).subscribe(response => {
      // New model
      this.newRoute = new Route();

      // Restore variables
      this.submitted = false;
      this.truck = '';
      this.pilot = '';
      this.packages = new FormControl();
    })
  }
}
