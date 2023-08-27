import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';



@NgModule({
  
  exports:[
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule

  ],
})
export class AppMaterialModule { }
