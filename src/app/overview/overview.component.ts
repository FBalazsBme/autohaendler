import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfigstepComponent } from '../configstep/configstep.component';
import {Categories} from "../utils/categories";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  color: string;
  categories = Categories;

@Output('onTest') onChange = new EventEmitter<boolean>();

  constructor(private configstep: ConfigstepComponent) {
    this.color = "#0286BC"
  }

  onClickEdit():void{
    this.onChange.emit(true);
    if(this.configstep.count>0){
      this.configstep.count=0;
      this.configstep.index=0;
    }else{
      console.log("Subtrahiert nicht mehr, weil die Zahl sonst zu klein ist");
    }
  }

  onClickEdit1():void{
    if(this.configstep.count>0){
      this.configstep.count=1;
      this.configstep.index=0;
    }else{
      console.log("Subtrahiert nicht mehr, weil die Zahl sonst zu klein ist");
    }
  }

  onClickEdit2():void{
    if(this.configstep.count>0){
      this.configstep.count=2;
      this.configstep.index=0;
    }else{
      console.log("Subtrahiert nicht mehr, weil die Zahl sonst zu klein ist");
    }
  }
  onClickEdit3():void{
    if(this.configstep.count>0){
      this.configstep.count=3;
      this.configstep.index=0;
    }else{
      console.log("Subtrahiert nicht mehr, weil die Zahl sonst zu klein ist");
    }
  }

  onClickEdit4():void{
    if(this.configstep.count>0){
      this.configstep.count=4;
      this.configstep.index=0;
    }else{
      console.log("Subtrahiert nicht mehr, weil die Zahl sonst zu klein ist");
    }
  }
  onClickEdit5():void{
    if(this.configstep.count>0){
      this.configstep.count=5;
      this.configstep.index=0;
    }else{
      console.log("Subtrahiert nicht mehr, weil die Zahl sonst zu klein ist");
    }
  }

  onClickEdit6():void{
    if(this.configstep.count>0){
      this.configstep.count=6;
      this.configstep.index=0;
    }else{
      console.log("Subtrahiert nicht mehr, weil die Zahl sonst zu klein ist");
    }
  }


}
