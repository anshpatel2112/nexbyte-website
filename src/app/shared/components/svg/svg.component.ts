import { Component, inject, input, effect, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg',
  standalone: true,
  template: `<div [innerHTML]="safeSvg()"></div>`,
  styleUrl: './svg.component.scss'
})
export class SvgComponent {
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);

  name = input.required<string>();
  safeSvg = signal<SafeHtml>('');

  constructor() {
    effect(() => {
      const iconName = this.name();
      if (iconName) {
        this.loadSvg(iconName);
      }
    });
  }

  private loadSvg(name: string) {
    this.http.get(`/assets/svg/${name}.svg`, { responseType: 'text' }).subscribe({
      next: (svgContent) => {
        this.safeSvg.set(this.sanitizer.bypassSecurityTrustHtml(svgContent));
      },
      error: (err) => {
        console.error(`Could not load SVG: ${name}`, err);
      }
    });
  }
}
