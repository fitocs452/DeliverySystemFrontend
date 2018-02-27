import { Component, OnInit } from '@angular/core';

// Custom service
import { PackageService } from '../../../services/package/package.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class PackageCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
