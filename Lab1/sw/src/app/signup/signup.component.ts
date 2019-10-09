import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public firstName : string;
  public lastName : string;
  public Password : string;
  public Password1 : string;
  public email: string;
  url: string;
  message:Observable<any>
  constructor(private http: HttpClient) { }

  onRegister(){
    this.url = "http://127.0.0.1:3000/signup"
    this.http.post(this.url,{
      name: this.firstName +" "+ this.lastName ,
      email: this.email,
      password: this.Password,
    })
    .subscribe(
      (res:any)=>{
        this.message = res.message;
        alert(this.message);
        console.log(this.message);
      }
    )
  }
  ngOnInit() {
  }

}
