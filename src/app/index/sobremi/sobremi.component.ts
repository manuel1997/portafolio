import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styles: [
  ]
})
export class SobremiComponent {
  constructor(private _configService:ConfigService) { }

  toggleModal(){
    this._configService.toggleModal();
  }

}
