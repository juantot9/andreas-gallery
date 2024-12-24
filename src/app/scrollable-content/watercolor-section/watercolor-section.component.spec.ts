import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatercolorSectionComponent } from './watercolor-section.component';

describe('WatercolorSectionComponent', () => {
  let component: WatercolorSectionComponent;
  let fixture: ComponentFixture<WatercolorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatercolorSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatercolorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
