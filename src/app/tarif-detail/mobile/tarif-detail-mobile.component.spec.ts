import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifDetailMobileComponent } from './tarif-detail-mobile.component';

describe('TarifDetailComponent', () => {
  let component: TarifDetailMobileComponent;
  let fixture: ComponentFixture<TarifDetailMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifDetailMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifDetailMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
