import { Component, Input } from '@angular/core';

export enum Status {
    Pending = 'Pending',
    Running = 'Running',
    Failed = 'Failed',
    Successful = 'Successful',
  }

@Component({
    selector: 'status-display',
    templateUrl: './status-display.component.html',
    styleUrls: ['./status-display.component.scss']
})
export class StatusDisplayComponent {
    @Input() status: Status;
}
