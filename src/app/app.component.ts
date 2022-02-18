import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

declare function iniciaJs():any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   constructor(
     @Inject(PLATFORM_ID) private platformId: Object,
      private title:Title,
      private meta: Meta 
      ) {
        this.title.setTitle(' Ivan Morillo | Sitio Web');
        this.meta.addTags([
          {name: 'description', content: 'Soy ivan morillo, desarrollador con más de 3 años de experiencia en el medio laboral, trabajando con tecnologías como Angular, Nodejs, Php, Mysql, Mongodb, entre otras.'},
          {name: 'keywords', content: 'ivan morillo,desarrollador,web,programación,developer,angular,javascript'},
        ]);
      }
   

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      iniciaJs();
      this.cargarTema();
    }
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
