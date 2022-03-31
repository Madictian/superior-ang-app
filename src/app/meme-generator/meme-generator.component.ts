import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Meme } from '../meme';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-meme-generator',
  templateUrl: './meme-generator.component.html',
  styleUrls: ['./meme-generator.component.css']
})
export class MemeGeneratorComponent implements OnInit {
meme : Meme;
memes : Meme[];


memeForm = new FormGroup({
  formTop : new FormControl('Shut up'),
  formBot : new FormControl('And take my money!'),
})


onSubmit(){

  this.meme = this.memes[Math.floor(Math.random()* this.memes.length)]

}


  constructor(private apiService: MemeService) {
    this.meme = {
      box_count: 2,
      height: 387,
      id: "438680",
      name: "Batman Slapping Robin",
      url: "https://i.imgflip.com/9ehk.jpg",
      width: 400,
    }
    this.memes = [];

   }

  

  

  ngOnInit(): void {
    this.apiService.getMeme().subscribe((data) =>{
      this.memes = [ ...data! ]

    })
  }

}
