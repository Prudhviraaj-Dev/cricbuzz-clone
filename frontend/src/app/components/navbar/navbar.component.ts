import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn: boolean = false;

  constructor(private auth:AuthService, private router: Router){}

  ngOnInit(): void {
    this.auth.loggedInStatus.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
