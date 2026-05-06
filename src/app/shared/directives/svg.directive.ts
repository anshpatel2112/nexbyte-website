import { Directive, ElementRef, inject, input, effect, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[appSvg]',
  standalone: true
})
export class SvgDirective {
  private http = inject(HttpClient);
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  iconName = input.required<string>({ alias: 'appSvg' });

  constructor() {
    effect(() => {
      const name = this.iconName();
      if (name) {
        this.loadSvg(name);
      }
    });
  }

  private loadSvg(name: string) {
    this.http.get(`assets/svg/${name}.svg`, { responseType: 'text' }).subscribe({
      next: (svgContent) => {
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', svgContent);
      },
      error: (err) => {
        console.error(`Could not load SVG: ${name}`, err);
      }
    });
  }
}
