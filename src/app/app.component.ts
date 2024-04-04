import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './core/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    public storageService: StorageService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.storageService.init();
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang());
  }

}
