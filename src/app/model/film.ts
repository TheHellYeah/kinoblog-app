import {Review} from './review';

export class Film {
  id: bigint;
  name: string;
  release: Date;
  description: string;
  preview: string;
  trailer: string;
  length: number;
  budget: bigint;
  rating: number;
  reviews: Review[];
}
