import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';
import { PipeInsultoPipe } from './pipe-insulto.pipe';
import { DirectivaRaraDirective } from './directiva-rara.directive';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    PadreComponent,
    PipeInsultoPipe,
    DirectivaRaraDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
