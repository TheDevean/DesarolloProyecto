import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientService {
   
  constructor(private http:HttpClient) {
   
  }
   
  find(){
    return this.http.get('/api/clients');
  }
   
  insertOne(obj){
    return this.http.post('/api/clients', obj);
  }
   
  updateOne(obj){
    return this.http.put('/api/clients', obj);
  }
   
  deleteOne(id){
    return this.http.delete('/api/clients/' + id);
  }

}
