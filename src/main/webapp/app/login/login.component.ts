import {Component}                            from '@angular/core';
import {Router}                               from '@angular/router'
import {LoginService} from "./login.service";

@Component({
  moduleId: module.id,
  selector: 'login-app',
  templateUrl: 'login.component.html',
})

export class LoginComponent {

  constructor(private router:Router, private loginService:LoginService) {
  }

  login(event, email, password) {
    event.preventDefault();
    this.loginService.login(email, password)
      .subscribe(() => {
        this.router.navigate(['/index']);
      }, this.handleError);
  }

  logout():void {
    localStorage.removeItem('jwt');
  }

  handleError(error) {
    console.log(error.status);
  }

}
