import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Output() selectPicture = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  emitValue(event: MatSliderChange) {

  }
}
