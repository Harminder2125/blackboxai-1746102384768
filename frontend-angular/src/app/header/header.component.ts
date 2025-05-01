import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  currentTheme: string;
  darkMode: boolean;

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.getTheme();
    this.darkMode = this.themeService.isDarkMode();
  }

  changeTheme(theme: string) {
    this.themeService.setTheme(theme);
    this.currentTheme = theme;
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
    this.darkMode = this.themeService.isDarkMode();
  }
}
