import { Injectable } from '@angular/core';
import { config } from './shared/api.config';
import { ApiService } from './shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  // get all user recored
  getAllUser(){
    return new Promise((resolve,reject) => {
      const action = config.api.user.userList;
      this.apiService.get(action).subscribe((res:any) => {
        if(res){
          resolve(res);
        }
      }, (err) => {
        reject(err);
      })
    })
  }
}