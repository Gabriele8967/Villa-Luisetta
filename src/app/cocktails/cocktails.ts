import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../shared/navigation/navigation.component';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent],
  templateUrl: './cocktails.html',
  styleUrl: './cocktails.css'
})
export class Cocktails {
  cocktailItems = [
    {
      id: 1,
      name: 'Negroni Classico',
      description: 'Gin, Campari, Vermouth rosso, scorza d\'arancia',
      price: '€10',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 2,
      name: 'Villa Luisetta Signature',
      description: 'Gin invecchiato, liquore alle erbe, sciroppo di miele, lime',
      price: '€14',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 3,
      name: 'Aperol Spritz',
      description: 'Aperol, Prosecco, soda, fetta d\'arancia',
      price: '€8',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 4,
      name: 'Bellini Premium',
      description: 'Pesca bianca, Prosecco di Valdobbiadene DOCG',
      price: '€11',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 5,
      name: 'Moscow Mule',
      description: 'Vodka premium, ginger beer, lime, menta fresca',
      price: '€9',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 6,
      name: 'Old Fashioned',
      description: 'Whisky bourbon, zucchero di canna, angostura, scorza d\'arancia',
      price: '€12',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 7,
      name: 'Martini Dry',
      description: 'Gin premium, vermouth dry, oliva verde o scorza di limone',
      price: '€11',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 8,
      name: 'Mojito Royal',
      description: 'Rum bianco, menta fresca, lime, zucchero di canna, soda',
      price: '€10',
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