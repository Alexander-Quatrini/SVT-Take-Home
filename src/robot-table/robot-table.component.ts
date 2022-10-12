import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Robot } from 'src/models/IRobotResponse.model';
import { APIService } from 'src/services/api.service';

@Component({
  selector: 'app-robot-table',
  templateUrl: './robot-table.component.html',
  styleUrls: ['./robot-table.component.css']
})
export class RobotTableComponent implements OnInit {

  constructor(private apiService: APIService) { }

  robots: Robot[] = [];
  failed: boolean = false;
  loading: boolean = true;
  counter: number = 0;


  ngOnInit(): void {
    while(this.robots.length == 0 && this.counter < 3){
      this.retrieveRobotInfo();
      this.counter++;
    }
  }

  retrieveRobotInfo(): void{
    firstValueFrom(this.apiService.retrieveAPIResponse()).then(
      data => {
        this.robots = data;
        console.log(this.robots);
        this.failed = false;
        this.loading = false;
        console.log(this.loading);
      }
    ).catch(err => {
      const error = err as HttpErrorResponse;
      console.log(error.message);
      this.failed = true;
      this.loading = false;
    })
  }

}
