import { Component, OnInit } from '@angular/core';

// Custom service
import { PackageService } from '../../../services/package/package.service';
import { Package } from '../../../models/package.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class PackageCreateComponent implements OnInit {

  title: String;
  newPackage = new Package();
  submitted = false;

  constructor(private service: PackageService) { }

  ngOnInit() {
    this.title = 'Create';
  }

  onSubmit() {
    this.submitted = true;
    this.service.create(this.newPackage.toObject())
      .subscribe(response => {
        if (response.status === 200) {
            this.newPackage = new Package();
        }
      })
  }
}
