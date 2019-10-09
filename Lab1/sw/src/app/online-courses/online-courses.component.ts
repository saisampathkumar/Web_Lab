import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-online-courses',
  templateUrl: './online-courses.component.html',
  styleUrls: ['./online-courses.component.css']
})
export class OnlineCoursesComponent implements OnInit {

  url: string;
  result: Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}
