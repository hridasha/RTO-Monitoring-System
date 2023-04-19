import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesPayComponent } from './fees-pay.component';

describe('FeesPayComponent', () => {
  let component: FeesPayComponent;
  let fixture: ComponentFixture<FeesPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeesPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
