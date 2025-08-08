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
      name: 'Gin Tonic Base',
      description: 'Gin classico, acqua tonica premium',
      price: '€7',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 2,
      name: 'Gin Tonic Premium Emporia',
      description: 'Gin Emporia premium, acqua tonica artigianale',
      price: '€10',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 3,
      name: 'Gin Portofino',
      description: 'Gin Portofino, tonica premium, botaniche italiane',
      price: '€12',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 4,
      name: 'Amaro Sprint',
      description: 'Spritz di amaro del capo, dolcezza agrumata e piccantezza speziata, con un retrogusto persistente e soddisfacente (45ml amaro sprint, soda e buccia d\'arancia)',
      price: '€7',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 5,
      name: 'Calice di Vino',
      description: 'Selezione vini della casa - bianco, rosso, rosato',
      price: '€6',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 6,
      name: 'Grappa Mangilli Invecchiata',
      description: 'Grappa invecchiata barricata, distillazione artigianale',
      price: '€5',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 7,
      name: 'Amaro del Capo al Peperoncino',
      description: 'Amaro calabrese con note piccanti e aromatiche',
      price: '€3',
      showAllergens: false,
      allergens: ['Solfiti']
    },
    {
      id: 8,
      name: 'Prosecco Carati 75cl',
      description: 'Bottiglia Prosecco 0,75 litri',
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