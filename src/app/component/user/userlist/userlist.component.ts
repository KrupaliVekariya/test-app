import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUserList();
  }
  // for get user list
  async getUserList(){
    const res:any = await this.userService.getAllUser();
    if(res){
      console.log(res.data);
    }
  }
}
