import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {GlobalVars} from '../config/global';

@Injectable()
export class SolverService {

  words: string[] = [];

  hacking: boolean = false;
  constructor(private http: Http) {
    let gv: GlobalVars = new GlobalVars();
    this.words = gv.fullwords;
  }

  countMatches(reference: string, guess: string) : number {
    if (reference == '' || guess == '' || reference.length !== guess.length) return -1;
    let count: number = 0;
    for (let i = 0; i < guess.length; i++) {
      if (reference[i] == guess[i]) {
        count++;
      }
    }
    return count;
  }

  keepCandidates(words: string[], guess: string, matches: number) : string[] {
    let ret: string[] = [];
    let temp: number;
    for (let word of words) {
      temp = this.countMatches(word,guess);
      //We use >=0 to exclude words w/o same number of letters
      if (temp === matches && temp >=0 ) {
        ret.push(word);
      }
    }

    return ret;
  }

  getWords(){
    return ;
  }

}
