import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  value = '123456';
  dataVisitor: any;

  index0name: any;
  index0antrian: any;
  constructor(private server: ServerService) { }

  ngOnInit(): void {
    this.ambilDataVisitorDariServer();
  }

  ambilDataVisitorDariServer(){
    this.server.getAllVisitors().subscribe(
      (x: any) => { 
        this.dataVisitor = x;
        this.index0antrian = x[0].nomerAntrian; // [0].nomerAntrian
        console.log(x, this.index0antrian)
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

  handleChangeData(){
    
  }

}
