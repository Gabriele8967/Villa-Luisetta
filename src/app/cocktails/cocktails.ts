import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { I18nPipe } from '../pipes/i18n.pipe';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent, I18nPipe],
  templateUrl: './cocktails.html',
  styleUrl: './cocktails.css'
})
export class Cocktails {
  private i18nService = inject(I18nService);
  
  cocktailItems = [
    {
      id: 1,
      name: this.i18nService.translate('cocktail.gin-tonic-portofino.name'),
      description: this.i18nService.translate('cocktail.gin-tonic-portofino.description'),
      price: '€12',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 2,
      name: this.i18nService.translate('cocktail.gin-tonic-emporia.name'),
      description: this.i18nService.translate('cocktail.gin-tonic-emporia.description'),
      price: '€10',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 3,
      name: this.i18nService.translate('cocktail.gin-tonic-base.name'),
      description: this.i18nService.translate('cocktail.gin-tonic-base.description'),
      price: '€7',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 4,
      name: this.i18nService.translate('cocktail.capotonic.name'),
      description: this.i18nService.translate('cocktail.capotonic.description'),
      price: '€7',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 5,
      name: this.i18nService.translate('cocktail.wine-glass.name'),
      description: this.i18nService.translate('cocktail.wine-glass.description'),
      price: '€6',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 6,
      name: this.i18nService.translate('cocktail.grappa-mangilli.name'),
      description: this.i18nService.translate('cocktail.grappa-mangilli.description'),
      price: '€5',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 7,
      name: this.i18nService.translate('cocktail.amaro-capo.name'),
      description: this.i18nService.translate('cocktail.amaro-capo.description'),
      price: '€3',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 8,
      name: this.i18nService.translate('cocktail.prosecco-075.name'),
      description: this.i18nService.translate('cocktail.prosecco-075.description'),
      price: '€15',
      showAllergens: false,
      allergens: ['Solfiti']
    }
  ];

  toggleAllergens(itemId: number) {
    const item = this.cocktailItems.find(cocktail => cocktail.id === itemId);
    if (item) {
      item.showAllergens = !item.showAllergens;
    }
  }
}