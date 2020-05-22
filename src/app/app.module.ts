import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { MyTableComponent } from './my-table/my-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ButtonListComponent } from './button-list/button-list.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {OnlyNumber} from './dialog-example/onlynumber';
import { ReportsComponent } from './reports/reports.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListFiltersTypeComponent } from './list-filters-type/list-filters-type.component';
import{InteractionService} from 'src/app/susars/interaction.service';
import{SusarPipe} from 'src/app/susars/susarPipe';
import{DashboardPipe} from 'src/app/dashboards/dashboardPipe';
import { ListFiltersStudiesComponent } from './list-filters-studies/list-filters-studies.component';
import { ListFiltersCountriesComponent } from './list-filters-countries/list-filters-countries.component';
import { ListFiltersSitesComponent } from './list-filters-sites/list-filters-sites.component';
import { DialogUpdateComponent } from './dialog-update/dialog-update.component';
import { PieChartComponent } from './dashboards/pie-chart/pie-chart.component';
import { HomeNavbarComponent } from './homepage/home-navbar/home-navbar.component';
import { NewsComponent } from './homepage/news/news.component';
import { TeamComponent } from './homepage/team/team.component';
import { ProceduresComponent } from './homepage/procedures/procedures.component';
import { ContactComponent } from './homepage/contact/contact.component';
import { HomepageListComponent } from './homepage/homepage-list/homepage-list.component';
import { TeamTableComponent } from './homepage/team/team-table/team-table.component';
import { TeamDialogComponent } from './homepage/team/team-dialog/team-dialog.component';
import{TeamInteractionService} from 'src/app/homepage/team/team-interaction.service';
import { TeamDialogUpdateComponent } from './homepage/team/team-dialog-update/team-dialog-update.component';
import {LoginComponent} from 'src/app/login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { TrainingsComponent } from './trainings/trainings/trainings.component';
import { TrainingsActionsComponent } from './trainings/trainings-actions/trainings-actions.component';
import { TrainingDialogUpdateComponent } from './trainings/training-dialog-update/training-dialog-update.component';







@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    NavbarComponent,
    SidenavComponent,
    ButtonListComponent,
    DialogExampleComponent,
    OnlyNumber,
    routingComponents,
    ReportsComponent,
    DashboardsComponent,
    HomepageComponent,
    ListFiltersTypeComponent,
    ListFiltersStudiesComponent,
    ListFiltersCountriesComponent,
    ListFiltersSitesComponent,
    DialogUpdateComponent,
    PieChartComponent,
    HomeNavbarComponent,
    NewsComponent,
    TeamComponent,
    ProceduresComponent,
    ContactComponent,
    HomepageListComponent,
    TeamTableComponent,
    TeamDialogComponent,
    TeamDialogUpdateComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    TrainingsComponent,
    TrainingsActionsComponent,
    TrainingDialogUpdateComponent
  ],
  entryComponents: [DialogExampleComponent,DialogUpdateComponent,TeamDialogComponent, TeamDialogUpdateComponent, TrainingDialogUpdateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [InteractionService,SusarPipe, DashboardPipe,TeamInteractionService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
