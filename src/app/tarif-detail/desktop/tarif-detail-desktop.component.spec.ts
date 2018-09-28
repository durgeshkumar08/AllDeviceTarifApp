import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifDetailDesktopComponent } from './tarif-detail-desktop.component';

describe('TarifDetailComponent', () => {
  let component: TarifDetailDesktopComponent;
  let fixture: ComponentFixture<TarifDetailDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifDetailDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifDetailDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
