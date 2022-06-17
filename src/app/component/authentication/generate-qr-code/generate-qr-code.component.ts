import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-generate-qr-code',
  templateUrl: './generate-qr-code.component.html',
  styleUrls: ['./generate-qr-code.component.css']
})
export class GenerateQrCodeComponent implements OnInit {

  userDetails:any;
  constructor(private authService:AuthService) { }

  async ngOnInit(): Promise<void> {
    this.userDetails = await this.authService.getUserDetails();
  }

}
