import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { IVehicle } from '../models/vehicle.interface';

@Injectable()

export class VehicleService {

  protected vehicles: IVehicle[] = [];

  constructor(protected storage: StorageService) { }

  getVehicles() {
    return this.vehicles;
  }

}
