import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicTableElementComponent } from './periodic-table-element.component';

describe('PeriodicTableElementComponent', () => {
  let component: PeriodicTableElementComponent;
  let fixture: ComponentFixture<PeriodicTableElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodicTableElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicTableElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
