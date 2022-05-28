import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Categories } from '../utils/categories';


@Component({
  selector: 'configstep',
  templateUrl: './configstep.component.html',
  styleUrls: ['./configstep.component.css']
})
export class ConfigstepComponent{
  categoriesImageMap = new Map<string, any>();
  categoriesBoxMap = new Map<string, any>();
  currentFeature: number;
  count=0;
  index=0;
  selected = new FormControl(0);
  selectedcategoriesMap = new Map<string, any>();
  categories = Categories;

  /** TODO CLAUDIA
   * @categories bla
   * @categoriesImageMap bli
   * @categoriesBoxMap blu
   * @currentFeature indexing our feature step (subject to be changed by Tab bar or skip / back / add button)
   */
  constructor() {
    this.categoriesImageMap.set(Categories.Aussenfarbe,this.images1)
    this.categoriesImageMap.set(Categories.Sitze,this.images2)
    this.categoriesImageMap.set(Categories.USB,this.images6)


    this.categoriesBoxMap.set(Categories.Aussenfarbe,this.boxes1)
    this.categoriesBoxMap.set(Categories.Sitze,this.boxes2)
    this.categoriesBoxMap.set(Categories.USB,this.boxes6)

    this.categoriesImageMap.set(Categories.Interieurleisten,this.images3)
    this.categoriesImageMap.set(Categories.Motor,this.images4)
    this.categoriesImageMap.set(Categories.USB,this.images6)

    this.categoriesBoxMap.set(Categories.Aussenfarbe,this.boxes1)
    this.categoriesBoxMap.set(Categories.Sitze,this.boxes2)
    this.categoriesBoxMap.set(Categories.Interieurleisten,this.boxes3)
    this.categoriesBoxMap.set(Categories.Motor,this.boxes4)
    this.categoriesBoxMap.set(Categories.USB,this.boxes6)

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
    "../../assets/images/USB/usb0.PNG",
    "../../assets/images/USB/usb2.PNG",
    "../../assets/images/USB/usb4.PNG"


  ]
  boxes6= [
    {
      infoText: "InfoText1",
    },
    {
      infoText:"InfoText1",
    },
    {
      infoText:"InfoText1",
    }
  ]

  getBoxes(cat:string) {
   return this.categoriesBoxMap.get(cat)
  }
  getIndex(cat:string){
    return Object.keys(Categories).indexOf(cat);
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
      for(const category in Object.values(Categories)){
        this.selectedcategoriesMap.set(category,"test");
      }
      console.log("Initialisierung abgeschlossen");
   }
   selectedFeatures(indM:number,indA:number):void{
    this.selectedcategoriesMap.set(Object.values(Categories)[indM],indA)
   }
   viewSelected():void{
        for(const [key,value] of this.selectedcategoriesMap){
          console.log(key,value)
        }
   }
   onEditOverview(value: boolean){
     console.log("Hello World"+ value)
   }

   getEnumLength(): number {
     return Object.keys(Categories).length;
   }

   getCategories(): string[] {
    return Object.values(Categories);
   }
}



