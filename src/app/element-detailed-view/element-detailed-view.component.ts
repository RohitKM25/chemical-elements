import { Component, OnInit } from '@angular/core';
import { EOPTService } from '../eopt.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-element-detailed-view',
  templateUrl: './element-detailed-view.component.html',
  styleUrls: ['./element-detailed-view.component.sass'],
})
export class ElementDetailedViewComponent implements OnInit {
  element: any;
  constructor(
    private chemicalElementsService: EOPTService,
    private route: ActivatedRoute
  ) {}

  getElement() {
    this.chemicalElementsService.getChemicalElements().subscribe((ob) => {
      const routeParams = this.route.snapshot.paramMap;
      const elementNameFromRoute = String(routeParams.get('elementName'));
      this.element = (ob as any)[elementNameFromRoute];
      console.log(this.route);
      console.log(this.element);
    });
  }

  ngOnInit(): void {
    this.getElement();
  }
}
