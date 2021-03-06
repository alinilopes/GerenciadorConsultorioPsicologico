import { RelatorioCardComponentModule } from './../components/relatorio-card/relatorio-card.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelatoriosPageRoutingModule } from './relatorios-routing.module';

import { RelatoriosPage } from './relatorios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelatoriosPageRoutingModule,
    RelatorioCardComponentModule
  ],
  declarations: [RelatoriosPage]
})
export class RelatoriosPageModule {}
