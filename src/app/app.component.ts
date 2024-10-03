import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PrimeNGConfig } from "primeng/api";
import { Lara } from "primeng/themes/lara";
import { HeaderComponent } from "./header/header.component";
import { ScrollableContentComponent } from "./scrollable-content/scrollable-content.component";
import { definePreset } from "primeng/themes";

const myPreset = definePreset(Lara, {
  semantic: {
    primary: {
      50: "{amber.50}",
      100: "{amber.100}",
      200: "{amber.200}",
      300: "{amber.300}",
      400: "{amber.400}",
      500: "{amber.500}",
      600: "{amber.600}",
      700: "{amber.700}",
      800: "{amber.800}",
      900: "{amber.900}",
      950: "{amber.950}",
    },
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff",
          50: "#fef3cd",
          100: "#fde69b",
          200: "#fde081",
          300: "#fcd44f",
          400: "#fcce36",
          500: "#e2ae03",
          600: "#c99b03",
          700: "#977402",
          800: "#7e6102",
          900: "#4b3a01",
          950: "#191300",
        },
      },
      dark: {
        surface: {
          0: "#ffffff",
          50: "{slate.50}",
          100: "{slate.100}",
          200: "{slate.200}",
          300: "{slate.300}",
          400: "{slate.400}",
          500: "{slate.500}",
          600: "{slate.600}",
          700: "{slate.700}",
          800: "{slate.800}",
          900: "{slate.900}",
          950: "{slate.950}",
        },
      },
    },
  },
});

@Component({
  selector: "acs-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ScrollableContentComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({
      options: { darkModeSelector: "light" },
      preset: myPreset,
    });
    this.config.ripple.set(true);
  }
}
