import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { HistoryComponent } from './pages/history/history.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/live',
        pathMatch:'full'
    },

    {
        path:'',
        component:HomeComponent,
        title:"CricketApp | Home"
    },
    {
        path:'live',
        component:LiveComponent,
        title:"CricketApp | Live-Score"
    },
    {
        path:'point-table',
        component:PointTableComponent,
        title:"CricketApp | Point-Table"
    },
    {
        path:'history',
        component:HistoryComponent,
        title:"CricketApp | Match History"
    }

];
