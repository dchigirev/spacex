import { HttpService, Injectable } from '@nestjs/common';
import { ICrewMember, ILaunch, IRocket, Message } from '@spacex/api-interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) {}

  getLaunches(): Observable<ILaunch[]> {
    return this.httpService.get('https://api.spacexdata.com/v5/launches/upcoming').pipe(
      map((response: AxiosResponse) => response.data)
    );
  }

  getCrew(id: string): Observable<ICrewMember> {
    return this.httpService.get(`https://api.spacexdata.com/v4/crew/${id}`).pipe(
      map((response: AxiosResponse) => response.data)
    );
  }

  getRocket(id: string): Observable<IRocket> {
    return this.httpService.get(`https://api.spacexdata.com/v4/rockets/${id}`).pipe(
      map((response: AxiosResponse) => response.data)
    );
  }
}
