import { Component, ViewChild} from '@angular/core';
import { ConfigstepComponent } from '../configstep/configstep.component';

@Component({
  selector: 'app-buttonrow',
  templateUrl: './buttonrow.component.html',
  styleUrls: ['./buttonrow.component.css']
})
export class ButtonrowComponent {
  
  color: string;

  constructor(private configstep: ConfigstepComponent) {
    this.color = "#0286BC"
  }
  // TODO
  // ist hard gecoded
  onClickNext():void{
    if(this.configstep.count<6){
      this.configstep.count++;
      this.configstep.index=0;
    }else{
      console.log("Addiert nicht mehr, weil die Zahl sonst zu hoch ist - in der Next Methode");
    }
  }
  onClickBefore():void{
    if(this.configstep.count>0){
      this.configstep.count--;
      this.configstep.index=0;
    }else{
      console.log("Subtrahiert nicht mehr, weil die Zahl sonst zu klein ist");
    }
  }
  onClickAdd():void{
    if(this.configstep.count<6){
      this.configstep.selectedFeatures(this.configstep.count,this.configstep.index)
      console.log("Wurde im Einkaufwagen ergänzt "+ this.configstep.count +"         "+this.configstep.index)
      this.configstep.count++;
      this.configstep.index=0;
    }else{
      console.log("Addiert nicht mehr, weil die Zahl sonst zu hoch ist - in der Add Methode");
    }
  }

}
