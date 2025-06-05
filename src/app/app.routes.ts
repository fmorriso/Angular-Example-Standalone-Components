import {Routes} from '@angular/router';
//
import {About} from './about/about';
import {Contact} from './contact/contact';
import {Home} from './home/home';
import {PageNotFound} from './page-not-found/page-not-found';


export const routes: Routes = [
    {path: 'home', component: Home, title: 'Home'},
    {path: 'about', component: About, title: 'About'},
    {path: 'contact', component: Contact, title: 'Contact'},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: PageNotFound}
];
