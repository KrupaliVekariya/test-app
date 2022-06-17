import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.url;
  constructor(public http: HttpClient) {
    console.log(this.url);
  }

  get(url:any, params?: any, reqOpts?: any) {
    return this.http.get(this.url+url, reqOpts );
  }

  post(url:any, body: any, reqOpts?: any) {
    return this.http.post(this.url+url, body, reqOpts);
  }

  put(url:any, body: any, reqOpts?: any) {
    return this.http.put(this.url+url, body, reqOpts);
  }

  delete(url:any, body:any) {
    let header = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json').set("Access-Control-Allow-Origin", "*"),
        body: body || {}
    }
    return this.http.delete(url,header);
  }
  //For contract model
  

}