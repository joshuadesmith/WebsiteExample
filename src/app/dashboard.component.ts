
import { Component, OnInit } from "@angular/core";

import { Hero } from './hero.js';
import { HeroService } from './hero.service.js';

@Component({
    selector: 'my-dashboard',
    templateUrl: './src/app/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }
}