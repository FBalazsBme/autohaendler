import { MerlinApiService } from './merlin-api.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { SingleSettingResponse } from 'api';
//Example use of an UI-kit:

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit{
  title: string;
  settings: SingleSettingResponse | undefined;

  constructor(private service: MerlinApiService) {
    this.title="merlin-mobile"
  }
  
  ngOnInit(): void {
    this.service.keyCloakInit()
  }
  


}

