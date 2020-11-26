import {Film} from './film';
import {User} from './user';

export class Review {
  description: string;
  mark: number;
  date: Date;
  film: Film;
  reviewer: User;
}
