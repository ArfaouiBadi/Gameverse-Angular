import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponentComponent } from './accueil-component.component';

describe('AccueilComponentComponent', () => {
  let component: AccueilComponentComponent;
  let fixture: ComponentFixture<AccueilComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilComponentComponent]
    });
    fixture = TestBed.createComponent(AccueilComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
