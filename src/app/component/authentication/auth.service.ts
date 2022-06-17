import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    userDetails:any={username:'',password:''};
   constructor() { }

   // for set user details
   setUserDetails(username,password){
    this.userDetails.username = username;
    this.userDetails.password = password;
   }

   // for get user details
   getUserDetails(){
    return this.userDetails;
   }
}