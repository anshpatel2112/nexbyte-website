import { Component, ElementRef, inject, signal, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  id: string;
  target: number;
  current: number;
  label: string;
}

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impact.component.html',
  styleUrl: './impact.component.scss'
})
export class ImpactComponent {
  private el = inject(ElementRef);
  
  stats = signal<Stat[]>([
    { id: 'projects', target: 80, current: 0, label: 'Projects Delivered Successfully' },
    { id: 'clients', target: 50, current: 0, label: 'Happy Clients Across the Nation' },
    { id: 'years', target: 2, current: 0, label: 'Years of Industry Experience' },
    { id: 'experts', target: 10, current: 0, label: 'Skilled Experts in Our Team' }
  ]);

  private animated = false;

  constructor() {
    afterNextRender(() => {
      this.setupObserver();
    });
  }

  private setupObserver() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.animated) {
        this.startAnimation();
        this.animated = true;
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement);
  }

  private startAnimation() {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameDuration);

    this.stats.update(currentStats => {
      const stats = [...currentStats];
      
      stats.forEach((stat, index) => {
        let frame = 0;
        const counter = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const currentVal = Math.round(stat.target * progress);
          
          if (frame <= totalFrames) {
            this.stats.update(s => {
              const newStats = [...s];
              newStats[index] = { ...newStats[index], current: currentVal };
              return newStats;
            });
          } else {
            clearInterval(counter);
          }
        }, frameDuration);
      });
      
      return stats;
    });
  }
}
