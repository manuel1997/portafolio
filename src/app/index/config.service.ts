import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  showModal = false;
  constructor() { }

  toggleModal(){
    this.showModal = !this.showModal;
  }
}
