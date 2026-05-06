import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from '../../shared/components/svg/svg.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, SvgComponent, ButtonComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  services = [
    {
      title: 'Content & Blog Writing',
      description: 'We create interesting, SEO-friendly content that speaks to your audience and gets high rankings on search engines. Every word, from blog posts to website text, is carefully chosen to generate trust and drive conversions.',
      icon: 'content',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Digital Marketing',
      description: 'Our digital marketing plans are made to get your business viewed by more people and bring in the relevant audience on all platforms. We care about more than just short-term growth.',
      icon: 'digital',
      gradient: 'linear-gradient(135deg, #2af598 0%, #009efd 100%)'
    },
    {
      title: 'Performance Marketing',
      description: "Use data-driven ad strategies to get the most out of your money. We make sure that every rupee you spend on advertising, whether it's on Google Ads or social media, brings in measurable results.",
      icon: 'performance',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      title: 'Web Development',
      description: 'We make websites that are quick, scalable, and focused on sales conversions all based on your business goals. We make sure that both simple and complicated sites work well and are reliable.',
      icon: 'web',
      gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
    },
    {
      title: 'UI/UX Design',
      description: "It's not just how it looks; it's also how it operates. We create user experiences that are easy to understand and fun to use, so your visitors stay interested and take action.",
      icon: 'uiux',
      gradient: 'linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)'
    },
    {
      title: 'SEO Services',
      description: 'Gain more people to find you, rank higher, and acquire more organic traffic that turns into sales. Our SEO plans are designed for your niche and are meant to help your business expand over time.',
      icon: 'seo',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ];
}
