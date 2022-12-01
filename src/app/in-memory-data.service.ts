import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 12, name: 'Test12' },
      { id: 13, name: 'Test13' },
      { id: 14, name: 'Test14' },
      { id: 15, name: 'Test15' },
      { id: 16, name: 'Test16' },
      { id: 17, name: 'Test17' },
      { id: 18, name: 'Test18' },
      { id: 19, name: 'Test19' },
      { id: 20, name: 'Test20' }
    ];
    return {movies};
  }


  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}


