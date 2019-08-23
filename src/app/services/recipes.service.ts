import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    { id: 'r1',
      title: 'Banana Bread',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=774&q=80',
      ingredients: ['2 eggs', '50g Sugar', '3Bananas', 'butter', 'flour']
    },
    { id: 'r2',
    title: 'Pizza',
    // tslint:disable-next-line: max-line-length
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    ingredients: ['bread Dough', 'tomatoes', 'Mushrooms', 'Potatoes', 'pepper', 'olives']
    }
    ];

    getAllRecipes() {
      return [...this.recipes];
    }
    getRecipe(recipeId: string) {
      return {...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
      };
    }
    onDeleteRecipe(recipeId: string) {
      this.recipes = this.recipes.filter(recipe => {
        return recipe.id !== recipeId;
      });
    }
}
