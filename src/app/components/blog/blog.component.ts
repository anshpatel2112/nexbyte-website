import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from '../../shared/components/svg/svg.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, SvgComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {}
