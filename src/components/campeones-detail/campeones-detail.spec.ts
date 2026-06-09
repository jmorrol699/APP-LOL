import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonesDetail } from './campeones-detail';

describe('CampeonesDetail', () => {
  let component: CampeonesDetail;
  let fixture: ComponentFixture<CampeonesDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampeonesDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampeonesDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
