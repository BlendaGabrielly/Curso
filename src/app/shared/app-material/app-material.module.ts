import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({

  exports:[
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatProgressSpinnerModule

  ]
})
export class AppMaterialModule { }
