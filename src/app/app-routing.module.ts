import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiceBoardComponent } from './dice-board/dice-board.component';
import { MemeGeneratorComponent } from './meme-generator/meme-generator.component';
import {FrontComponent} from "./front/front.component";

const routes: Routes = [
  { path: '', component: FrontComponent },
  { path: 'dice', component: DiceBoardComponent },
  { path: 'memes', component: MemeGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
