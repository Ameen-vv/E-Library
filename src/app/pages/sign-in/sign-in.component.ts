import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UserSignIn } from 'src/app/models/userModels';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  authForm: FormGroup;
  constructor(private userService: UserService, private toast: HotToastService, private router: Router, private formBuilder: FormBuilder) {
    this.authForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    })
  };

  loader: boolean = false;

  userLogIn(user: UserSignIn): void {
    this.loader = true;
    this.userService.userSignIn(user).subscribe(
      (response) => {
        if (response.logIn) {
          response.token && localStorage.setItem('token', response.token);
          this.loader = false;
          this.router.navigate(['/']);
        } else {
          this.loader = false;
          this.toast.error(response.message);
        };
      },
      ()=>{
        this.loader = false;
      }
    );
  };
}
