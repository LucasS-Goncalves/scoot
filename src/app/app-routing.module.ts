import { AboutComponent } from './components/about/about.component';
import { LocationsComponent } from './components/locations/locations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CareersComponent } from './components/careers/careers.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'careers', component: CareersComponent
  },
  {
    path: 'locations', component: LocationsComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
