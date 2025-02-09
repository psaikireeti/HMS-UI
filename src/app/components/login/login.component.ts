import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: (response) => {
          const role = response.user.role;
          switch (role) {
            case 'ROLE_ADMIN':
              this.router.navigate(['/admin/dashboard']);
              break;
            case 'ROLE_DOCTOR':
              this.router.navigate(['/doctor/dashboard']);
              break;
            case 'ROLE_RECEPTIONIST':
              this.router.navigate(['/receptionist/dashboard']);
              break;
            case 'ROLE_PHARMACIST':
              this.router.navigate(['/pharmacist/dashboard']);
              break;
            case 'ROLE_PATIENT':
              this.router.navigate(['/patient/dashboard']);
              break;
            default:
              this.router.navigate(['/']);
          }
        },
        error: (err) => {
          this.error = 'Invalid username or password';
        }
      });
    }
  }
}