import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from "./hero.service.js";

@Component({
    selector: 'my-heroes',
    templateUrl: './src/app/heroes.component.html',
    styleUrls: [
        './src/app/heroes.component.css'
    ],

    providers: [
        HeroService
    ]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}