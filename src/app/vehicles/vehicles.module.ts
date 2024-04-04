import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiclesPageRoutingModule } from './vehicles-routing.module';

import { VehiclesPage } from './vehicles.page';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

const angularModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
]

const ionicModules = [
  IonicModule
]

const vehicleComponents = [
  VehiclesPage,
  VehicleFormComponent
]

@NgModule({
  imports: [
    ...angularModules,
    ...ionicModules,
    VehiclesPageRoutingModule
  ],
  declarations: [
    ...vehicleComponents
  ]
})

export class VehiclesPageModule { }
