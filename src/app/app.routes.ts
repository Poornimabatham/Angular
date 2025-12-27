import { Routes } from '@angular/router';
import { Feature } from './feature/feature';
import { Cards } from './cards/cards';
import { About } from './about/about';
import { Dashboard } from './dashboard/dashboard';
import { Training } from './training/training';
import { Projects } from './projects/projects';
import { People } from './people/people';
import { UserManagement } from './user-management/user-management';
import { AddTocart } from './add-tocart/add-tocart';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: '',
    component: Dashboard,
  },
  {
    path: 'feature',
    component: Feature,
  },
  {
    path: 'cards',
    component: Cards,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'training',
    component: Training,
  },
  {
    path: 'projects',
    component: UserManagement,
  },
  {
    path: 'people',
    component: People,
  },
  {
    path: 'cart',
    component: AddTocart,
  },
  {
    path: '**',
    component: Dashboard
  }
];
