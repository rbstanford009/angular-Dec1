import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
//import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../environments/environment";
import {Movie} from "./movie";
import {catchError, map, tap} from "rxjs/operators";
import { Router } from '@angular/router';
//import { DataService } from '../services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './moviesonline.component.html',
  styleUrls: ['./moviesonline.component.css']
})
export class MoviesonlineComponent implements OnInit {

    private moviesUrl = 'api/movies';  // URL to web api      // https://api.themoviedb.org/3/search/movie?api_key=083f0465f131ae121114d5e51a6d4ddf&language=en-US&query=the&page=1&include_adult=true

    public movies: Movie[] = [];

    public movieName ='';
 //   private movieName: string;

  constructor(
      private httpService: HttpService,
    private router: Router
  ) { }
 // constructor(private httpService: HttpService) { }


  ngOnInit(): void {
    this.getMovies();
 //   this.getMoviesMany();
/*
      this.dataService.movieNameSubject.subscribe(
          data => {
              this.movieName = data;
          },
          error => {
              console.log(error.message);

          }
      );

      this.httpService.getGenres().subscribe(
          data => {
              this.genres = data.genres;
              console.log(this.genres);

              this.dataService.moviesSubject.subscribe(
                  data => {
                      console.log('Search results component :', data);

                      this.movies = data;
                  },
                  error => {
                      console.log(error.message);
                  }
              );

          },
          error => {
              console.log(error.message);

          }
      );
*/
  }

  getMovies(): void {
    // https://api.themoviedb.org/3/search/movie?api_key=083f0465f131ae121114d5e51a6d4ddf&language=en-US&query=the&page=1&include_adult=true
    let test = this.httpService.searchMovie("the");
    test.subscribe(    console.log)
    console.log('-----------------------');
    console.log(test);
    let test2 = test.pipe();
    //
    // test.forEach(function (any) {
    //   console.log(any);
    // });
    // test2.forEach(function (any) {
    //   console.log(any);
    // });

    let num = [7, 8, 9];
    num.forEach(function (value) {
      console.log(value);
    });
      test2.forEach(function (value) {
          console.log(value);
      });
    // angular.forEach(test, function(arrayElement) {
    //   $log.info(arrayElement);
    // });
    //

  //  test2.subscribe()
  //  test.subscribe()
// start
 //   this.httpService.searchMovie(movie.search).subscribe(
    test.subscribe(
        data => {
          data.results.length = 10;
          this.movies = data.results as Array<Movie>;

          console.log('Searched Movies :', this.movies);


      //    this.dataService.sendDataToService(this.movies);


          this.router.navigate(['searchResults']);

          this.movieName = '';

          // @ts-ignore
            document.getElementById('search-input-field').blur();
        },
        error => {
          console.log(error.message);

        }
    );
    // end
    //  this.httpService.searchMovie(movie.search).subscribe(
      this.httpService.searchMovie('the').subscribe(
          data => {
              data.results.length = 10;
              this.movies = data.results as Array<Movie>;

              console.log('Searched Movies :', this.movies);


      //        this.dataService.sendDataToService(this.movies);

              this.router.navigate(['searchResults']);

              this.movieName = '';

              // @ts-ignore
              document.getElementById('search-input-field').blur();
          },
          error => {
              console.log(error.message);

          }
      );


    this.httpService.getTrending();
  }
    // getMoviesMany(): void {
    //     this.getMoviesList()
    //         .subscribe(movies => this.movies = movies.slice(1, 4));  // how many buttons
    // }
    // /** GET movie from the server */
    // getMoviesList(): Observable<Movie[]> {
    //   //  return this.httpService.get<Movie[]>(this.moviesUrl)
    //     return this.httpService.get<Movie[]>(this.moviesUrl)
    //         .pipe(
    //             tap(_ => this.log('fetched movies')),
    //             catchError(this.handleError<Movie[]>('getMovies', []))
    //         );
    // }


  getGenres(): Observable<any> {

    return this.httpService.getGenres();
  }


  searchMovie(name: string): Observable<any> | null {

    let test = this.httpService.searchMovie(name);
 //   test.pipe().
     return null;
  }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
    // get<T>(url: string, options?: {
    //     headers?: HttpHeaders | {
    //         [header: string]: string | string[];
    //     };
    //     context?: HttpContext;
    //     observe?: 'body';
    //     params?: HttpParams | {
    //         [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    //     };
    //     reportProgress?: boolean;
    //     responseType?: 'json';
    //     withCredentials?: boolean;
    // }): Observable<T>;

  // searchMovies(term: string): Observable<Movie[]> {
  //   Movie [] x = new Movie();
  //   if (!term.trim()) {
  //     // if not search term, return empty movie array.
  //     return of([]);
  //   }
  //   return this.http.get<Movie[]>(url)
  //       .pipe(
  //           map(movies => movies[0]); // returns a {0|1} element array
  //
  //   return this.httpService..get<Movie[]>(`${this.moviesUrl}/?name=${term}`).pipe(
  //       tap(x => x.length ?
  //           this.log(`found movies matching "${term}"`) :
  //           this.log(`no movies matching "${term}"`)),
  //       catchError(this.handleError<Movie[]>('searchMovies', []))
  //   );
  // }
  //
  /*

  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      // if not search term, return empty movie array.
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found movies matching "${term}"`) :
         this.log(`no movies matching "${term}"`)),
      catchError(this.handleError<Movie[]>('searchMovies', []))
    );
  }


  constructor(private httpClient: HttpClient) { }

  getTrending(): Observable<any> {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${environment.api_key}`;

    return this.httpClient.get<any>(url);
  }

  searchMovie(movieName: any): Observable<any> {
  // https://api.themoviedb.org/3/search/movie?api_key=083f0465f131ae121114d5e51a6d4ddf&language=en-US&query=the&page=1&include_adult=true
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${environment.api_key}&language=en-US&query=${movieName}&page=1&include_adult=true`;
    return this.httpClient.get<any>(url);
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
*/



  // @ts-ignore
    private log(s: string) {

  }
}


