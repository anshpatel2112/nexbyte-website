import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from '../../../shared/components/svg/svg.component';

interface AudienceItem {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-for-us',
  standalone: true,
  imports: [CommonModule, SvgComponent],
  templateUrl: './for-us.component.html',
  styleUrl: './for-us.component.scss'
})
export class ForUsComponent {
  audienceItems = signal<AudienceItem[]>([
    {
      icon: 'startup',
      text: 'Startups looking to launch and scale quickly'
    },
    {
      icon: 'founders',
      text: 'Founders who want to build a strong digital presence'
    },
    {
      icon: 'aspiring',
      text: 'Businesses struggling to generate consistent leads'
    },
    {
      icon: 'brands',
      text: 'Brands looking to improve conversion rates'
    },
    {
      icon: 'compines',
      text: 'Companies that need a reliable tech & marketing partner'
    }
  ]);
}
