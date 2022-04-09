import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServerService } from 'src/app/services/server.service';
import { Visitor } from '../../../models/visitor';

@Component({
  selector: 'app-visitor-add',
  templateUrl: './visitor-add.component.html',
  styleUrls: ['./visitor-add.component.scss']
})
export class VisitorAddComponent implements OnInit {

  sekarang = new Date();
  data: any;
  visitorData = new FormGroup({
    name: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    phone: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
    nomerAntrian: new FormControl(''),
    date: new FormControl( this.sekarang )
  })
  
  constructor( private server: ServerService ) { }

  ngOnInit(): void {
  }

  addVisitor() {
    console.log(this.visitorData.value);
    this.server.addVisitor(this.visitorData.value).subscribe(
      d => {
        console.log(d)
      }
    );
  }

}
