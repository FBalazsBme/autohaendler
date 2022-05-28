import { Component} from '@angular/core';

@Component({
  selector: 'app-toprow',
  templateUrl: './toprow.component.html',
  styleUrls: ['./toprow.component.css']
})
export class ToprowComponent {
  banner: string;
  color: string;
  constructor() {
    this.banner = "\\..\\assets\\mariobanner.png"
    this.color = "\\..\\assets\\mariologo.png"
  }
 
}
