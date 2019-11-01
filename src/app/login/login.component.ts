import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.authService.login(this.loginUserData).subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        this.router.navigate(['/special']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
