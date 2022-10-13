import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import  noUiSlider, { PipsMode } from 'noUiSlider';
import { FiltersService } from 'src/services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FiltersComponent implements OnInit {

  constructor(private filterService: FiltersService) { }

  ngOnInit(): void {

    var slider = document.getElementById('slider')!;

    var sliderEventListener = noUiSlider.create(slider, {
      start: [1, 100],
      connect: true,
      step: 1,
      range: {
          'min': 1,
          'max': 100
      },
      pips: {
        mode: PipsMode.Count,
        values: 2,
        density: 0

      },
      tooltips: true,
      format: {
        from: (num) => Number.parseFloat(num),
        to: (number) => Math.round(number),
      }
    });

    sliderEventListener.on('set', (values) => {
      this.filterService.setRange(values.map(Number));
    });

  }

}
