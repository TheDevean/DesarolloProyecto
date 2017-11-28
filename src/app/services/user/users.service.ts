import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  user: any;
  logedin: boolean;
  userChanges = new EventEmitter<any>();
   
  constructor(private http:HttpClient) { }
   
  login(username, password) {
    var obj = {username:username, password:password};

    console.log(obj);
    return this.http.post('/api/login', obj);
  }
   
  logout(){
    this.user = {};
    this.logedin = false;
    this.userChanges.emit();
  }
   
  isLogedin(){
    return this.logedin;
  }

}
