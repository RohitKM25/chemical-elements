import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDetailedViewComponent } from './element-detailed-view.component';

describe('ElementDetailedViewComponent', () => {
  let component: ElementDetailedViewComponent;
  let fixture: ComponentFixture<ElementDetailedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDetailedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
