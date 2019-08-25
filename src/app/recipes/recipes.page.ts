import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  // this is because I had to understand the spread operator in the recipes Service
  // Deprecated
  // recipes2: Recipe[];
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    // this.recipes2 = this.recipeService.recipes;
    // console.log(this.recipes2, this.recipes);
  }

  // S'execute au changement de page https://ionicframework.com/blog/navigating-lifecycle-events/
  ionViewWillEnter() {
    this.recipes = this.recipeService.getAllRecipes();
  }


}
