import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePartnerComponent } from './one-partner.component';

describe('OnePartnerComponent', () => {
  let component: OnePartnerComponent;
  let fixture: ComponentFixture<OnePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnePartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
