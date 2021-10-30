import { Component, OnInit } from '@angular/core';
import { DartCounter } from './dartCounter';

@Component({
  selector: 'app-dart',
  templateUrl: './dart.component.html',
  styleUrls: ['./dart.component.css']
})
export class DartComponent {

  dartCounter:DartCounter = new DartCounter();
  scorePlayer:number = this.dartCounter.playerScore;
  scoreBot:number = this.dartCounter.botscore;
  save:string = "";

  saver(amount:number):void {
    this.save = this.save + amount.toString();
  }

  ok():void {
    this.changePlayerNumber(parseInt(this.save))
  }

  changePlayerNumber(amount:number):void {
      this.dartCounter.subPlayerScore(amount);
      this.scorePlayer = this.dartCounter.playerScore;
      this.save = "";

      this.dartCounter.botThrow();
      this.scoreBot = this.dartCounter.botscore;
  }


  clear():void {
    this.save = "";
  }

}
