import { Component,Input,Output,EventEmitter } from '@angular/core';
import { UserRegister } from 'src/app/models/userModels';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
    @Input() formType!:'signUp' | 'signIn';
    @Input() loader:boolean = false;
    @Output() formSubmit = new EventEmitter();
    name:string = '';
    email:string = '';
    password:string = '';
    confirmPass:string = '';

    onSubmit():void{
      if(this.formType === 'signUp'){
        let user:UserRegister = {
          name:this.name,
          email:this.email,
          password:this.password,
          confirmPass:this.confirmPass
        };
        this.formSubmit.emit(user);
      }else if(this.formType === 'signIn'){
        this.formSubmit.emit({
          email:this.email,
          password:this.password,
        });
      }
    };

   
}
