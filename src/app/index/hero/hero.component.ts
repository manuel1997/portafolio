import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cargarTema(){
    if(localStorage.getItem('tema')){
      document.getElementById('tema')?.classList.add('dark');
      document.getElementById('toggle')?.setAttribute('checked','true');
      localStorage.setItem('tema','dark');
    }
  }

  confTema(toggle:any){
    if(toggle.checked == true) {
      document.getElementById('tema')?.classList.add('dark');
      localStorage.setItem('tema','dark');
    }else{
      document.getElementById('tema')?.classList.remove('dark');
      localStorage.removeItem('tema');
    }
  }

}
