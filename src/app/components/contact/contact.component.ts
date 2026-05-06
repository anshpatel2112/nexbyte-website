import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SvgComponent } from '../../shared/components/svg/svg.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SvgComponent, ButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  formSubmitted = signal(false);
  formSubmitting = signal(false);

  contactCards = [
    {
      icon: 'mail',
      title: 'Email Us',
      description: 'Our team will respond within 24 hours',
      value: 'nexbyteinfotech@gmail.com',
      link: 'mailto:nexbyteinfotech@gmail.com'
    },
    {
      icon: 'call',
      title: 'Call Us',
      description: 'Mon–Sat from 10am to 7pm',
      value: '+91 70414 10543',
      link: 'tel:+917041410543'
    },
    {
      icon: 'location',
      title: 'Visit Us',
      description: 'Come say hello at our office',
      value: 'Ahmedabad, Gujarat, India',
      link: 'https://maps.google.com/?q=Ahmedabad,Gujarat,India'
    }
  ];

  services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Training & Internship',
    'Custom Software',
    'Other'
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.formSubmitting.set(true);

      // Simulate form submission
      setTimeout(() => {
        this.formSubmitting.set(false);
        this.formSubmitted.set(true);
        this.contactForm.reset();

        // Reset success message after 5 seconds
        setTimeout(() => this.formSubmitted.set(false), 5000);
      }, 1500);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
