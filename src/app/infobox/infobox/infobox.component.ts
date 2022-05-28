import { Component, Input } from '@angular/core';
/**
 * Component for handling the specifications and their textual information about a feauture.
 */
@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css']
})
export class InfoboxComponent {

  @Input()
  text = '';
  @Input()
  infoText = '';
  @Input()
  color = '';

  toggle = false;

  doToggle():void{
    this.toggle = !this.toggle;
  }

}
