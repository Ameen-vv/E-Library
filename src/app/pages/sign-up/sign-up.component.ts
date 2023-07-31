import { Component } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import {Router } from '@angular/router'
import { UserRegister } from 'src/app/models/userModels';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  authForm:FormGroup;
  constructor(private toast:HotToastService,private userService : UserService,private router : Router,private formBuilder : FormBuilder) {
    this.authForm = formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required, Validators.email])],
      password:['',Validators.required],
      confirmPass:['',Validators.required]
    })
  };
  
  loader:boolean = false;

  signUp(user:UserRegister):void{
    let {password,confirmPass} = user;
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
