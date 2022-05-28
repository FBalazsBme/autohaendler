import { Component } from '@angular/core';
import { MerlinApiService } from '../merlin-api.service';

/**
 * Component for the frontpage before the actual configuration starts.
 */
@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css'],
})
export class FrontpageComponent{
  color: string;
  logo: string;
  
  constructor() {
    this.color = "#0286BC"
    this.logo = "\\..\\assets\\mariologo.png"
    }
  }


