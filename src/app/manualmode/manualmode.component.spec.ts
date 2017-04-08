import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualmodeComponent } from './manualmode.component';
import {FormsModule} from "@angular/forms";
import {SolverComponent} from "../solver/solver.component";
import {HttpModule} from '@angular/http';

describe('ManualmodeComponent', () => {
  let component: ManualmodeComponent;
  let fixture: ComponentFixture<ManualmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualmodeComponent,
      SolverComponent],
      imports: [FormsModule,
      HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
