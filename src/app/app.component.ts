import { Component } from '@angular/core';
import { RootObject } from './chemicalElement';
import { EOPTService } from './eopt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Chemical Elements';
  constructor() {}
}
