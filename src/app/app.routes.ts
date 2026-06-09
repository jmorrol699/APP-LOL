import { Routes } from '@angular/router';
import { Contacto } from '../components/contacto/contacto';
import { Home } from '../components/home/home';
import { CampeonesMultipleRole } from '../components/campeones-multiple-role/campeones-multiple-role';
import { CampeonesDetail } from '../components/campeones-detail/campeones-detail';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'contacto', component: Contacto},
    {path: 'campeones/:id', component: CampeonesDetail},
    {path: 'multiple-role', component: CampeonesMultipleRole}
];
