import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InventoryService {

  constructor(private http:HttpClient) {

  }

  find(){
    return this.http.get('/api/products');
  }

  insertOne(obj){
    return this.http.post('/api/products', obj);
  }

  updateOne(obj){
    return this.http.put('/api/products', obj);
  }

  deleteOne(id){
    return this.http.delete('/api/products/' + id);
  }
  
  findbyname(search){
        return this.http.get('/api/product/' + search);
    }

}
