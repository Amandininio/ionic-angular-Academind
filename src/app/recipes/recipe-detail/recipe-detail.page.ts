import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component ({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(private activatedRoute: ActivatedRoute,
              private recipesService: RecipesService,
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if (!paraMap.has('recipeID')) {
        /**
         * TODO: Redirect
         */
        console.log('error');
        this.router.navigate(['/recipes']);
        return ;
      } else {
        const recipeID = paraMap.get('recipeID');
        this.loadedRecipe = this.recipesService.getRecipe(recipeID);
      }
    }

    );
  }

  onDelete() {
    /**
     * Try to do has the example: https://ionicframework.com/docs/v3/api/components/alert/AlertController/
     */
    this.alertController.create({
      header: 'Alert',
      message: 'Are you sure to delete this recipe ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.onDeleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    }
    )
    ;
  }

}
