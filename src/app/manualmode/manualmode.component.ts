import { Component, OnInit } from '@angular/core';
import {SolverService} from "../solver/solver.service";
import {SolverComponent} from "../solver/solver.component"
import {NgControl} from "@angular/forms";

@Component({
  selector: 'app-manualmode',
  templateUrl: './manualmode.component.html',
  styleUrls: ['./manualmode.component.css'],
  providers: [SolverService]
})
export class ManualmodeComponent implements OnInit {

  constructor(public solverService: SolverService) { }

  ngOnInit() {
  }

  addWord(word: string): void {
    this.solverService.words.push(word);
  }

  getWords(): string[] {
    return this.solverService.words;
  }

  initHack() : void {
    this.solverService.hacking = true;
  }

  isHacking(): boolean {
    return this.solverService.hacking;
  }
}
