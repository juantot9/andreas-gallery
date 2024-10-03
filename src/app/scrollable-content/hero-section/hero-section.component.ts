import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "acs-hero-section",
  standalone: true,
  imports: [NgOptimizedImage, ButtonModule],
  templateUrl: "./hero-section.component.html",
  styleUrl: "./hero-section.component.css",
})
export class HeroSectionComponent {}
