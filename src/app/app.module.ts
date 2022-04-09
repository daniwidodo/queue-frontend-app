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
import { MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


import { RouterModule } from '@angular/router';
import { NgxBarcodeModule } from 'ngx-barcode';
import { VisitorEditComponent } from './components/visitor/visitor-edit/visitor-edit.component';
import {NgxPrintModule} from 'ngx-print';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    VisitorAddComponent,
    VisitorListComponent,
    HomeComponent,
    VisitorEditComponent
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
    MatTableModule,
    MatIconModule,
    RouterModule,
    NgxPrintModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
