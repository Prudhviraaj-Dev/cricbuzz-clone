import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

const userData = {
  permissions: ['has_Permision'],
};

export class AuthUtil {
  static getUser() {
    if (typeof window !== 'undefined') { 
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  static hasPermission(permission: string): boolean {
    const user = this.getUser();
    return user && user.permissions.includes(permission);
  }
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedInStatus = this.loggedIn.asObservable();

  constructor() {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.loggedIn.next(true);
      }
    }
  }

  login() {
    this.loggedIn.next(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', 'loggedIn');
      localStorage.setItem('user', JSON.stringify(userData));
    }
  }

  logout() {
    this.loggedIn.next(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
  }
}
