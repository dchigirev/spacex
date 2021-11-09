import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICrew, ILaunch } from '@spacex/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getLaunches(): Observable<ILaunch[]> {
    const url = `/api/launches`;
    return this.http
      .get<ILaunch[]>(url);
  }

  public getCrewDetails(crew: ICrew[]): Observable<ICrew[]> {
    const url = `/api/crew`;
    const params = new HttpParams()
      .set('crew', JSON.stringify(crew));

    return this.http.get<ICrew[]>(url, { params });
  }

}
