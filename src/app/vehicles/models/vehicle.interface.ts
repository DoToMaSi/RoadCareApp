import { VehicleTypeEnum } from './vehicle-type.enum';

export interface IVehicle {

  id?: number;
  plate: string;
  type: VehicleTypeEnum;
  brand: string;
  model: string;
  year: number;
  odometer: number;

}
