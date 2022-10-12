import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { APIService } from 'src/services/api.service';
import { RobotTableComponent } from '../robot-table/robot-table.component';

@NgModule({
  declarations: [
    AppComponent,
    RobotTableComponent
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
