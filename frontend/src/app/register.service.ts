import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  message: any;
  url = 'http://localhost:4000/register';
  constructor(private http: HttpClient) { }
  getDataApi(){
    this.http.get('http://localhost:4000/post').subscribe(res => {
      console.log(res);
      this.message = res;

    });
  }
  postEvents(user) {
    this.http.post(this.url,user).subscribe(res => {
    });
}

  sendEmail(url, data){
    return this.http.post(url, data);
}
}