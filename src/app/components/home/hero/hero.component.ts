import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SvgComponent } from '../../../shared/components/svg/svg.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SvgComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeroComponent { }
