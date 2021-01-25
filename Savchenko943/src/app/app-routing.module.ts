import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path:'', 
  component: InfoComponent,},
  {path:'product', 
  component: MainComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
