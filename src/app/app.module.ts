import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './index/hero/hero.component';
import { SobremiComponent } from './index/sobremi/sobremi.component';
import { TecnologiasComponent } from './index/tecnologias/tecnologias.component';
import { PortafolioComponent } from './index/portafolio/portafolio.component';
import { FooterComponent } from './index/footer/footer.component';
import { ModalComponent } from './index/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SobremiComponent,
    TecnologiasComponent,
    PortafolioComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ng-universal-demystified'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
