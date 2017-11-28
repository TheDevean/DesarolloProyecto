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

  onLogin() {
    console.log("onlogin", this.user, this.password);
    if (this.user) {
      // this.userService.login(this.user, this.password);
      this.userService.login(this.user, this.password).subscribe((res: any) => {
        console.log('resultado:', res.body);
        if (res.body){
          this.userService.user = res.body[0].email;
          this.userService.logedin = true;
          this.userService.userChanges.emit();
          this.router.navigateByUrl("/home");
        }else{
          this.userService.user = '';
          this.userService.logedin = false;
          this.userService.userChanges.emit();
        }

      });
      //      this.isLogedin = this.userService.isLogedin();
      //      this.router.navigateByUrl("/home");
    }

  }

}
