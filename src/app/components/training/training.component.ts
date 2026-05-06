import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from '../../shared/components/svg/svg.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule, SvgComponent, ButtonComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {}
