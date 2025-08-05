import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  available: boolean;
}

export interface WineItem {
  id: number;
  name: string;
  type: string;
  region: string;
  year?: string;
  price: string;
  description: string;
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private foodMenuSubject = new BehaviorSubject<MenuItem[]>([]);
  private wineMenuSubject = new BehaviorSubject<WineItem[]>([]);

  public foodMenu$ = this.foodMenuSubject.asObservable();
  public wineMenu$ = this.wineMenuSubject.asObservable();

  constructor() {
    this.loadMenuData();
    // Listen for storage changes from other tabs/windows
    window.addEventListener('storage', (e) => {
      if (e.key === 'villaLuisetta_foodMenu' || e.key === 'villaLuisetta_wineMenu') {
        this.loadMenuData();
      }
    });
  }

  // Food Menu Methods
  getFoodMenu(): MenuItem[] {
    return this.foodMenuSubject.value;
  }

  getFoodMenuByCategory(category: string): MenuItem[] {
    return this.foodMenuSubject.value.filter(item => 
      item.category === category && item.available
    );
  }

  getAvailableFoodMenu(): MenuItem[] {
    return this.foodMenuSubject.value.filter(item => item.available);
  }

  // Wine Menu Methods
  getWineMenu(): WineItem[] {
    return this.wineMenuSubject.value;
  }

  getWineMenuByType(type: string): WineItem[] {
    return this.wineMenuSubject.value.filter(item => 
      item.type === type && item.available
    );
  }

  getAvailableWineMenu(): WineItem[] {
    return this.wineMenuSubject.value.filter(item => item.available);
  }

  // Data Loading
  private loadMenuData(): void {
    const savedFoodMenu = localStorage.getItem('villaLuisetta_foodMenu');
    const savedWineMenu = localStorage.getItem('villaLuisetta_wineMenu');
    
    if (savedFoodMenu) {
      this.foodMenuSubject.next(JSON.parse(savedFoodMenu));
    } else {
      this.initializeDefaultFoodMenu();
    }
    
    if (savedWineMenu) {
      this.wineMenuSubject.next(JSON.parse(savedWineMenu));
    } else {
      this.initializeDefaultWineMenu();
    }
  }

  private initializeDefaultFoodMenu(): void {
    const defaultFoodMenu: MenuItem[] = [
      // Antipasti
      {
        id: 1,
        name: 'Antipasto della Casa',
        description: 'Selezione di salumi e formaggi locali con olive e sottaceti',
        price: '€18',
        category: 'antipasti',
        available: true
      },
      {
        id: 2,
        name: 'Bruschette Miste',
        description: 'Tre bruschette: pomodoro e basilico, ricotta e miele, olive taggiasche',
        price: '€12',
        category: 'antipasti',
        available: true
      },
      {
        id: 3,
        name: 'Crudo di Ricciola',
        description: 'Ricciola cruda con agrumi, olio EVO e pepe rosa',
        price: '€16',
        category: 'antipasti',
        available: true
      },

      // Primi
      {
        id: 4,
        name: 'Pasta alla Norma',
        description: 'Pasta con melanzane, pomodoro, ricotta salata e basilico',
        price: '€14',
        category: 'primi',
        available: true
      },
      {
        id: 5,
        name: 'Risotto ai Frutti di Mare',
        description: 'Risotto cremoso con frutti di mare freschi e prezzemolo',
        price: '€18',
        category: 'primi',
        available: true
      },
      {
        id: 6,
        name: 'Fileja alla \'Nduja',
        description: 'Pasta tipica calabrese con \'nduja piccante e pomodorini',
        price: '€15',
        category: 'primi',
        available: true
      },

      // Secondi
      {
        id: 7,
        name: 'Pesce del Giorno',
        description: 'Pesce fresco del giorno alla griglia con contorno',
        price: '€22',
        category: 'secondi',
        available: true
      },
      {
        id: 8,
        name: 'Tagliata di Manzo',
        description: 'Tagliata di manzo con rucola, pomodorini e grana',
        price: '€24',
        category: 'secondi',
        available: true
      },
      {
        id: 9,
        name: 'Involtini di Pesce Spada',
        description: 'Involtini ripieni con pangrattato, pinoli e uvetta',
        price: '€20',
        category: 'secondi',
        available: true
      },

      // Contorni
      {
        id: 10,
        name: 'Verdure Grigliate',
        description: 'Verdure di stagione grigliate con olio e erbe',
        price: '€8',
        category: 'contorni',
        available: true
      },
      {
        id: 11,
        name: 'Patate al Rosmarino',
        description: 'Patate al forno con rosmarino e olio EVO',
        price: '€6',
        category: 'contorni',
        available: true
      },

      // Dolci
      {
        id: 12,
        name: 'Tiramisù della Casa',
        description: 'Tiramisù preparato secondo la ricetta tradizionale',
        price: '€8',
        category: 'dolci',
        available: true
      },
      {
        id: 13,
        name: 'Cannoli Siciliani',
        description: 'Cannoli croccanti con ricotta fresca e pistacchi',
        price: '€9',
        category: 'dolci',
        available: true
      }
    ];

    this.foodMenuSubject.next(defaultFoodMenu);
    localStorage.setItem('villaLuisetta_foodMenu', JSON.stringify(defaultFoodMenu));
  }

  private initializeDefaultWineMenu(): void {
    const defaultWineMenu: WineItem[] = [
      // Vini Rossi
      {
        id: 1,
        name: 'Cirò Rosso DOC',
        type: 'rosso',
        region: 'Calabria',
        year: '2021',
        price: '€25',
        description: 'Vino rosso corposo del territorio calabrese, perfetto con carni rosse',
        available: true
      },
      {
        id: 2,
        name: 'Gaglioppo',
        type: 'rosso',
        region: 'Calabria',
        year: '2020',
        price: '€28',
        description: 'Vino autoctono calabrese dal sapore intenso e persistente',
        available: true
      },

      // Vini Bianchi
      {
        id: 3,
        name: 'Greco di Bianco DOC',
        type: 'bianco',
        region: 'Calabria',
        year: '2022',
        price: '€20',
        description: 'Vino bianco fresco e profumato, ideale con pesce',
        available: true
      },
      {
        id: 4,
        name: 'Mantonico',
        type: 'bianco',
        region: 'Calabria',
        year: '2022',
        price: '€24',
        description: 'Vino bianco aromatico con note floreali e fruttate',
        available: true
      },

      // Vini Rosé
      {
        id: 5,
        name: 'Rosé di Gaglioppo',
        type: 'rosé',
        region: 'Calabria',
        year: '2022',
        price: '€22',
        description: 'Rosé delicato dal colore rosa tenue, perfetto per aperitivi',
        available: true
      },

      // Spumanti
      {
        id: 6,
        name: 'Spumante Brut',
        type: 'spumante',
        region: 'Calabria',
        year: '2021',
        price: '€30',
        description: 'Spumante secco con bollicine fini, ideale per celebrazioni',
        available: true
      },

      // Liquori
      {
        id: 7,
        name: 'Amaro del Capo',
        type: 'liquori',
        region: 'Calabria',
        price: '€6',
        description: 'Amaro calabrese alle erbe, digestivo tradizionale',
        available: true
      },
      {
        id: 8,
        name: 'Limoncello Artigianale',
        type: 'liquori',
        region: 'Casa',
        price: '€5',
        description: 'Limoncello preparato con limoni del nostro giardino',
        available: true
      }
    ];

    this.wineMenuSubject.next(defaultWineMenu);
    localStorage.setItem('villaLuisetta_wineMenu', JSON.stringify(defaultWineMenu));
  }

  // Refresh method to force reload from localStorage
  refreshMenus(): void {
    this.loadMenuData();
  }
}