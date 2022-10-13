import { Component, OnInit } from '@angular/core';
import  noUiSlider, { PipsMode } from 'noUiSlider';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var slider = document.getElementById('slider')!;

    noUiSlider.create(slider, {
      start: [1, 100],
      connect: true,
      step: 1,
      range: {
          'min': 1,
          'max': 100
      },
      format: {
        from: (num) => Number.parseFloat(num),
        to: (number) => Math.round(number),
      }
    });
  }

}
