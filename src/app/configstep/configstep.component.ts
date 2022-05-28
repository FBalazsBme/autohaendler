import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'configstep',
  templateUrl: './configstep.component.html',
  styleUrls: ['./configstep.component.css']
})
export class ConfigstepComponent{
  categories: string[];
  categoriesImageMap = new Map<string, any>();
  categoriesBoxMap = new Map<string, any>();
  currentFeature: number;
  count=0;
  index=0;
  selected = new FormControl(0);
  selectedcategoriesMap = new Map<string, any>();

  /** TODO CLAUDIA
   * @categories bla
   * @categoriesImageMap bli 
   * @categoriesBoxMap blu
   * @currentFeature indexing our feature step (subject to be changed by Tab bar or skip / back / add button)
   */
  constructor() {  
    this.categories = ["Aussenfarbe", "Sitze", "Interieurleisten","Motor","Chiptuning","USB","Zusammenfassung"]

    this.categoriesImageMap.set(this.categories[0],this.images1)
    this.categoriesImageMap.set(this.categories[1],this.images2)
    this.categoriesImageMap.set(this.categories[5],this.images6)
    
  
    this.categoriesBoxMap.set(this.categories[0],this.boxes1)
    this.categoriesBoxMap.set(this.categories[1],this.boxes2)
    this.categoriesBoxMap.set(this.categories[5],this.boxes6)
    
    this.categoriesImageMap.set(this.categories[2],this.images3)
    this.categoriesImageMap.set(this.categories[3],this.images4)
    this.categoriesImageMap.set(this.categories[5],this.images6)
  
    this.categoriesBoxMap.set(this.categories[0],this.boxes1)
    this.categoriesBoxMap.set(this.categories[1],this.boxes2)
    this.categoriesBoxMap.set(this.categories[2],this.boxes3)
    this.categoriesBoxMap.set(this.categories[3],this.boxes4)
    this.categoriesBoxMap.set(this.categories[5],this.boxes6)

    this.currentFeature = 0;
    this.selectedInital();
  }

  images1 = [
    "../../assets/images/Aussenfarbe/Ferrari_schwarz.png",
    "../../assets/images/Aussenfarbe/Ferrari_blau.png",
    "../../assets/images/Aussenfarbe/Ferrari_gelb.png",
    "../../assets/images/Aussenfarbe/Ferrari_gruen.png",
    "../../assets/images/Aussenfarbe/Ferrari_rot.png",
    "../../assets/images/Aussenfarbe/Ferrari_weis.png"
  ]

  boxes1 = [
    {
      text: "Text1",
      infoText: "InfoText1",
    },
    {
      text: "Text2",
      infoText: "InfoText2",
    },
    {
      text: "Text3",
      infoText: "InfoText3",
    },
    {
      text: "Text4",
      infoText: "InfoText4",
    },
    {
      text: "Text5",
      infoText: "InfoText5",
    },{
      text: "Text6",
      infoText: "InfoText6",
    }
  ]

  images2 = [
    "../../assets/images/Sitze/Sitz1.png",
    "../../assets/images/Sitze/Sitz2.png",
    "../../assets/images/Sitze/Sitz3.png",
    "../../assets/images/Sitze/Sitz4.png",
  ]

  boxes2 = [
    {
      text: "SitzText1",
      infoText: "InfoText1",
    },
    {
      text: "SitzText2",
      infoText: "InfoText2",
    },
    {
      text: "SitzText3",
      infoText: "InfoText3",
    },
    {
      text: "SitzText4",
      infoText: "InfoText4",
    }
  ]
 

  images3 = [
    "../../assets/images/Interiuerleisten/Interiuerleiste1.png",
    "../../assets/images/Interiuerleisten/Interiuerleiste2.png",
    "../../assets/images/Interiuerleisten/Interiuerleiste3.png",
    "../../assets/images/Interiuerleisten/Interiuerleiste4.png",
  ]

  boxes3 = [
    {
      text: "Interiuerleisten1",
      infoText: "InfoText1",
    },
    {
      text: "Interiuerleisten2",
      infoText: "InfoText2",
    },
    {
      text: "Interiuerleisten3",
      infoText: "InfoText3",
    },
    {
      text: "Interiuerleisten4",
      infoText: "InfoText4",
    }
  ]
  images4 = [
    "../../assets/images/Motor/Motor1.png",
    "../../assets/images/Motor/Motor2.png",
    "../../assets/images/Motor/Motor3.png",
    "../../assets/images/Motor/Motor4.png",
  ]

  boxes4 = [
    {
      text: "Motor1",
      infoText: "InfoText1",
    },
    {
      text: "Motor2",
      infoText: "InfoText2",
    },
    {
      text: "Motor3",
      infoText: "InfoText3",
    },
    {
      text: "Motor4",
      infoText: "InfoText4",
    }
  ]

  images5 = [
    "../../assets/images/Motor/Motor1.png",
    "../../assets/images/Motor/Motor2.png",
    "../../assets/images/Motor/Motor3.png",
    "../../assets/images/Motor/Motor4.png",
  ]

  boxes5 = [
    {
      text: "Motor1",
      infoText: "InfoText1",
    },
    {
      text: "Motor2",
      infoText: "InfoText2",
    },
    {
      text: "Motor3",
      infoText: "InfoText3",
    },
    {
      text: "Motor4",
      infoText: "InfoText4",
    }
  ]

  images6 = [
    "../../assets/images/USB/usb2.PNG",
    "../../assets/images/USB/usb4.PNG"
    
   
  ]
  boxes6= [
    {
      infoText: "InfoText1",
    },
    {
      infoText:"InfoText1",
    }
  ]

  getBoxes(cat:string) {
   return this.categoriesBoxMap.get(cat)
  }
  getIndex(cat:string){
    let aktu =0;
    for (let i=0; i<this.categories.length;i++){
      if(this.categories[i]==cat){
        aktu=i;
      }
    }
    return aktu;
  }

  getImages(cat:string) {
    return this.categoriesImageMap.get(cat)
   }
   getImagesIndex():number {
    return this.index;

   }

   getCount():number{
     return this.count;
   }
   setCount(zahl:number):void{
     this.index=0;
     this.count=zahl;
   }
   selectedInital():void{
      for(let u=0;u<this.categories.length;u++){
        this.selectedcategoriesMap.set(this.categories[u],"test");
      }
      console.log("Initialisierung abgeschlossen")
   }
   selectedFeatures(indM:number,indA:number):void{
    this.selectedcategoriesMap.set(this.categories[indM],indA)
   }
   viewSelected():void{
        for(const [key,value] of this.selectedcategoriesMap){
          console.log(key,value)
        }
   }
   onEditOverview(value: boolean){
     console.log("Hello World"+ value)

   }
}



