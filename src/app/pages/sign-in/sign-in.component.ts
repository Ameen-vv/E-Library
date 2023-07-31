import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UserSignIn } from 'src/app/models/userModels';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private userService: UserService, private toast: HotToastService, private router: Router) { };

  loader: boolean = false

  userLogIn(user: UserSignIn): void {
    let { email, password } = user;

    if (!email.trim() || !password.trim()) {
      this.toast.error('Invalid Email or Password');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      this.toast.error('Please enter a valid email address.');
      return;
    };

    this.loader = true;
    this.userService.userSignIn(user).subscribe(
      (response) => {
        if (response.logIn) {
          response.token && localStorage.setItem('token', response.token);
          this.router.navigate(['/']);
        } else {
          this.toast.error(response.message);
        };
      },
      (error) => {
        this.toast.error(error);
      },
      () => {
        this.loader = false;
      }
    );
  };
}
