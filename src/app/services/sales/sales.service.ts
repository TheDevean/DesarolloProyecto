import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class SalesService {
  constructor( private http:HttpClient ) { }
  sale: any = {
    client: {name: "", lastName: "", email: ""},
    address: {street:"", city: "", zip: ""},
    items: [],
  };
  sales: any = [ ];

  find(){
    return this.http.get('/api/sales');
  }

  insertOne(obj){
    return this.http.post('/api/sales', obj);
  }

  updateOne(obj){
    return this.http.put('/api/sales', obj);
  }



}
