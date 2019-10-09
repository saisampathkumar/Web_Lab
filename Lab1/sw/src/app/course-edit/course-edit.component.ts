import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  public courseName: string;
  public professorName: string;
  public credits: string;
  public courseId: string;
  public url: string
  message: Observable<any>
  constructor(private http: HttpClient) { }

  onRegister() {
    console.log('hello');
    this.url = 'http://127.0.0.1:3000/courseDetails/save'
    this.http.post(this.url, {
      courseName: this.courseName ,
      professorName: this.professorName,
      credits: this.credits,
      courseId: this.courseId,
    })
      .subscribe(
        (res: any) => {
          this.message = res.message;
          alert(this.message);
          console.log(this.message);
        }
      );
  }
  ngOnInit() {
  }

}
