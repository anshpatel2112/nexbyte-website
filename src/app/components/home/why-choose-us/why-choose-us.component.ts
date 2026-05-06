import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from '../../../shared/components/svg/svg.component';

interface USP {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, SvgComponent],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent {
  usps = signal<USP[]>([
    {
      title: 'Results Over Vanity Metrics',
      description: 'We care about leads, revenue, and actual growth, not simply clicks and impressions.',
      icon: 'result'
    },
    {
      title: 'End-to-End Execution',
      description: 'From idea to launch to scaling, everything is handled under one roof.',
      icon: 'endtoend'
    },
    {
      title: 'Speed Without Compromise',
      description: "Quick delivery with excellent standards so you don't lose your momentum.",
      icon: 'thunder'
    },
    {
      title: 'Clear & Honest Communication',
      description: 'Updates on a regular basis, clear reports, and no complicated language.',
      icon: 'clear'
    },
    {
      title: 'Built for Long-Term Growth',
      description: 'We create systems and strategies that keep working as your business scales.',
      icon: 'build'
    }
  ]);
}
