import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
  { id: 'r1',
    title: 'Banana Bread',
    imageUrl: 'https://images.app.goo.gl/ZUNv2ssMo2D5sgDeA',
    ingredients: ['2 eggs', '50g Sugar', '3Bananas', 'butter', 'flour']
  },
  { id: 'r2',
  title: 'Pizza',
  imageUrl: 'https://images.app.goo.gl/vTLAPMSSHtywUGUv7',
  ingredients: ['bread Dough', 'tomatoes', 'Mushrooms', 'Potatoes', 'pepper', 'olives']
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
