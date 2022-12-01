import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './model/movie';

import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getTrending(): Observable<any> {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${environment.api_key}`;

    return this.httpClient.get<any>(url);
  }

  searchMovie(movieName: any): Observable<any> {
  //  const url = `https://api.themoviedb.org/3/search/movie?api_key=${environment.api_key}&language=en-US&query=${movieName}&page=1&include_adult=true`;
   const url = 'https://api.themoviedb.org/3/search/movie?api_key=083f0465f131ae121114d5e51a6d4ddf&language=en-US&query=the&page=1&include_adult=true';
    let retVal = this.httpClient.get<any>(url);
    console.log(retVal);
    return retVal;
  }

  getFavourites(username: any): Observable<Array<Movie>> {
    const url = `http://localhost:3000/${username}`;

    return this.httpClient.get<Array<Movie>>(url);
  }

  addMovieToFavourites(username: any, movie: any): Observable<Movie> {
    const url = `http://localhost:3000/${username}`;

    return this.httpClient.post<Movie>(url, movie);
  }

  removeMovieFromFavourites(username: any, id: any): Observable<any> {
    const url = `http://localhost:3000/${username}/${id}`;

    return this.httpClient.delete(url);
  }

  getGenres(): Observable<any> {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${environment.api_key}&language=en-US`;

    return this.httpClient.get(url);
  }


}
