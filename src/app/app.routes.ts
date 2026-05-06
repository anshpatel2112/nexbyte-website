import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { TrainingComponent } from './components/training/training.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'services', component: ServiceComponent },
    { path: 'training-internship', component: TrainingComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
];
