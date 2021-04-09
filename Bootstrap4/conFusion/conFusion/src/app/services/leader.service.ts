import { Injectable } from '@angular/core';
import { Leader } from '../sharedFolder/leader';
import { LEADERS } from '../sharedFolder/leaders';
import {Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(id: string): Observable<Leader> {
    return of(LEADERS.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeuturedLeaders(): Observable<Leader> {
    return of(LEADERS.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

  constructor() { }
}
