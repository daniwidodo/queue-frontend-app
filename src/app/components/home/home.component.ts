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

  constructor(private server: ServerService) { }

  ngOnInit(): void {
    this.ambilDataVisitorDariServer();
  }

  ambilDataVisitorDariServer(){
    this.server.getAllVisitors().subscribe(
      x => { 
        this.dataVisitor = x
        console.log(x)
      }
    );
  }

}
