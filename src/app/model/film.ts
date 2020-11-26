import {Review} from './review';
import {Genre} from './genre';
import {Country} from './country';

export class Film {
  id: bigint;
  name: string;
  releaseYear: number;
  description: string;
  preview: string;
  trailer: string;
  length: number;
  rating: number;
  reviews: Review[];
  genre: Genre;
  country: Country;
}
