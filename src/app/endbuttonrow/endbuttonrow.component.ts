import { Component, OnInit } from '@angular/core';
import { ConfigstepComponent } from '../configstep/configstep.component';


@Component({
  selector: 'app-endbuttonrow',
  templateUrl: './endbuttonrow.component.html',
  styleUrls: ['./endbuttonrow.component.css']
})
export class EndbuttonrowComponent {


  color: string;

  constructor(private configstep: ConfigstepComponent) {
    this.color = "#0286BC"
  }
  onClickBefore():void{
    if(this.configstep.count>0){
      this.configstep.count--;
      this.configstep.index=0;
    }else{
      console.log("Subtrahiert nicht mehr, weil die Zahl sonst zu klein ist");
    }
  }
  onClickNext():void{
    if(this.configstep.count<6){
      this.configstep.count++;
      this.configstep.index=0;
    }else{
      console.log("Addiert nicht mehr, weil die Zahl sonst zu hoch ist - in der Next Methode");
    }
  }
  }
