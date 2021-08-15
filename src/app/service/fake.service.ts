import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/customers') && method === 'POST':
                      return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }    
        }

        // route functions

        function authenticate() {
             return checkLogin();
        }

        function checkLogin(){
          const _data=body;
          const userdataString: string  | undefined | any=      localStorage.getItem("userdata");
  if(!userdataString){
    return unauthorized();
  }else {
    const userArray: Array<any> | any = JSON.parse(userdataString);
  const index=  userArray.findIndex((e: any)=>{
      return e.email===_data.email && e.password===_data.password;
    });

    if(index > -1){
      const currentUserValue=JSON.parse(JSON.stringify(userArray[index]));
      currentUserValue.token= Date.now();
  return  ok(currentUserValue);
     
    }else {
      return unauthorized();
    }
  }
  return unauthorized();
        }

        function getUsers() {



            if (!isLoggedIn()) return unauthorized();
            return ok("");
        }

        // helper functions

        function ok(body? : any) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message: any) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
}