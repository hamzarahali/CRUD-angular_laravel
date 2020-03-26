import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductModule } from './components/addproduct/addproduct.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddproductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
