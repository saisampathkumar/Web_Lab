import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  url:string;
  result:Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.url = 'http://127.0.0.1:3000/course/search'
    this.http.get(this.url).subscribe((res:any)=>{
      this.result = res.data;
      console.log(this.result);
    })
  }

}
