import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public name: string;
  public pass: string;
  url:string;
  result:Observable<any>;  
  constructor(private http: HttpClient,private router: Router) { }
  
  onSignIn(){

    // if(this.pass != null && this.name != null)
    // {
      console.log(this.name);
      this.url = "http://127.0.0.1:3000/signin?searchtext="+this.name;
      console.log(this.url);
      this.http.get(this.url).subscribe((res:any)=>{
        this.result = res.data;
        if(this.result)
        {
          if(this.pass == res.data.password)
          {
            this.router.navigate(['/Home']);
          }
        }
        console.log(this.result);
      })
    // }
  //   else{
  //     alert("Incorrect Username or Password Please try again Later......!")
  //   }
  }
  ngOnInit() {
  }
  }

