import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
  constructor(private http: HttpClient, private router: Router) { }

  onRegister(){
    if(this.Password == this.Password1){
    if(this.lastName != null && this.firstName != null && this.Password != null && this.Password1!=null && this.email!=null)
    {
    this.url = "http://127.0.0.1:3000/signup/register"
    this.http.post(this.url,{
      name: this.firstName +" "+ this.lastName ,
      email: this.email,
      password: this.Password,
    })
    .subscribe(
      (res:any)=>{
        this.message = res.message;
        alert(this.message);
        this.router.navigate(['/Home']);
        console.log(this.message);
      }
    )
    }
    else{
      alert("Please fill the form correctly");
    }
  }
  else{
    alert("Passwords are not matching");
  }
  }
  ngOnInit(){
  }

}
