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
  url_base:string = 'https://manuel1997.github.io/portafolio-web/';

   constructor(
     @Inject(PLATFORM_ID) private platformId: Object,
      private title:Title,
      private meta: Meta 
      ) {
        this.title.setTitle('Ivan Morillo | Desarrollador de Aplicaciones Web');
        this.meta.updateTag({name: 'description', content: 'Hola soy ivan morillo, desarrollador de aplicaciones web, con tecnologías como Angular, Nodejs, Php, Mysql, Mongodb, entre otras.'}); 
        this.meta.updateTag({name: 'keywords', content: 'ivan morillo,desarrollador,web,programación,developer,angular,javascript'});

        this.meta.updateTag({property: 'og:title', content: 'Ivan Morillo | Desarrollador de Aplicaciones Web'});
        this.meta.updateTag({property: 'og:description', content: 'Hola soy ivan morillo, desarrollador de aplicaciones web, con tecnologías como Angular, Nodejs, Php, Mysql, Mongodb, entre otras.'});
        this.meta.updateTag({property: 'og:image', content:`${this.url_base}assets/img/portafolio.png`});
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
