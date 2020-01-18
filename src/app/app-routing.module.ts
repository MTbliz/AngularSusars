import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SidenavComponent} from 'src/app/sidenav/sidenav.component';
import {ReportsComponent} from 'src/app/reports/reports.component';
import {DashboardsComponent} from 'src/app/dashboards/dashboards.component';
import {HomepageComponent} from 'src/app/homepage/homepage.component';
import { NewsComponent } from 'src/app/homepage/news/news.component';
import { TeamComponent } from 'src/app/homepage/team/team.component';
import { ProceduresComponent } from 'src/app/homepage/procedures/procedures.component';
import { ContactComponent } from 'src/app/homepage/contact/contact.component';
import { LoginComponent } from 'src/app/login/login.component';

const routes: Routes = [
{path: '#Home', component: HomepageComponent},
{path: '#Susars', component: SidenavComponent},
{path: '#Reports', component: ReportsComponent},
{path: '#Dashboards', component: DashboardsComponent},
{path: '#Home/News', component: NewsComponent},
{path: '#Home/Team', component: TeamComponent},
{path: '#Home/Procedures', component: ProceduresComponent},
{path: '#Home/Contact', component: ContactComponent},
{path: 'login', component: LoginComponent},
{path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,SidenavComponent, ReportsComponent, DashboardsComponent, LoginComponent]
