import { Component, OnInit } from '@angular/core';
import {SolverService} from './solver.service';
@Component({
  selector: 'app-solver',
  templateUrl: './solver.component.html',
  styleUrls: ['./solver.component.css']
})
export class SolverComponent implements OnInit {

  words: string[];

  constructor(public solverService: SolverService) { }

  ngOnInit() {
    this.words = this.getWords();
  }

  getWords(): string[] {
    return this.solverService.words;
  }

  filter(words: string[], guess: string, matches: number) {
    this.solverService.words = this.solverService.keepCandidates(words, guess.toUpperCase(), matches);
  }

}
