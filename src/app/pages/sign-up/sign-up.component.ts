import { Component } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import {Router } from '@angular/router'
import { UserRegister } from 'src/app/models/userModels';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  
  constructor(private toast:HotToastService,private userService : UserService,private router : Router) {};
  
  loader:boolean = false;

  signUp(user:UserRegister):void{
    let {name,email,password,confirmPass} = user;
    if(!name.trim() || !email.trim() || !password.trim() || !confirmPass.trim()){
      this.toast.error('Every field is required');
      return;
    };
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      this.toast.error('Please enter a valid email address.');
      return;
    };
    if(password !== confirmPass){
      this.toast.error('enter matching passwords');
      return;
    }
    this.loader = true;
    this.userService.userSignUp(user).subscribe((response) => {
      if(response.registration){
        response.token && localStorage.setItem('token',response.token);
        this.router.navigate(['/']);
      }else{
        this.toast.error(response.message);
      };
    },
    (error) => {
      this.toast.error(error)
    },
    () => {
      this.loader = false;
    }
    )
  };
}
