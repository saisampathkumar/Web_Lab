import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component'
import {SignupComponent} from './signup/signup.component'
import { OnlineCoursesComponent } from './online-courses/online-courses.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { VideoLessonsComponent } from './video-lessons/video-lessons.component';
import { DiscoverBooksComponent } from './discover-books/discover-books.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { CoursesComponent } from './courses/courses.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CourseEditComponent } from './course-edit/course-edit.component';


const routes: Routes = [
  { path: 'SignUp', component: SignupComponent},
  { path: 'SignIn', component: SignInComponent},
  { path: 'Courses', component: CoursesComponent},
  { path: 'Friends', component: FriendsComponent},
  { path: 'DiscoverBooks', component: DiscoverBooksComponent},
  { path: 'VideoLessons', component: VideoLessonsComponent},
  { path: 'Announcements', component: AnnouncementsComponent},
  { path: 'Home', component: ProfileComponent},
  { path: 'OnlineCourses', component: OnlineCoursesComponent},
  { path: 'Profile', component: ProfileComponent},
  { path: 'editProfile', component:EditProfileComponent},
  { path: 'edit_course', component: CourseEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignInComponent, SignupComponent, OnlineCoursesComponent, ProfileComponent, VideoLessonsComponent,
   FriendsComponent, DiscoverBooksComponent, CoursesComponent, AnnouncementsComponent, EditProfileComponent, CourseEditComponent]
