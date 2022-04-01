import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiceBoardComponent } from './dice-board/dice-board.component';
import { DiceComponent } from './dice/dice.component';
import { MemeGeneratorComponent } from './meme-generator/meme-generator.component';

const routes: Routes = [
  {path: '', component: DiceBoardComponent},
  { path: 'a', component: MemeGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
