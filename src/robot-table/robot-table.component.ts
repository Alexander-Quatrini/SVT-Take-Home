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
  previousKey: string = "";
  reverse: boolean = false;
  headerStrings: string[] = ["Robot ID \u25BC", "Battery Level", "X-Position", "Y-Position"];

  ngOnInit(): void {
    
    this.retrieveRobotInfo();
    
    this.filterService.getRangeObservable().subscribe((value) => {
      this.range = [...value];
      this.updateFilters();
    });
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
    });

    this.sortList('Robot ID', false);
  }

  sortList(type: string, toggle: boolean): void{
    
    if(toggle){
      if(this.previousKey === type){
        this.reverse = !this.reverse;
      } else{
        this.reverse = false;
      }
    }
    
    let arrow = this.reverse ? " \u25BC" : " \u25B2";
    this.previousKey = type;


    this.headerStrings = ["Robot ID", "Battery Level", "X-Position", "Y-Position"];
    switch(type){
      case 'Robot ID': this.filteredRobots.sort((a,b) => {
          return a.robotId-b.robotId;
        });

        if(this.reverse){
          this.filteredRobots.reverse();
        }

        this.headerStrings[0] = "Robot ID" + arrow;

        break;
      case 'Battery Level': this.filteredRobots.sort((a,b) => {
          return a.batteryLevel-b.batteryLevel;
        });

        if(this.reverse){
          this.filteredRobots.reverse();
        }

        this.headerStrings[1] = "Battery Level" + arrow;

        break; 
        
      case 'X-Position': this.filteredRobots.sort((a,b) => {
          return a.x-b.x;
        });

        if(this.reverse){
          this.filteredRobots.reverse();
        }

        this.headerStrings[2] = "X-Position" + arrow;

        break;
      case 'Y-Position': this.filteredRobots.sort((a,b) => {
          return a.y-b.y;
        });

        if(this.reverse){
          this.filteredRobots.reverse();
        }

        this.headerStrings[3] = "Y-Position" + arrow;

        break;

      default:
        this.filteredRobots.sort((a,b) => {
          return a.robotId-b.robotId;
        });

        if(this.reverse){
          this.filteredRobots.reverse();
        }

        this.headerStrings[0] = "Robot ID" + arrow;

        break;
    }

  }

}
