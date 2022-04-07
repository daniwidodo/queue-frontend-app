import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
// MATERIAL MODULE //
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { VisitorAddComponent } from './components/visitor/visitor-add/visitor-add.component';
import { VisitorListComponent } from './components/visitor/visitor-list/visitor-list.component';
import { HomeComponent } from './components/home/home.component';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';


import { NgxBarcodeModule } from 'ngx-barcode';
@NgModule({
  declarations: [
    AppComponent,
    VisitorAddComponent,
    VisitorListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxBarcodeModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
