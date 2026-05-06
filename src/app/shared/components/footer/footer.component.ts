import { Component } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SvgComponent, MatIconModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  links = [
    {
      icon: 'instagram',
      label: 'Instagram',
      link: 'https://www.instagram.com/nexbyte.infotech?igsh=MWJ6emd2OHNmcGU3NQ==',
    },
    {
      icon: 'facebook',
      label: 'Facebook',
      link: 'https://www.facebook.com/share/1MWK7snBRs/',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/company/nexbyteinfotech/',
    },
    {
      icon: 'call',
      label: 'Phone',
      link: 'tel:+917041410543',
    },
    {
      icon: 'mail',
      label: 'Mail',
      link: 'mailto:nexbyteinfotech@gamil.com',
    }
  ];
}
