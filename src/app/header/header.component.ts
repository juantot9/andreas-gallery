import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
    selector: "acs-header",
    imports: [ButtonModule],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css"
})
export class HeaderComponent {}
