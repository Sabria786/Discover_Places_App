import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private _places: Place[] = [
    new Place(
      'P1',
      'Manhattan Mansion',
      'In the heart of New York City',
      '../assets/imgs/nyc.jpg',
      149.99,
      new Date('2020-01-01'),
      new Date('2020-012-31')
    ),
    new Place(
      'P2',
      'L\'Amour Toujours',
      'A romantic place in Paris',
      '../assets/imgs/paris.jpg',
      189.99,
      new Date('2020-01-01'),
      new Date('2020-012-31')
    ), 
    new Place(
      'P3',
      'The Foggy Palace',
      'Not your average city trip!',
      '../assets/imgs/sanf.jpg',
      149.99,
      new Date('2020-01-01'),
      new Date('2020-012-31')
    ),
  ];
  get places() {
    return [...this._places]
  }
  constructor() { }
}