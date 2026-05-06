import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { ProgramsComponent } from './programs/programs.component';
import { ForUsComponent } from './for-us/for-us.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { ImpactComponent } from './impact/impact.component';
import { IndustriesComponent } from './industries/industries.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, ServicesComponent, ProgramsComponent, ForUsComponent, WhyChooseUsComponent, ImpactComponent, IndustriesComponent, TestimonialsComponent],
  template: `
    <app-hero></app-hero>
    <app-services></app-services>
    <app-programs></app-programs>
    <app-for-us></app-for-us>
    <app-impact></app-impact>
    <app-why-choose-us></app-why-choose-us>
    <app-industries></app-industries>
    <app-testimonials></app-testimonials>
  `,
  styles: [``]
})
export class HomeComponent { }
