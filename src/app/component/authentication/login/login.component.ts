import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Login } from '../auth.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:Login;
  password:Login;
  constructor(private router:Router,private authService:AuthService) { }
 
  ngOnInit(): void {
    
  }

  // for login
  async login (){
    // if(this.username && this.password){
    //  await this.authService.setUserDetails(this.username,this.password);
    //   this.router.navigate(['Qr-Code']);
    // }
  }


}
