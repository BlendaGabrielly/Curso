import { Injectable } from '@angular/core';
import { Course } from 'src/app/courses/model/course';
import { delay, first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  private readonly API = '/assets/courses.json';

  list() {
    return this.http.get<Course[]>(this.API).pipe(
      first(),
      delay(2000),
      tap(courses => console.log(courses))
    );
  }
}
