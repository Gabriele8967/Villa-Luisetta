import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../shared/navigation/navigation.component';

interface MenuItem {
  id: number;
  name: string;
  ingredients?: string;
  allergens?: string[];
  price?: string;
  frozen?: boolean;
}

interface MenuOption {
  id: string;
  title: string;
  price: string;
  beverage: string;
  items: MenuItem[];
  description?: string;
}

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationComponent],
  templateUrl: './food.html',
  styleUrl: './food.css'
})
export class Food {
  selectedMenu: string | null = null;

  menuOptions: MenuOption[] = [
    {
      id: 'aperitivo-classico',
      title: 'Aperitivo Classico',
      price: '€9',
      beverage: '1 calice di vino (cantine Statti bianco-rosso-rosato) o cocktail base',
      items: [
        {
          id: 1,
          name: 'Stuzzichini Vari',
          ingredients: 'Selezione di stuzzichini misti'
        }
      ]
    },
    {
      id: 'apericena-terra',
      title: 'Apericena Villa Luisetta Terra',
      price: '€15/persona',
      beverage: '1 calice di vino (cantine Statti bianco-rosso-rosato) o cocktail base',
      items: [
        {
          id: 2,
          name: 'Tagliere di Salumi e Formaggi',
          ingredients: 'salumi tipici calabresi (secondo disponibilità), **formaggio pecorino**, miele',
          allergens: ['formaggio'],
          frozen: true
        },
        {
          id: 3,
          name: 'Fiori di Zucca con Stracciatella',
          ingredients: 'farina e **formaggio vaccino**',
          allergens: ['glutine', 'formaggio']
        },
        {
          id: 4,
          name: 'Parmigiana di Melanzane',
          ingredients: '**pomodoro**, mollica, **formaggio**, olio, **melanzane**',
          allergens: ['glutine', 'formaggio']
        },
        {
          id: 5,
          name: 'Polpette di Zucchine',
          ingredients: '**formaggio**, mollica, olio, zucchine',
          allergens: ['glutine', 'formaggio']
        },
        {
          id: 6,
          name: 'Crepes di Rucola con Stracciatella',
          ingredients: 'uova, farina, sale, rucola, **stracciatella**',
          allergens: ['uova', 'glutine', 'latte']
        }
      ]
    },
    {
      id: 'apericena-mare',
      title: 'Apericena Premium Villa Luisetta Mare',
      price: '€30/persona',
      beverage: 'calice di vino (cantine Statti bianco-rosso-rosato) o cocktail premium',
      items: [
        {
          id: 7,
          name: 'Alzatina di Crudo di Mare',
          ingredients: 'con **gambero rosso**',
          allergens: ['crostacei'],
          frozen: true
        },
        {
          id: 8,
          name: 'Tartare di Pescato',
          ingredients: 'secondo disponibilità',
          allergens: ['pesce'],
          frozen: true
        },
        {
          id: 9,
          name: 'Cannolo con Mousse di Bufala',
          ingredients: 'mousse di **bufala** e **gambero**',
          allergens: ['glutine', 'latte', 'crostacei'],
          frozen: true
        },
        {
          id: 10,
          name: 'Ostrica',
          ingredients: '**ostrica**',
          allergens: ['molluschi'],
          frozen: true
        },
        {
          id: 11,
          name: 'Insalata di Gambero',
          ingredients: '**gambero**, avocado e lime',
          allergens: ['crostacei'],
          frozen: true
        },
        {
          id: 12,
          name: 'Polpette di Pesce',
          ingredients: 'fatte con **formaggio**, mollica e **uova**, con pesto di fiori di zucca e **mandorle** tostate',
          allergens: ['pesce', 'formaggio', 'uova', 'glutine', 'frutta secca'],
          frozen: true
        },
        {
          id: 13,
          name: 'Involtino di Pesce',
          ingredients: 'secondo disponibilità',
          allergens: ['pesce'],
          frozen: true
        },
        {
          id: 14,
          name: 'Polpo Arrosto',
          ingredients: '**polpo** arrosto su vellutata di patate (patate, burro e latte)',
          allergens: ['molluschi', 'latte'],
          frozen: true
        }
      ]
    },
    {
      id: 'tradizione-ninetta',
      title: 'Aperitivo della Tradizione Ninetta',
      price: '€20/persona',
      beverage: 'calice di vino (cantine Statti bianco-rosso-rosato) o cocktail premium',
      items: [
        {
          id: 15,
          name: 'Peperone Ripieno',
          ingredients: '**pomodoro**, mollica, **formaggio**, uova',
          allergens: ['glutine', 'formaggio', 'uova']
        },
        {
          id: 16,
          name: 'Melanzana Ripiena',
          ingredients: '**pomodoro**, mollica, **formaggio**, uova',
          allergens: ['glutine', 'formaggio', 'uova']
        },
        {
          id: 17,
          name: 'Bruschette Miste',
          ingredients: 'varie preparazioni',
          allergens: ['glutine']
        },
        {
          id: 18,
          name: 'Frittelle di Fiori di Zucca',
          ingredients: '**aglio**, **formaggio**, farina, basilico',
          allergens: ['glutine', 'formaggio']
        },
        {
          id: 19,
          name: 'Zeppole',
          ingredients: 'farina, patate, lievito di birra, olio, sale',
          allergens: ['glutine']
        },
        {
          id: 20,
          name: 'Polpettine al Sugo',
          ingredients: 'carne di **vitello**, **pomodoro**, aglio, **formaggio**, pane, prezzemolo, basilico',
          allergens: ['glutine', 'formaggio']
        },
        {
          id: 21,
          name: 'Crocchette di Patate',
          ingredients: '**formaggio**, patate, **uovo**',
          allergens: ['formaggio', 'uova']
        },
        {
          id: 22,
          name: 'Involtino di Peperone Arrosto',
          ingredients: 'mollica, olio, sale',
          allergens: ['glutine']
        }
      ]
    }
  ];

  desserts: MenuItem[] = [
    {
      id: 23,
      name: 'Tiramisù',
      ingredients: '<strong>mascarpone</strong>, <strong>uova</strong>, savoiardi, caffè, zucchero',
      price: '€5',
      allergens: ['latte', 'uova', 'glutine']
    },
    {
      id: 24,
      name: 'Sorbetto al Limone',
      price: '€5',
      ingredients: 'limone, zucchero, acqua'
    },
    {
      id: 25,
      name: 'Crostatina con Crema Pasticcera',
      ingredients: 'crema pasticcera e frutta fresca',
      price: '€5',
      allergens: ['glutine', 'latte', 'uova']
    },
    {
      id: 26,
      name: 'Tartufo al Cioccolato',
      price: '€5',
      allergens: ['latte']
    }
  ];

  beverages: MenuItem[] = [
    {
      id: 27,
      name: 'Acqua San Pellegrino frizzante',
      price: '€2,5'
    },
    {
      id: 28,
      name: 'Acqua Panna naturale',
      price: '€2,5'
    },
    {
      id: 29,
      name: 'Coca Cola normale/zero',
      price: '€3'
    }
  ];

  selectMenu(menuId: string) {
    this.selectedMenu = this.selectedMenu === menuId ? null : menuId;
  }

  isMenuSelected(menuId: string): boolean {
    return this.selectedMenu === menuId;
  }

  getSelectedMenuData(): MenuOption | null {
    if (!this.selectedMenu) return null;
    return this.menuOptions.find(menu => menu.id === this.selectedMenu) || null;
  }

  formatAllergens(allergens?: string[]): string {
    if (!allergens || allergens.length === 0) return '';
    return allergens.join(', ');
  }

  formatIngredients(ingredients: string): string {
    if (!ingredients) return '';
    // Evidenzia gli allergeni in grassetto mantenendo le ** ma rendendole più visibili
    return ingredients.replace(/\*\*(.*?)\*\*/g, '<strong class="allergen-highlight">$1</strong>');
  }

  scrollToContact() {
    // Scroll to footer for contact info
    const footer = document.querySelector('.footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}