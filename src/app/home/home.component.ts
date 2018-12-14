import { Component } from '@angular/core';
// ﻿import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    // currentUser: User;
    // currentUserSubscription: Subscription;
    // users: User[] = [];
    //
    // constructor(
    //     private authenticationService: AuthenticationService,
    //     private userService: UserService
    // ) {
    //     this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
    //         this.currentUser = user;
    //     });
    // }
    //
    // ngOnInit() {
    //     this.loadAllUsers();
    // }
    //
    // ngOnDestroy() {
    //     // unsubscribe to ensure no memory leaks
    //     this.currentUserSubscription.unsubscribe();
    // }
    //
    // deleteUser(id: number) {
    //     this.userService.delete(id).pipe(first()).subscribe(() => {
    //         this.loadAllUsers()
    //     });
    // }
    //
    // private loadAllUsers() {
    //     this.userService.getAll().pipe(first()).subscribe(users => {
    //         this.users = users;
    //     });
    // }
    currentUser: User;
userFromApi: User;

constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
) {
    this.currentUser = this.authenticationService.currentUserValue;
}

ngOnInit() {
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
        this.userFromApi = user;
    });
}
}
