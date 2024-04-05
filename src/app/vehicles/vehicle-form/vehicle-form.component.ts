import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { IVehicle } from '../models/vehicle.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaskitoOptions } from '@maskito/core';

import yearInputMask from '../../core/utils/masks/year-mask';
import odometerMask from '../../core/utils/masks/odometer-mask';
import { maskPredicate } from '../../core/utils/masks/element-predicate';
import { VehicleTypeEnum, VehicleTypeSelect } from '../models/vehicle-type.enum';
import { ToastUtils } from 'src/app/core/utils/toast/toast';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VehicleFormComponent implements OnInit {

  @Input() modal: IonModal;

  readonly maskPredicate = maskPredicate;

  vehicleTypeSelect = VehicleTypeSelect();
  yearInputOptions: MaskitoOptions = yearInputMask;
  odometerInputOptions: MaskitoOptions = odometerMask;

  vehicleForm = new FormGroup({
    id: new FormControl<number>(null),
    plate: new FormControl<string>('', [Validators.required]),
    type: new FormControl<VehicleTypeEnum>(this.vehicleTypeSelect[0].value, [Validators.required]),
    brand: new FormControl<string>('', [Validators.required]),
    model: new FormControl<string>('', [Validators.required]),
    year: new FormControl<number>(null, [Validators.required, Validators.min(1911), Validators.maxLength(4)]),
    odometer: new FormControl<number>(0.00, [Validators.required, Validators.min(0), Validators.maxLength(12)]),
  })

  constructor(
    protected translate: TranslateService,
    protected toast: ToastUtils
  ) { }

  getVehicle() {
    return this.vehicleForm.value as IVehicle;
  }

  ngOnInit() {
    if (this.modal.componentProps && this.modal.componentProps['vehicle']) {
      const vehicle = this.modal.componentProps['vehicle'] as IVehicle;
      this.vehicleForm.patchValue(vehicle);
      this.vehicleForm.get('odometer').disable();
    }
  }

  submitForm() {
    this.vehicleForm.markAllAsTouched();
    if (this.vehicleForm.valid) {
      const vehicle = this.getVehicle();
      this.modal.dismiss(vehicle, 'confirm');
    } else {
      this.toast.display(
        this.translate.instant('VEHICLE.FORM_ERROR')
      );
    }
  }

  closeModal() {
    this.modal.dismiss(null, 'cancel');
  }
}
