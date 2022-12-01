import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public moviesSubject = new BehaviorSubject<any>([]);

  public movieNameSubject = new BehaviorSubject<any>('');

  constructor() { }
  //
  // sendDataToService(movies)  {
  //   console.log('From data service :', movies);
  //
  //   this.moviesSubject.next(movies);
  // }

 // addMovie(movie: Movie): Observable<Movie>
  sendMovieName(movieName : Movie) {
    this.movieNameSubject.next(movieName);
  }
}
