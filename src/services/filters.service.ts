import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private range: BehaviorSubject<number[]>;

  constructor() { 
    this.range = new BehaviorSubject<number[]>([0,100]);
  }

  getRangeObservable(): Observable<number[]>{
    return this.range.asObservable();
  }

  setRange(values: number[]): void{
    this.range.next(values);
  }
}
