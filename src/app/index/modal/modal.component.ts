import { Component } from '@angular/core';
import { ConfigService } from '../config.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent {

  constructor(public _configService:ConfigService) { }

  toggleModal(){
    this._configService.toggleModal();
  }

}
