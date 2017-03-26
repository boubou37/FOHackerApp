import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SolverComponent } from './solver/solver.component';
import { LazymodeComponent } from './lazymode/lazymode.component';
import { ManualmodeComponent } from './manualmode/manualmode.component';
import {SolverService} from "./solver/solver.service";

@NgModule({
  declarations: [
    AppComponent,
    SolverComponent,
    LazymodeComponent,
    ManualmodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
