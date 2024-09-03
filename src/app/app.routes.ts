import { Routes } from '@angular/router';
import { FeedDetailsComponent } from './components/dashboard/protein-details/feed-details/feed-details.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'home',
        loadComponent: () => import('./components/dashboard/home/home.component').then(m => m.HomeComponent)
    },
    {
        path:'dashboard',
        loadComponent: () => import('./components/dashboard/main-page-layout/main-page-layout.component').then(m => m.MainPageLayoutComponent)
    },
    {
        path: 'protein-detail',
        loadComponent: () => import('./components/dashboard/protein-details/protein-details.component').then(m => m.ProteinDetailsComponent)
    },
    {
        path: 'feed-detail',
        loadComponent: () => import('./components/dashboard/protein-details/feed-details/feed-details.component').then(m => m.FeedDetailsComponent)
    },
    {
        path: 'forms-detail',
        loadComponent: () => import('./components/dashboard/protein-details/forms-details/forms-details.component').then(m => m.FormsDetailsComponent)
    }

];
