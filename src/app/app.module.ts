import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import { PackageService } from './services/package/package.service';
import { PilotService } from './services/pilot/pilot.service';
import { RouteService } from './services/route/route.service';
import { TruckService } from './services/truck/truck.service';

// Components
import { AppComponent } from './app.component';
import { PackageIndexComponent } from './components/package/index/index.component';
import { PackageCreateComponent } from './components/package/create/create.component';
import { PilotIndexComponent } from './components/pilot/index/index.component';
import { PilotCreateComponent } from './components/pilot/create/create.component';
import { RouteIndexComponent } from './components/route/index/index.component';
import { RouteCreateComponent } from './components/route/create/create.component';
import { TruckIndexComponent } from './components/truck/index/index.component';
import { TruckCreateComponent } from './components/truck/create/create.component';

// External libs
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpModule } from '@angular/http';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PackageIndexComponent,
    PackageCreateComponent,
    PilotIndexComponent,
    PilotCreateComponent,
    RouteIndexComponent,
    RouteCreateComponent,
    TruckIndexComponent,
    TruckCreateComponent,
    PageNotFoundComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: RouteIndexComponent },
      { path: 'route/new', component: RouteCreateComponent },
      { path: 'packages', component: PackageIndexComponent },
      { path: 'packages/new', component: PackageCreateComponent },
      { path: 'pilots', component: PilotIndexComponent },
      { path: 'pilots/new', component: PilotCreateComponent },
      { path: 'trucks', component: TruckIndexComponent },
      { path: 'trucks/new', component: TruckCreateComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [
    PackageService,
    PilotService,
    RouteService,
    TruckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
