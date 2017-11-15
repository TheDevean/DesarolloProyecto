import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/user/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  password: any;
  isLogedin: boolean;
   
  constructor(
    private userService: UsersService,
    private router: Router) {
    }
   
  ngOnInit() {
    this.isLogedin = this.userService.isLogedin();
  }
   
  onLogin(){
    if(this.user){
      this.userService.login(this.user, this.password);
      this.isLogedin = this.userService.isLogedin();
      this.router.navigateByUrl("/home");
    }
  }

}
