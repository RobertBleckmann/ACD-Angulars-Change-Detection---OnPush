import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dash-one',
  templateUrl: './dash-one.component.html',
  styleUrls: ['./dash-one.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashOneComponent {
  constructor() {}

  logChangeDetection() {
    console.log('Dash 1 rendered');
    return true;
  }
}
