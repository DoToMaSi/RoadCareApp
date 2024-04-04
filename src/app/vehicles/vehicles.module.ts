import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiclesPageRoutingModule } from './vehicles-routing.module';

import { VehiclesPage } from './vehicles.page';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { MaskitoDirective } from '@maskito/angular';

const angularModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
]

const ionicModules = [
  IonicModule
]

const miscImports = [
  MaskitoDirective
]

const vehicleComponents = [
  VehiclesPage,
  VehicleFormComponent
]

@NgModule({
  imports: [
    ...angularModules,
    ...ionicModules,
    ...miscImports,
    VehiclesPageRoutingModule
  ],
  declarations: [
    ...vehicleComponents
  ]
})

export class VehiclesPageModule { }
