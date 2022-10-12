import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { IRobotResponse } from 'src/models/IRobotResponse.model';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private API_URL: string = "https://60c8ed887dafc90017ffbd56.mockapi.io/robots";

  constructor(private http: HttpClient) { }

  retrieveAPIResponse(): Observable<IRobotResponse>{
       const obs = this.http.get<IRobotResponse>(this.API_URL);
       return obs;
  }

}
