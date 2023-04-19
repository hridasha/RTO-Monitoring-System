import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingschoolComponent } from './drivingschool.component';

describe('DrivingschoolComponent', () => {
  let component: DrivingschoolComponent;
  let fixture: ComponentFixture<DrivingschoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivingschoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivingschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
