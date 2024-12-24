import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { WatercolorSectionComponent } from './watercolor-section/watercolor-section.component';

@Component({
  selector: 'acs-scrollable-content',
  imports: [HeroSectionComponent, WatercolorSectionComponent],
  templateUrl: './scrollable-content.component.html',
  styleUrl: './scrollable-content.component.css',
})
export class ScrollableContentComponent {}
