import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from '../../../shared/components/svg/svg.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

interface Benefit {
  text: string;
}

interface TargetGroup {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule, SvgComponent, ButtonComponent],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {
  benefits = signal<Benefit[]>([
    { text: 'Hands-on training with practical implementation' },
    { text: 'Work on real client projects' },
    { text: 'Guidance from experienced professionals' },
    { text: 'Internship certificate on completion' },
    { text: 'Portfolio & career support' }
  ]);

  targetGroups = signal<TargetGroup[]>([
    {
      icon: 'student',
      text: 'Students and freshers looking to start their career'
    },
    {
      icon: 'business',
      text: 'Aspiring developers, designers, and marketers'
    },
    {
      icon: 'individual',
      text: 'Individuals who want practical, industry-level skills'
    }
  ]);
}
