import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
   courses:Course[]=[
    {_id:'1', name:'bb', category:'chuva'},
    {_id:'2', name:'b', category:'chuva'},
    {_id:'3', name:'bb', category:'chuva'},
    {_id:'4', name:'bb', category:'chuva'},
    {_id:'5', name:'bb', category:'chuva'},
    {_id:'6', name:'bb', category:'chuva'}
   ];
   displayedColumns = ["name", 'category'];


   constructor(){}
   ngOnInit(): void {

   }
}
