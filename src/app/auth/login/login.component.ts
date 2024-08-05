import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { UserLoginInterface } from '../../interface/user-login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  private localStorage = this.document.defaultView?.localStorage;
  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ){}

  ngOnInit(): void {
      this.localStorage?.removeItem('token');
  }

  public isValidField(field:string){
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched;
  }

  onSubmit(){
    this.loginForm.markAllAsTouched();
    const user: UserLoginInterface = {
      username : this.loginForm.controls['username'].value,
      password : this.loginForm.controls['password'].value
    }
    if (this.loginForm.valid) {
      this.auth.login(user).subscribe(
        (response) => {
          const token = response.token;
          this.localStorage?.setItem('token', token)
          this.localStorage?.setItem('username', user.username)
          this.router.navigate(['/credit-card'])
        },
        (error)=> {
          console.error(error);
        }
      )
    }
  }
}
