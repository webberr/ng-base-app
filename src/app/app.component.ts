import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import { AuthenticationService } from './_services';
import { User, Role } from './_models';
import { AmplifyService }  from 'aws-amplify-angular';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    // currentUser: User;
    signedIn: boolean;
    user: any;
    greeting: string;

    constructor(
        private router: Router,
        private amplifyService: AmplifyService
        // private authenticationService: AuthenticationService
    ) {
      //  this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.amplifyService.authStateChange$
       .subscribe(authState => {
           this.signedIn = authState.state === 'signedIn';
           if (!authState.user) {
               this.user = null;
           } else {
               this.user = authState.user;
               this.greeting = "Hello " + this.user.username;
           }
   });
    }

    // get isAdmin() {
    //      return this.currentUser && this.currentUser.role === Role.Admin;
    //  }
    //
    // logout() {
    //     this.authenticationService.logout();
    //     this.router.navigate(['/login']);
    // }
}
