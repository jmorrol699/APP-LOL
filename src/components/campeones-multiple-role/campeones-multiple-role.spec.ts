import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonesMultipleRole } from './campeones-multiple-role';

describe('CampeonesMultipleRole', () => {
  let component: CampeonesMultipleRole;
  let fixture: ComponentFixture<CampeonesMultipleRole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampeonesMultipleRole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampeonesMultipleRole);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
