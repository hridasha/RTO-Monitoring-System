import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlLicenseComponent } from './dl-license.component';

describe('DlLicenseComponent', () => {
  let component: DlLicenseComponent;
  let fixture: ComponentFixture<DlLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlLicenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
