import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { I18nPipe } from '../pipes/i18n.pipe';
import { I18nService } from '../services/i18n.service';

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
  imports: [CommonModule, RouterModule, NavigationComponent, I18nPipe],
  templateUrl: './food.html',
  styleUrl: './food.css'
})
export class Food {
  selectedMenu: string | null = null;
  private i18nService = inject(I18nService);

  menuOptions: MenuOption[] = [
    {
      id: 'aperitivo-classico',
      title: this.i18nService.translate('menu.aperitivo-classico.title'),
      price: '€9',
      beverage: this.i18nService.translate('menu.aperitivo-classico.beverage'),
      items: [
        {
          id: 1,
          name: this.i18nService.translate('menu.item.stuzzichini-vari.name'),
          ingredients: this.i18nService.translate('menu.item.stuzzichini-vari.ingredients')
        }
      ]
    },
    {
      id: 'apericena-terra',
      title: this.i18nService.translate('menu.apericena-terra.title'),
      price: '€15/persona',
      beverage: this.i18nService.translate('menu.apericena-terra.beverage'),
      items: [
        {
          id: 2,
          name: this.i18nService.translate('menu.item.tagliere-salumi.name'),
          ingredients: this.i18nService.translate('menu.item.tagliere-salumi.ingredients'),
          allergens: ['lattosio'],
          frozen: true
        },
        {
          id: 3,
          name: this.i18nService.translate('menu.item.fiori-zucca-stracciatella.name'),
          ingredients: this.i18nService.translate('menu.item.fiori-zucca-stracciatella.ingredients'),
          allergens: ['glutine', 'lattosio']
        },
        {
          id: 4,
          name: this.i18nService.translate('menu.item.parmigiana-melanzane.name'),
          ingredients: this.i18nService.translate('menu.item.parmigiana-melanzane.ingredients'),
          allergens: ['glutine', 'lattosio']
        },
        {
          id: 5,
          name: this.i18nService.translate('menu.item.polpette-zucchine.name'),
          ingredients: this.i18nService.translate('menu.item.polpette-zucchine.ingredients'),
          allergens: ['glutine', 'lattosio']
        },
        {
          id: 6,
          name: this.i18nService.translate('menu.item.crepes-rucola.name'),
          ingredients: this.i18nService.translate('menu.item.crepes-rucola.ingredients'),
          allergens: ['uova', 'glutine', 'latte']
        }
      ]
    },
    {
      id: 'apericena-mare',
      title: this.i18nService.translate('menu.apericena-mare.title'),
      price: '€30/persona',
      beverage: this.i18nService.translate('menu.apericena-mare.beverage'),
      items: [
        {
          id: 7,
          name: this.i18nService.translate('menu.item.alzatina-crudo.name'),
          ingredients: this.i18nService.translate('menu.item.alzatina-crudo.ingredients'),
          allergens: ['crostacei'],
          frozen: true
        },
        {
          id: 8,
          name: this.i18nService.translate('menu.item.tartare-pescato.name'),
          ingredients: this.i18nService.translate('menu.item.tartare-pescato.ingredients'),
          allergens: ['pesce'],
          frozen: true
        },
        {
          id: 9,
          name: this.i18nService.translate('menu.item.cannolo-mousse.name'),
          ingredients: this.i18nService.translate('menu.item.cannolo-mousse.ingredients'),
          allergens: ['glutine', 'latte', 'crostacei'],
          frozen: true
        },
        {
          id: 10,
          name: this.i18nService.translate('menu.item.ostrica.name'),
          ingredients: this.i18nService.translate('menu.item.ostrica.ingredients'),
          allergens: ['molluschi'],
          frozen: true
        },
        {
          id: 11,
          name: this.i18nService.translate('menu.item.insalata-gambero.name'),
          ingredients: this.i18nService.translate('menu.item.insalata-gambero.ingredients'),
          allergens: ['crostacei'],
          frozen: true
        },
        {
          id: 12,
          name: this.i18nService.translate('menu.item.polpette-pesce.name'),
          ingredients: this.i18nService.translate('menu.item.polpette-pesce.ingredients'),
          allergens: ['pesce', 'lattosio', 'uova', 'glutine', 'frutta secca'],
          frozen: true
        },
        {
          id: 13,
          name: this.i18nService.translate('menu.item.involtino-pesce.name'),
          ingredients: this.i18nService.translate('menu.item.involtino-pesce.ingredients'),
          allergens: ['pesce'],
          frozen: true
        },
        {
          id: 14,
          name: this.i18nService.translate('menu.item.polpo-arrosto.name'),
          ingredients: this.i18nService.translate('menu.item.polpo-arrosto.ingredients'),
          allergens: ['molluschi', 'latte'],
          frozen: true
        }
      ]
    },
    {
      id: 'tradizione-ninetta',
      title: this.i18nService.translate('menu.tradizione-ninetta.title'),
      price: '€20/persona',
      beverage: this.i18nService.translate('menu.tradizione-ninetta.beverage'),
      items: [
        {
          id: 15,
          name: this.i18nService.translate('menu.item.peperone-ripieno.name'),
          ingredients: this.i18nService.translate('menu.item.peperone-ripieno.ingredients'),
          allergens: ['glutine', 'lattosio', 'uova']
        },
        {
          id: 16,
          name: this.i18nService.translate('menu.item.melanzana-ripiena.name'),
          ingredients: this.i18nService.translate('menu.item.melanzana-ripiena.ingredients'),
          allergens: ['glutine', 'lattosio', 'uova']
        },
        {
          id: 17,
          name: this.i18nService.translate('menu.item.bruschette-miste.name'),
          ingredients: this.i18nService.translate('menu.item.bruschette-miste.ingredients'),
          allergens: ['glutine']
        },
        {
          id: 18,
          name: this.i18nService.translate('menu.item.frittelle-fiori.name'),
          ingredients: this.i18nService.translate('menu.item.frittelle-fiori.ingredients'),
          allergens: ['glutine', 'lattosio']
        },
        {
          id: 19,
          name: this.i18nService.translate('menu.item.zeppole.name'),
          ingredients: this.i18nService.translate('menu.item.zeppole.ingredients'),
          allergens: ['glutine']
        },
        {
          id: 20,
          name: this.i18nService.translate('menu.item.polpettine-sugo.name'),
          ingredients: this.i18nService.translate('menu.item.polpettine-sugo.ingredients'),
          allergens: ['glutine', 'lattosio']
        },
        {
          id: 21,
          name: this.i18nService.translate('menu.item.crocchette-patate.name'),
          ingredients: this.i18nService.translate('menu.item.crocchette-patate.ingredients'),
          allergens: ['lattosio', 'uova']
        },
        {
          id: 22,
          name: this.i18nService.translate('menu.item.involtino-peperone.name'),
          ingredients: this.i18nService.translate('menu.item.involtino-peperone.ingredients'),
          allergens: ['glutine']
        }
      ]
    }
  ];

  desserts: MenuItem[] = [
    {
      id: 23,
      name: this.i18nService.translate('menu.dessert.tiramisu.name'),
      ingredients: this.i18nService.translate('menu.dessert.tiramisu.ingredients'),
      price: '€5',
      allergens: ['latte', 'uova', 'glutine']
    },
    {
      id: 24,
      name: this.i18nService.translate('menu.dessert.sorbetto.name'),
      price: '€5',
      ingredients: this.i18nService.translate('menu.dessert.sorbetto.ingredients')
    },
    {
      id: 25,
      name: this.i18nService.translate('menu.dessert.crostatina.name'),
      ingredients: this.i18nService.translate('menu.dessert.crostatina.ingredients'),
      price: '€5',
      allergens: ['glutine', 'latte', 'uova']
    },
    {
      id: 26,
      name: this.i18nService.translate('menu.dessert.tartufo.name'),
      ingredients: this.i18nService.translate('menu.dessert.tartufo.ingredients'),
      price: '€5',
      allergens: ['latte']
    }
  ];

  beverages: MenuItem[] = [
    {
      id: 27,
      name: this.i18nService.translate('menu.beverage.acqua-frizzante.name'),
      price: '€2,5'
    },
    {
      id: 28,
      name: this.i18nService.translate('menu.beverage.acqua-naturale.name'),
      price: '€2,5'
    },
    {
      id: 29,
      name: this.i18nService.translate('menu.beverage.coca-cola.name'),
      price: '€3'
    },
    {
      id: 30,
      name: this.i18nService.translate('menu.beverage.schweppes.name'),
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