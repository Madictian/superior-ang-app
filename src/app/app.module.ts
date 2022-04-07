import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemeGeneratorComponent } from './meme-generator/meme-generator.component';
import { MemeService } from './meme.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiceComponent } from './dice/dice.component';
import { DiceBoardComponent } from './dice-board/dice-board.component';
import { FrontComponent } from './front/front.component';

@NgModule({
  declarations: [
    AppComponent,
    MemeGeneratorComponent,
    DiceComponent,
    DiceBoardComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
