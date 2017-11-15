import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class UsersService {

  user: any;
  logedin: boolean;
  userChanges = new EventEmitter<any>();
   
  constructor() { }
   
  login(user, password){
    this.user = user;
    this.logedin = true;
    this.userChanges.emit();
  }
   
  logout(){
    this.user = {};
    this.logedin = false;
    this.userChanges.emit();
  }
   
  isLogedin<booelan>(){
    return this.logedin;
  }

}
