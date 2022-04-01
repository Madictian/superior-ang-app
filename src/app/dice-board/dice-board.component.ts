import { Component, OnInit, Output } from '@angular/core';
import { Dice } from '../dice';

@Component({
  selector: 'app-dice-board',
  templateUrl: './dice-board.component.html',
  styleUrls: ['./dice-board.component.css']
})
export class DiceBoardComponent implements OnInit {

  constructor() { 
    this.completed = false;
    this.dices = []

    for (let i = 0; i < 10; i++) {
      this.dices.push({id: i, value: Math.floor(Math.random()*6 + 1), saved:false})
    }
  }

  dices: Dice[];
  completed: boolean;

  ngOnInit(): void {
  }

  saveDice(dice: Dice) : void{
    this.dices[dice.id] = dice

    if(!this.dices.some(item => item.saved === false)){
      this.completed = !this.completed
    }
  }

  rerollDice(): void {
    this.dices.map(dice =>{
      if(dice.saved !== true){
        dice.value = Math.floor(Math.random()*6 + 1)
      }
    })
  }

  resetGame(): void {
  this.dices = this.dices.map(item =>{ return {id: item.id, value: Math.floor(Math.random()*6 + 1), saved:false}})
  this.completed = false;
  }

}
