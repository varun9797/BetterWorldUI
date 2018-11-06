import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SocietyComponent } from './society/society.component';
import { OwnerComponent } from './society/owner/owner.component';
import { FormComponent } from './form/form.component';

const routes : Routes = [
  {path : '', redirectTo:'/home', pathMatch:'full'},
  {path : "home", component: HomeComponent},
  {path : "search", component: SearchComponent},
  {path : "society/:id", component: SocietyComponent,
  children:[
    {path : "owner", component: OwnerComponent}
  ]  
},
  {path : "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SocietyComponent,
    OwnerComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
