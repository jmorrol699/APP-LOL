import { Routes } from '@angular/router';
import { Contacto } from '../components/contacto/contacto';
import { Home } from '../components/home/home';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'contacto', component: Contacto}
];
