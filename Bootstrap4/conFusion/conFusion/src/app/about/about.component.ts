import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeadersService } from '../services/leader.service';

import { flyInOut, expand } from '../animations/app.animation';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block;'
  },
  animations: [flyInOut(), expand()]
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  errMess: string;

  constructor(private leaderService: LeadersService, @Inject('BaseURL') private baseURL) {}

  ngOnInit() {
    this.leaderService
      .getLeaders()
      .subscribe(leaders => (this.leaders = leaders), errmess => (this.errMess = <any>errmess));
  }
}
