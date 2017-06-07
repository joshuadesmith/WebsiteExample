import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { AppRoutingModule }     from './app-routing.module.js';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service.js';

import { AppComponent }         from './app.component.js';
import { HeroDetailComponent }  from "./hero-detail.component.js";
import { HeroesComponent }      from "./heroes.component.js";
import { HeroService }          from "./hero.service.js"
import { DashboardComponent }   from "./dashboard.component.js";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    providers: [
      HeroService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }