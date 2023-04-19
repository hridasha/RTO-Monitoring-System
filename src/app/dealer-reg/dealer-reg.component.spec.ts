import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerRegComponent } from './dealer-reg.component';

describe('DealerRegComponent', () => {
  let component: DealerRegComponent;
  let fixture: ComponentFixture<DealerRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
