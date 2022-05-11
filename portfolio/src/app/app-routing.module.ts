import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutMe1Component } from './components/about-me1/about-me1.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoadComponent } from './components/load/load.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path:'land',component:LandingComponent},
  {path:'skills',component:SkillsComponent},
  {path:'about',component:AboutMeComponent},
  {path:'aboutme',component:AboutMe1Component},
  {path:'load',component:LoadComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
