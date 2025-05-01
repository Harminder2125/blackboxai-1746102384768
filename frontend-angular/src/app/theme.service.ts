import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = 'navy';
  private darkMode = false;

  constructor() {
    this.loadTheme();
  }

  setTheme(theme: string) {
    this.currentTheme = theme;
    this.applyTheme();
    localStorage.setItem('theme', theme);
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.applyTheme();
    localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false');
  }

  getTheme() {
    return this.currentTheme;
  }

  isDarkMode() {
    return this.darkMode;
  }

  private applyTheme() {
    const root = document.documentElement;
    if (this.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.setAttribute('data-theme', this.currentTheme);
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedTheme) {
      this.currentTheme = savedTheme;
    }
    if (savedDarkMode === 'true') {
      this.darkMode = true;
    }
    this.applyTheme();
  }
}
