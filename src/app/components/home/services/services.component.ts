import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from '../../../shared/components/svg/svg.component';

interface Service {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SvgComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = signal<Service[]>([
    {
      title: 'Content & Blog Writing',
      description: 'We create interesting, SEO-friendly content that speaks to your audience and gets high rankings on search engines.',
      icon: 'content'
    },
    {
      title: 'Digital Marketing',
      description: 'Our digital marketing plans are made to get your business viewed by more people and bring in the relevant audience on all platforms.',
      icon: 'digital'
    },
    {
      title: 'Performance Marketing',
      description: 'Use data-driven ad strategies to get the most out of your money. We make sure every rupee you spend on advertising brings in measurable results.',
      icon: 'performance'
    },
    {
      title: 'Web Development',
      description: 'We make websites that are quick, scalable, and focused on sales conversions. Both simple and complex sites work well and are reliable.',
      icon: 'web'
    },
    {
      title: 'UI/UX Design',
      description: 'It\'s not just how it looks; it\'s also how it operates. We create user experiences that are easy to understand and fun to use.',
      icon: 'uiux'
    },
    {
      title: 'SEO Services',
      description: 'Rank higher and acquire more organic traffic that turns into sales. Our SEO plans are designed for your niche and are meant to help your business expand over time.',
      icon: 'seo'
    }
  ]);
}
