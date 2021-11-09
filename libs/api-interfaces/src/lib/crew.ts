import { ICrewMember } from './crew-member';

export interface ICrew {
  crew: string;
  role: string;
  details?: ICrewMember;
}
