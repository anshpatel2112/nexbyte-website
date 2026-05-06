import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { SvgComponent } from '../svg/svg.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SvgComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Training & Internship', path: '/training-internship' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];
}
