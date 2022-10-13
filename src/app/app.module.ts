import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { APIService } from 'src/services/api.service';
import { RobotTableComponent } from '../robot-table/robot-table.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    RobotTableComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ APIService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
