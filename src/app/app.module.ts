import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './components/package/index/index.component';
import { CreateComponent } from './components/package/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
