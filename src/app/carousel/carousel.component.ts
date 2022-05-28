import { Component, Input} from '@angular/core';
import { ConfigstepComponent } from '../configstep/configstep.component';

interface box {
  text: string;
  infoText: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{
  @Input() images : string[] = []
  @Input() boxes: box[] = []
  @Input() count: number = 0;

  swipeCoord: [number, number] = [0,0];
  swipeTime = 0;
  selectedIndex = 0
  toggleSlider = false;

  constructor(private configstep: ConfigstepComponent){}

  selectImage(index: number): void {
    console.log('selectImage');
    console.log(index);
    this.selectedIndex = index;
  }

  swipeLeft(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }

  swipeRight(): void {
    if (this.selectedIndex < (this.images.length - 1))
    this.selectedIndex++;
  }

swipe(e: TouchEvent, when: string): void {
  const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
  const time = new Date().getTime();

  if (when === 'start') {
    this.swipeCoord = coord;
    this.swipeTime = time;
  } else if (when === 'end') {
    const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
    const duration = time - this.swipeTime;

    if (duration < 1000 //
      && Math.abs(direction[0]) > 30 // Long enough
      && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
        direction[0] < 0 ? this.swipeRight() : this.swipeLeft();
        // Do whatever you want with swipe
    }
  }
  this.configstep.index=this.selectedIndex;
}

  toggleAppSlider(event: boolean) {
    this.toggleSlider = event;
  }
}
