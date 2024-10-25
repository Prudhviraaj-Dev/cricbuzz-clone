import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { login } from '../../model/model';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  logincredentials:login[]=[];

  constructor(
    private fb: FormBuilder,
    private api:ApiService,
    private auth:AuthService,
    private router:Router,
    private _snackbar:SnackbarService
    
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get("email")?.value;
      const password = this.loginForm.get("password")?.value;
  
      this.api.getlogin().subscribe({
        next: (res) => {
          this.logincredentials = res;
  
          const success = this.logincredentials.find(
            (data) => data.email === email && data.password === password
          );
  
          if (success) {
            this.auth.login();
            this._snackbar.opensnackbar("Successfully logged in");
            this.router.navigate(['/livescore']);
          } else {
            this._snackbar.opensnackbar("Login failed: Invalid credentials");
          }
        },
        error: (err) => {
          this._snackbar.opensnackbar(`Error fetching login data: ${err}`);
        }
      });
    }
  }
  
  

  close() {
  }
}
