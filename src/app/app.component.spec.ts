import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {ManualmodeComponent} from "./manualmode/manualmode.component";
import {LazymodeComponent} from "./lazymode/lazymode.component";
import {AlertConfig, AlertModule} from "ng2-bootstrap";
import {FormsModule} from "@angular/forms";
import {SolverComponent} from "./solver/solver.component";
import {HttpModule} from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ManualmodeComponent,
        LazymodeComponent,
        SolverComponent
      ],
      imports: [AlertModule,
      FormsModule,
      HttpModule],
      providers: [AlertConfig]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
