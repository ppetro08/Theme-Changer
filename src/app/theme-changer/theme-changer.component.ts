import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.scss']
})
export class ThemeChangerComponent implements OnInit {
  element: HTMLElement;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.element = document.getElementById('root');
  }

  setThemeToDark() {
    this.renderer.setAttribute(this.element, 'class', 'theme-dark');
  }

  setThemeToDefault() {
    this.renderer.setAttribute(this.element, 'class', 'theme-default');
  }
}
