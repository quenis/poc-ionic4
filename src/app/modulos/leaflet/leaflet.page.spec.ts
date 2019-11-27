import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletPage } from './leaflet.page';

describe('LeafletPage', () => {
  let component: LeafletPage;
  let fixture: ComponentFixture<LeafletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
