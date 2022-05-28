import { ConfigstepComponent } from './configstep/configstep.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'configstep', component: ConfigstepComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
