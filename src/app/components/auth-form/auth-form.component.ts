import { Component,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
    @Input() formType!:'signUp' | 'signIn';
    @Output() formSubmit = new EventEmitter();
    fullName:string = '';
    email:string = '';
    password:string = '';
    confirmPass:string = '';

    onSubmit():void{
      if(this.formType === 'signUp'){
        this.formSubmit.emit({
          fullName:this.fullName,
          email:this.email,
          password:this.password,
          confirmPass:this.confirmPass
        });
      }else if(this.formType === 'signIn'){
        this.formSubmit.emit({
          email:this.email,
          password:this.password,
        });
      }
    };

   
}
