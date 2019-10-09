import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  public name : string;
  public email : string;
  public userId : string;
  public department : string;
  public contact : string;
  public address : string;
  public age: string;
  public dob : string;
  public university : string;
  public major : string;
  public yearJoined : string;
  public image: String;

  url: string;
  message:Observable<any>
  constructor(private http: HttpClient) { }

  onProfile(){
    this.url = "http://127.0.0.1:3000/profile/Fillup"
    this.http.post(this.url,{
      name: this.name,
      email: this.email,
      userId: this.userId,
      contact: this.contact,
      age: this.email,
      dob: this.dob,
      major: this.major,
      department: this.department,
      university: this.university,
      address: this.address,
      image: this.image,
      yearJoined: this.yearJoined,
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
