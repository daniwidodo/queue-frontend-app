import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as moment from 'moment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  dataVisitor: any;

  index0name: any;
  index0id: any;
  index0antrian: any;
  index0date: any;
  value: any ;

  newDate: any;
  momenDate: any;
  constructor(private server: ServerService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.ambilDataVisitorDariServer();
  }

  ambilDataVisitorDariServer(){
    this.server.getAllVisitors().subscribe(
      (x: any) => { 
        this.dataVisitor = x;
        this.index0antrian = x[0].nomerAntrian; // [0].nomerAntrian
        this.index0name = x[0].name;// [0].name
        this.index0date = x[0].date;
        this.index0id = x[0]._id;
        console.log(x);
        console.log(this.index0antrian, this.index0name, this.index0date, this.index0id)
      }
    );
  }

  getCurrentIndex( ){
    console.log();
  }

  handleDelete( deleteId: any ){
    console.log(deleteId);
    this.server.deleteVisitor( deleteId ).subscribe(
      () => { this.ambilDataVisitorDariServer(); }
      
     );

     
  }

  handleChangeData(antrian: any, id: any, date: any){
    
    this.index0antrian = antrian;
    this.value = id;
    this.index0date = date;

    date = this.newDate;
    this.newDate = moment().format( 'DD - MMMM - YYYY, HH : MM  ');

    console.log(antrian, id, date, 'new date : ' ,this.newDate);

  }

}
