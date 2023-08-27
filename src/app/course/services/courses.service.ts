import { Injectable } from '@angular/core';
import { Course } from 'src/app/courses/model/course';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient:HttpClient) { }

  list(): Course[]{
    return[
      {_id:'1', name:'berenice', category:'front-end'},
      {_id:'2', name:'b', category:'chuva'},
      {_id:'3', name:'bb', category:'chuva'},
      {_id:'4', name:'bb', category:'chuva'},
      {_id:'5', name:'bb', category:'chuva'},
      {_id:'6', name:'bb', category:'chuva'}
     ];
  }
}
