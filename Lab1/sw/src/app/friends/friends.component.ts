import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  url:string;
  result:Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.url = 'http://127.0.0.1:3000/friends/search'
    this.http.get(this.url).subscribe((res: any) => {
      this.result = res.data;
      console.log(this.result);
    });
  }

}
