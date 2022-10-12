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

  ngOnInit(): void {
    firstValueFrom(this.apiService.retrieveAPIResponse()).then(
      data => {
        this.robots = data;
        console.log(this.robots);
      }
    )
  }

}
