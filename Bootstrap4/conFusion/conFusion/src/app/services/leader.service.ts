import { Injectable } from '@angular/core';
import { Leader } from '../sharedFolder/leader';
import { LEADERS } from '../sharedFolder/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  getLeader(): Leader[]{
    return LEADERS;
  }

  getLeaders(id: string): Leader{
    return LEADERS.filter((lead) => (lead.name === id))[0];
  }

  getFeuturedLeaders(): Leader{
    return LEADERS.filter((lead) => lead.featured)[0];
  }
  constructor() { }
}
