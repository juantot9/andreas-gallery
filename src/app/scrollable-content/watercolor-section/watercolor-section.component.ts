import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ImageCompareModule } from 'primeng/imagecompare';

@Component({
  selector: 'acs-watercolor-section',
  imports: [ImageCompareModule, NgOptimizedImage],
  templateUrl: './watercolor-section.component.html',
  styleUrl: './watercolor-section.component.css',
})
export class WatercolorSectionComponent {}
