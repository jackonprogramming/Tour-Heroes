import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 21, name: 'Dr Nice', points: 7 },
  { id: 12, name: 'Narco', points: 5 },
  { id: 13, name: 'Bombasto', points: 13 },
  { id: 14, name: 'Celeritas', points: 12 },
  { id: 15, name: 'Magneta', points: 20 },
  { id: 16, name: 'RubberMan', points: 67 },
  { id: 17, name: 'Dynama', points: 45 },
  { id: 18, name: 'Dr IQ', points: 0 },
  { id: 19, name: 'Magma', points: 13 },
  { id: 20, name: 'Tornado', points: 111 }
].sort((a, b) => (a.points < b.points ? 1 : -1));
