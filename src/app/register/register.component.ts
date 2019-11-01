import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.authService.register(this.registerUserData).subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        this.router.navigate(['/special']);
      },
      err =>{
        console.log(err)
      }
    );
  }

}
