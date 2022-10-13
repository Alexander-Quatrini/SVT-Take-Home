import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Robot } from 'src/models/IRobotResponse.model';
import { APIService } from 'src/services/api.service';
import { FiltersService } from 'src/services/filters.service';

@Component({
  selector: 'app-robot-table',
  templateUrl: './robot-table.component.html',
  styleUrls: ['./robot-table.component.css']
})
export class RobotTableComponent implements OnInit {

  constructor(private apiService: APIService, private filterService: FiltersService) { }

  robots: Robot[] = [];
  failed: boolean = false;
  loading: boolean = true;
  counter: number = 0;
  range: number[] = [];
  filteredRobots: Robot[] = [];

  ngOnInit(): void {
      this.filterService.getRangeObservable().subscribe((value) => {
        this.range = [...value];
        this.updateFilters();
      })

      this.retrieveRobotInfo();
  }

  retrieveRobotInfo(): void{
    firstValueFrom(this.apiService.retrieveAPIResponse()).then(
      data => {
        this.robots = [...data];
        this.filteredRobots = [...data];
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

  updateFilters(): void{

    this.filteredRobots = this.robots.filter(robot => {
      return (robot.robotId >= this.range[0] && robot.robotId <= this.range[1]);
    })
  }

}
