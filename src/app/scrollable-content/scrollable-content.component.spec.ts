import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableContentComponent } from './scrollable-content.component';

describe('ScrollableContentComponent', () => {
  let component: ScrollableContentComponent;
  let fixture: ComponentFixture<ScrollableContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollableContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
