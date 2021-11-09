import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { ICrew, ILaunch } from '@spacex/api-interfaces';
import { Observable, of, forkJoin, zip } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('launches')
  getLaunches(): Observable<ILaunch[]> {

    return this.appService.getLaunches().pipe(
      switchMap((launches) =>
        forkJoin(launches.map(
          launch => {
            return of(launch).pipe(
              switchMap((launch) => zip(
                of(launch),
                this.appService.getRocket(launch.rocket)
              )),
              map(([launch, rocket]) => ({
                ...launch,
                details: {
                  rocket
                }
              }))
            )
          }
        ))
      )
    )
  }

  @Get('crew')
  getCrew(@Query() query): Observable<ICrew[]> {
    const crew = JSON.parse(query.crew) as ICrew[];
    return forkJoin(crew.map(
      crewMember => {
        return of(crewMember).pipe(
          switchMap((crewMember) => zip(
            of(crewMember),
            this.appService.getCrew(crewMember.crew)
          )),
          map(([crewMember, details]) => ({
            ...crewMember,
            details
          }))
        )
      }
    ))
  }
}
