import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyNoComponent } from './fancy-no.component';

describe('FancyNoComponent', () => {
  let component: FancyNoComponent;
  let fixture: ComponentFixture<FancyNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancyNoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FancyNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
