import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'starter-full-stack-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <starter-full-stack-analog-welcome/>
  `,
})
export default class HomeComponent {
}
