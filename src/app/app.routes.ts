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
import { Calender } from './calender/calender';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path: 'dashboard',
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
    path: 'calendar',
    component: Calender
  },
  {
    path: 'Calendar',
    component: Calender
  },
  {
    path: '**',
    component: Dashboard
  }
];

