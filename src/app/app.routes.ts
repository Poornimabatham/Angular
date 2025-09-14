import { Routes } from '@angular/router';
import { Feature } from './feature/feature';
import { Cards } from './cards/cards';
import { About } from './about/about';
import { Dashboard } from './dashboard/dashboard';
import { Training } from './training/training';
import { Projects } from './projects/projects';
import { People } from './people/people';

export const routes: Routes = [{
    path: 'feature',
    component: Feature
}, {
    path:'cards',component:Cards
,
    },{
    path:'about',component:About
,
    }, {
        path:'dashboard',component:Dashboard
    }, {
        path:'training',component:Training,
    }, {
        path:'projects',component:Projects
    }, {
        path:'people',component:People
    }

 

];