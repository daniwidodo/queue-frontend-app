import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServerService } from 'src/app/services/server.service';
import { Visitor } from '../../../models/visitor';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  
  constructor( private server: ServerService, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  addVisitor() {
    
    this.server.addVisitor(this.visitorData.value).subscribe(
      (d: any) => {
        console.log(d, d.status)
        if (d.status == 200) {
           this._snackBar.open( 'Data berhasil ditambahkan!', '',{ duration: 2000})
        } 
      },
      (error) => {
         console.log(error);
        // get the status as error.status
     }
    );
  }

  public errorHandling = (control: string, error: string) => {
    return this.visitorData.controls[control].hasError(error);
  }

}
