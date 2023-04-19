import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackdocComponent } from './trackdoc.component';

describe('TrackdocComponent', () => {
  let component: TrackdocComponent;
  let fixture: ComponentFixture<TrackdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackdocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
