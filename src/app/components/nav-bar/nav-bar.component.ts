import { Component,Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() bgDark!:boolean;
  constructor(private userService : UserService){};
  userLogged:boolean = this.userService.checkToken();
  logOut(){
    this.userService.logOut();
    this.userLogged = this.userService.checkToken();
  };
}
