import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  endPoint = 'http://localhost:4000/api/';

  constructor( private http: HttpClient) { }

  getAllVisitors(){
    return this.http.get( this.endPoint )
  }

  getSingleVisitor( id: any ){
    return this.http.get( this.endPoint + + id )
  }

  addVisitor( data: any ){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(data);
    console.log(body)
    return this.http.post( this.endPoint + 'create' , body , {headers: headers} )
  }

  deleteVisitor(deleteId: any){
    return this.http.delete( this.endPoint + 'delete/' + deleteId  )
  }
}
