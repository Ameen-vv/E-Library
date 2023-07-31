import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from 'src/app/models/userModels';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  @Input() formType!: 'signUp' | 'signIn';
  @Input() loader = false;
  @Input() formTemplate!:FormGroup;
  @Output() formSubmit = new EventEmitter();

  
  

  onSubmit(): void {
    
    if (this.formType === 'signUp') {
      if (this.formTemplate.valid) {
        let user: UserRegister = {
          name: this.formTemplate.value.name,
          email: this.formTemplate.value.email,
          password: this.formTemplate.value.password,
          confirmPass: this.formTemplate.value.confirmPass
        };
        console.log(user)
        this.formSubmit.emit(user);
      }
    } else if (this.formType === 'signIn') {
      if (this.formTemplate.valid) {
        this.formSubmit.emit({
          email: this.formTemplate.value.email,
          password: this.formTemplate.value.password,
        });
      }
    }
  }
}
