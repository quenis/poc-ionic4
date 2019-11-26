import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxPage } from './mapbox.page';

describe('MapboxPage', () => {
  let component: MapboxPage;
  let fixture: ComponentFixture<MapboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapboxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
