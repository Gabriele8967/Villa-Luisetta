import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Apartments } from './apartments/apartments';
import { Food } from './food/food';
import { Cocktails } from './cocktails/cocktails';
import { Enoteca } from './enoteca/enoteca';
import { Gallery } from './gallery/gallery';
import { ReservationsComponent } from './reservations/reservations.component';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'apartments', component: Apartments},
    {path: 'gallery', component: Gallery},
    {path: 'food', component: Food},
    {path: 'menu', redirectTo: '/food', pathMatch: 'full'},
    {path: 'cocktails', component: Cocktails},
    {path: 'enoteca', component: Enoteca},
    {path: 'wines', redirectTo: '/enoteca', pathMatch: 'full'},
    {path: 'reservations', component: ReservationsComponent},
    {path: 'prenota', redirectTo: '/reservations', pathMatch: 'full'},
    {path: 'privacy', loadComponent: () => import('./privacy/privacy').then(m => m.Privacy)},
    {path: 'cookie-policy', loadComponent: () => import('./cookie-policy/cookie-policy').then(m => m.CookiePolicy)},
    {path: 'legal', loadComponent: () => import('./legal/legal').then(m => m.Legal)},
    {path: 'admin-villa-luisetta-2024', loadComponent: () => import('./admin/admin').then(m => m.Admin)}
];