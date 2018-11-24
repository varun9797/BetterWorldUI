import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from './material-module';
import { AppComponent } from './app.component';
import { SocietyMgmtComponent } from './society-mgmt/society-mgmt.component';
import { HomeComponent } from './home/home.component';
import { BuildingComponent } from './society-mgmt/building/building.component';
import { FlatsComponent } from './society-mgmt/flats/flats.component';
import { OwnersComponent } from './society-mgmt/owners/owners.component';
import { TenantComponent } from './society-mgmt/tenant/tenant.component';
import { ErrorComponent } from './error/error.component';
import { SocietyHeaderComponent } from './society-mgmt/society-header/society-header.component';
import { RegisterMemberComponent } from './society-mgmt/register/register-member.component';
import { LoginComponent } from './society-mgmt/login/login.component';
import { SocietyComponent } from './society-mgmt/society/society.component';
import { Component } from '@angular/core/src/metadata/directives';
import { ModalComponent } from './society-mgmt/modal/modal.component';
import { NeedAuthGuard } from './society-mgmt/services/NeedAuthGuard';
import { CalendarComponent } from './society-mgmt/calendar/calendar.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventCalendarComponent } from './society-mgmt/event-calendar/event-calendar.component';


const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterMemberComponent },
  { path: "home", component: HomeComponent },
  {
    path: "societyManagment", component: SocietyMgmtComponent,

    children: [
      { path: "society", component: SocietyComponent },
      { path: ":societyid/buildings", component: BuildingComponent },
      {
        path: ":societyid/buildings/:buildingid/flats",
        component: FlatsComponent,
        canActivate: [NeedAuthGuard]
      },
      { path: "owners", component: OwnersComponent, canActivate: [NeedAuthGuard] },
      { path: "tenats", component: TenantComponent, canActivate: [NeedAuthGuard] },
    ]

  },
  { path: "error", component: ErrorComponent },
  { path: "**", component: ErrorComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    SocietyMgmtComponent,
    HomeComponent,
    BuildingComponent,
    FlatsComponent,
    OwnersComponent,
    TenantComponent,
    ErrorComponent,
    SocietyHeaderComponent,
    RegisterMemberComponent,
    LoginComponent,
    SocietyComponent,
    ModalComponent,
    CalendarComponent,
    EventCalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    BrowserAnimationsModule
  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
