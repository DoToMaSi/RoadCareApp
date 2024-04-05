import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { IVehicle } from './models/vehicle.interface';
import { VehicleService } from './services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage {


  constructor(
    public vehicleService: VehicleService,
    protected modalCtrl: ModalController
  ) { }

  get vehicles() {
    return this.vehicleService.getVehicles();
  }

  async openVehicleForm(vehicle?: IVehicle) {
    const modal = await this.modalCtrl.create({
      component: VehicleFormComponent,
      componentProps: {
        vehicle
      }
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') { }
  }

}
