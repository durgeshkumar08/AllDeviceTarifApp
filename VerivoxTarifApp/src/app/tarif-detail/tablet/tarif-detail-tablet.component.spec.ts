import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifDetailTabletComponent } from './tarif-detail-tablet.component';

describe('TarifDetailComponent', () => {
  let component: TarifDetailTabletComponent;
  let fixture: ComponentFixture<TarifDetailTabletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifDetailTabletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifDetailTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
