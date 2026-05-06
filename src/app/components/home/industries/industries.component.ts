import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from '../../../shared/components/svg/svg.component';

interface Industry {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, SvgComponent],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent {
  industries = signal<Industry[]>([
    { name: 'E-Commerce', icon: 'ecommerce' },
    { name: 'Solar', icon: 'solar' },
    { name: 'SaaS & Tech Startups', icon: 'saastechstartup' },
    { name: 'Education & EdTech', icon: 'educationandedtech' },
    { name: 'Real Estate', icon: 'realesate' },
    { name: 'Local Businesses', icon: 'localbusiness' }
  ]);
}
