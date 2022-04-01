import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dice } from '../dice';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {



  constructor() { 
    this.dice = {id:0, value: 6, saved:true}
   }

  @Input() dice: Dice;

  @Output() diceEvent = new EventEmitter<Dice>()

  ngOnInit(): void {
  }

  onClick(): void {
    this.dice.saved = !this.dice.saved
    this.diceEvent.emit(this.dice)
    
  }

}
