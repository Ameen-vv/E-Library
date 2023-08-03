import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

export const logInGuard: CanActivateFn = (route, state) => {
  const router : Router = inject(Router);
  const userService : UserService = inject(UserService);

  if(userService.checkToken()){
    history.back();
    return false;
  }else{
    return true;
  }

};
