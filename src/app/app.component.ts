import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Status } from './components/status-display/status-display.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  status = new BehaviorSubject<Status>(Status.Pending);
  status$ = this.status.asObservable();

  ngOnInit(): void {
    setTimeout(() => {
      this.status.next(Status.Running)
    }, 5000);
    setTimeout(() => {
      this.status.next(Status.Failed)
    }, 10000);
    setTimeout(() => {
      this.status.next(Status.Successful)
    }, 15000);
  }
}
