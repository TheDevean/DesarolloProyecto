import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/user/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  today: Date = new Date();
  isLogedin: boolean;

  constructor(private userService:UsersService) { }

  ngOnInit() {
  this.userService.userChanges.subscribe((changes)=>{
  console.log(changes);
  this.isLogedin= this.userService.logedin;

});
  }

}
