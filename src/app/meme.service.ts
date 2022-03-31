import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Meme } from './meme';

interface apiRes {
  data : {
    memes: Meme[]
  },
  success: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(private http: HttpClient) { }
  

getMeme(): Observable<Meme[]> {
  return this.http.get<apiRes>('https://api.imgflip.com/get_memes')
  .pipe(map(memes =>{
    return memes.data.memes.map(meme => {return meme})
  }))
}

}
