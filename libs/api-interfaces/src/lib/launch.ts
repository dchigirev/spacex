import { IRocket } from './rocket';
import { ICrew } from './crew';

export interface ILaunch {
  id: string;
  flight_number: number;
  date_unix: number;
  links: ILinks;
  crew: ICrew[];
  rocket: string;
  details?: {
    rocket: IRocket
  }
}

interface ILinks {
  patch: IPatch;
  flickr: IFlickr;
}

interface IPatch {
  small: string;
  large: string;
}

interface IFlickr {
  small: string[];
  original: string[];
}
