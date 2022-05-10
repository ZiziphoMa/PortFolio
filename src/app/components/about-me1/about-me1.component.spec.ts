import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMe1Component } from './about-me1.component';

describe('AboutMe1Component', () => {
  let component: AboutMe1Component;
  let fixture: ComponentFixture<AboutMe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
