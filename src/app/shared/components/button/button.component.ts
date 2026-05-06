import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from '../svg/svg.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, SvgComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  label = input.required<string>();
  icon = input<string>();
}
