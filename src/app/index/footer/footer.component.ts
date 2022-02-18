import { Component } from '@angular/core';
import { ConfigService } from '../config.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {

  constructor(private _configService:ConfigService) { }

  toggleModal(){
    this._configService.toggleModal();
  }

}
