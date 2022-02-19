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
        this.title.setTitle('Ivan Morillo | Desarrollador de Aplicaciones Web');
        this.meta.addTags([
          {name: 'description', content: 'Hola soy ivan morillo, desarrollador de aplicaciones web, con tecnologías como Angular, Nodejs, Php, Mysql, Mongodb, entre otras.'},
          {name: 'keywords', content: 'ivan morillo,desarrollador,web,programación,developer,angular,javascript'},

          {name: 'og:title', content: 'Ivan Morillo | Desarrollador de Aplicaciones Web'},
          {name: 'og:description', content: 'Hola soy ivan morillo, desarrollador de aplicaciones web, con tecnologías como Angular, Nodejs, Php, Mysql, Mongodb, entre otras.'},
          {name: 'og:image', content: 'assets/img/portafolio.png'},
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
