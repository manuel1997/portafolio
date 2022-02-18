import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  check:any;

  constructor( @Inject(DOCUMENT) private _document:Document ) { 
    this.cargarTema();
  }

  cargarTema(){
    if(localStorage.getItem('tema')){
      this.aplicarTema();
    }
  }

  aplicarTema(){
    this._document.getElementById('tema')?.classList.add('dark');
    localStorage.setItem('tema','dark');
    this.check = true;
  }

  quiarTema(){
    this._document.getElementById('tema')?.classList.remove('dark');
    localStorage.removeItem('tema');
    this.check = false;
  }

}
