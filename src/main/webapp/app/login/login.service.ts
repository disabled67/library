
import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()
export class LoginService {
  constructor(private http:Http) {}

  login(email, password):Observable<Response> {
    let loginRequest = JSON.stringify({email: email, password: password});
    let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});

    return this.http.post('/api/login', loginRequest, { headers: headers })
      .do(resp => {
        localStorage.setItem('jwt', resp.headers.get('x-auth-token'));
      });
  }

  logout():void {
    localStorage.removeItem('jwt');
  }

  private handleError(error:Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }


  isSignedIn():boolean {
    return localStorage.getItem('jwt') !== null;
  }

}
