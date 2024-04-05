export enum VehicleTypeEnum {
  Car = 1,
  Bike = 2,
  Truck = 3,
}

export const VehicleTypeEnumLabel = new Map<VehicleTypeEnum, string>([
  [VehicleTypeEnum.Car, 'VEHICLE.TYPE.CAR'],
  [VehicleTypeEnum.Bike, 'VEHICLE.TYPE.BIKE'],
  [VehicleTypeEnum.Truck, 'VEHICLE.TYPE.TRUCK'],
])

export const VehicleTypeSelect = () => {
  return [...VehicleTypeEnumLabel].map((vehicle) => {
    return {
      value: vehicle[0],
      label: vehicle[1]
    }
  })
}
