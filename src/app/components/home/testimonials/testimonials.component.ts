import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from '../../../shared/components/svg/svg.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, SvgComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = signal([
    {
      quote: "Working with Nexbyte Infotech completely changed how we approach our online business. Their team didn't just deliver a website, they built a system that actually brings us leads.",
      name: "Abhishek Agrawal",
      city: "Jaipur"
    },
    {
      quote: "We were struggling with inconsistent sales, but their performance marketing strategy gave us clear direction and real results within months.",
      name: "Nikunj Ahir",
      city: "Ahmedabad"
    },
    {
      quote: "What impressed me the most was their understanding of business, not just tech. They helped us scale faster than we expected.",
      name: "Shwet Bhimani",
      city: "Junagadh"
    },
    {
      quote: "Their team is responsive, professional, and genuinely invested in our growth. It feels like having an in-house digital team.",
      name: "Dharvi Patel",
      city: "Rajkot"
    },
    {
      quote: "Nexbyte Infotech helped us redesign our website and improve conversions significantly. Highly recommended for serious businesses.",
      name: "Jay Gujjar",
      city: "Surat"
    },
    {
      quote: "From SEO to ads, everything is handled with clarity and precision. We've seen steady growth since we started working with them.",
      name: "Neel Thakkar",
      city: "Gandhinagar"
    }
  ]);
}
