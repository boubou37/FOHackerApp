import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualmodeComponent } from './manualmode.component';
import {FormsModule} from "@angular/forms";
import {SolverComponent} from "../solver/solver.component";

describe('ManualmodeComponent', () => {
  let component: ManualmodeComponent;
  let fixture: ComponentFixture<ManualmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualmodeComponent,
      SolverComponent],
      imports: [FormsModule]
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
