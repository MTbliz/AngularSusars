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
import {LoginComponent} from 'src/app/login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';








const routes: Routes = [
{path: '#Home', component: HomepageComponent},
{path: '#Susars', component: SidenavComponent},
{path: '#Reports', component: ReportsComponent},
{path: '#Dashboards', component: DashboardsComponent},
{path: '#Home/News', component: NewsComponent},
{path: '#Home/Team', component: TeamComponent},
{path: '#Home/Procedures', component: ProceduresComponent},
{path: '#Home/Contact', component: ContactComponent},
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'user', component: BoardUserComponent },
{ path: 'mod', component: BoardModeratorComponent },
{ path: 'admin', component: BoardAdminComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,SidenavComponent, ReportsComponent, DashboardsComponent, LoginComponent, RegisterComponent, HomeComponent, ProfileComponent, BoardAdminComponent, BoardModeratorComponent, BoardAdminComponent]
