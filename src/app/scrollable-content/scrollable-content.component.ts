import { Component } from "@angular/core";
import { HeroSectionComponent } from "./hero-section/hero-section.component";

@Component({
    selector: "acs-scrollable-content",
    imports: [HeroSectionComponent],
    templateUrl: "./scrollable-content.component.html",
    styleUrl: "./scrollable-content.component.css"
})
export class ScrollableContentComponent {}
