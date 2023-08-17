import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent  {

    public name: string = "iron man";
    public age:  number = 45;
    public reset: string = "iron man";

    get capitalizedName (): string{
        return this.name.toLocaleUpperCase();

    }

    getHeroDescription():string {
        return `${this.name} - ${this.age}    `;
    }

    changeHero():void {
      this.name = "Spiderman"

    }

    changeAge(){
      this.age = 37

    }

    Volver(){
      this.name = this.reset
      this.age = 45;


    }


    }




