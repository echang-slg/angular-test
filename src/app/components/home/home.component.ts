import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';


@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div>
        <img src="/assets/images/logo.svg" alt="logo" aria-hidden="true">
    </div>
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private logger: NGXLogger) {
    this.logger.debug('Home Component initialized');
  }
}
