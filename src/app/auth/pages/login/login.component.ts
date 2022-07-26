import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    login: ['', [Validators.required]],
    reCaptcha: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    const login = { login: this.loginForm.value.login, password: this.loginForm.value.password }
    this.authService.signIn(login)

      .subscribe(
        () => {
          this.snackbar.open('Logado com sucesso', 'Ok', {
            duration: 3000
          })

          this.router.navigateByUrl('/funcionarios')
        }
      )
  }
}

