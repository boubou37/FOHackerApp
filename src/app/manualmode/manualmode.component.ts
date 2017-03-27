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

  words: string[];
  constructor(public solverService: SolverService) {
    this.words=[];
  }

  ngOnInit() {
  }

  addWord(word: string): void {
    this.words.push(word.toUpperCase());
  }

  getWords(): string[] {
    return this.words;
  }

  initHack() : void {
    this.solverService.hacking = true;
    this.solverService.words = this.words;
  }

  isHacking(): boolean {
    return this.solverService.hacking;
  }
}
