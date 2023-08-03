import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from 'src/app/services/user.service';


export const authGuard: CanActivateFn = (route, state) => {
    const router : Router = inject(Router);
    const toast : HotToastService = inject(HotToastService);
    const userService : UserService = inject(UserService);
    
    const tokenCheck : boolean = userService.checkToken();

    if(tokenCheck){
      return true;
    }else{
      router.navigate(['/signIn']);
      toast.error('Please Log In');
      return false;
    };
};
