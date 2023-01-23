import { Component, OnInit } from '@angular/core';
import { EOPTService } from '../eopt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  elementsData: any;
  activeElement: string = 'hydrogen';
  environment = {
    temperature: 0,
    display: 'heat',
  };
  setActiveElement(name: string) {
    this.activeElement = name;
  }
  numSequence(n: number): Array<number> {
    return Array(118);
  }

  constructor(private chemicalElementsService: EOPTService) {}

  getElements() {
    this.chemicalElementsService
      .getChemicalElements()
      .subscribe((ob) => (this.elementsData = ob));
  }

  setCurrentTemp(value: any) {
    this.environment.temperature = Number(value);
  }

  ngOnInit(): void {
    this.getElements();
  }
}
