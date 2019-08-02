import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RootComponent} from "./root/root.component";
import {LocalrunsComponent} from "./localruns/localruns.component";
import {Testsetmatrix2Component} from "./testsetmatrix2/testsetmatrix2.component";
import {LocalrunreportComponent} from "./localrunreport/localrunreport.component";

const routes: Routes = [
  { path:'' , component : HomeComponent},
  { path:'home' , component : HomeComponent},
  {path: 'testsetmatrix2/:testsetid' , component: Testsetmatrix2Component},
  {path: 'localruns' , component: LocalrunsComponent} ,
  {path: 'localrunreport/:sessionid' , component: LocalrunreportComponent} ,



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
