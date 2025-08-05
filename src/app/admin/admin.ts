import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  available: boolean;
}

interface WineItem {
  id: number;
  name: string;
  type: string;
  region: string;
  year?: string;
  price: string;
  description: string;
  available: boolean;
}

@Component({
  selector: 'app-admin',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
  standalone: true,
})
export class Admin implements OnInit {
  isAuthenticated = false;
  password = '';
  correctPassword = 'VillaLuisetta2024!';
  
  activeTab: 'food' | 'wine' = 'food';
  
  // Food Menu Data
  foodItems: MenuItem[] = [];
  newFoodItem: MenuItem = {
    id: 0,
    name: '',
    description: '',
    price: '',
    category: 'antipasti',
    available: true
  };
  
  // Wine Menu Data
  wineItems: WineItem[] = [];
  newWineItem: WineItem = {
    id: 0,
    name: '',
    type: 'rosso',
    region: '',
    year: '',
    price: '',
    description: '',
    available: true
  };
  
  foodCategories = [
    'antipasti',
    'primi',
    'secondi',
    'contorni',
    'dolci',
    'bevande'
  ];
  
  wineTypes = [
    'rosso',
    'bianco',
    'rosé',
    'spumante',
    'liquori'
  ];

  ngOnInit() {
    this.loadMenuData();
  }

  authenticate() {
    if (this.password === this.correctPassword) {
      this.isAuthenticated = true;
      this.password = '';
    } else {
      alert('Password non corretta!');
      this.password = '';
    }
  }

  logout() {
    this.isAuthenticated = false;
  }

  setActiveTab(tab: 'food' | 'wine') {
    this.activeTab = tab;
  }

  // Food Menu Management
  addFoodItem() {
    if (this.newFoodItem.name && this.newFoodItem.price) {
      const newId = Math.max(...this.foodItems.map(item => item.id), 0) + 1;
      this.foodItems.push({
        ...this.newFoodItem,
        id: newId
      });
      this.saveMenuData();
      this.resetNewFoodItem();
    }
  }

  editFoodItem(item: MenuItem) {
    this.newFoodItem = { ...item };
  }

  updateFoodItem() {
    const index = this.foodItems.findIndex(item => item.id === this.newFoodItem.id);
    if (index !== -1) {
      this.foodItems[index] = { ...this.newFoodItem };
      this.saveMenuData();
      this.resetNewFoodItem();
    }
  }

  deleteFoodItem(id: number) {
    if (confirm('Sei sicuro di voler eliminare questo piatto?')) {
      this.foodItems = this.foodItems.filter(item => item.id !== id);
      this.saveMenuData();
    }
  }

  toggleFoodAvailability(id: number) {
    const item = this.foodItems.find(item => item.id === id);
    if (item) {
      item.available = !item.available;
      this.saveMenuData();
    }
  }

  resetNewFoodItem() {
    this.newFoodItem = {
      id: 0,
      name: '',
      description: '',
      price: '',
      category: 'antipasti',
      available: true
    };
  }

  // Wine Menu Management
  addWineItem() {
    if (this.newWineItem.name && this.newWineItem.price) {
      const newId = Math.max(...this.wineItems.map(item => item.id), 0) + 1;
      this.wineItems.push({
        ...this.newWineItem,
        id: newId
      });
      this.saveMenuData();
      this.resetNewWineItem();
    }
  }

  editWineItem(item: WineItem) {
    this.newWineItem = { ...item };
  }

  updateWineItem() {
    const index = this.wineItems.findIndex(item => item.id === this.newWineItem.id);
    if (index !== -1) {
      this.wineItems[index] = { ...this.newWineItem };
      this.saveMenuData();
      this.resetNewWineItem();
    }
  }

  deleteWineItem(id: number) {
    if (confirm('Sei sicuro di voler eliminare questo vino?')) {
      this.wineItems = this.wineItems.filter(item => item.id !== id);
      this.saveMenuData();
    }
  }

  toggleWineAvailability(id: number) {
    const item = this.wineItems.find(item => item.id === id);
    if (item) {
      item.available = !item.available;
      this.saveMenuData();
    }
  }

  resetNewWineItem() {
    this.newWineItem = {
      id: 0,
      name: '',
      type: 'rosso',
      region: '',
      year: '',
      price: '',
      description: '',
      available: true
    };
  }

  // Data Persistence
  saveMenuData() {
    localStorage.setItem('villaLuisetta_foodMenu', JSON.stringify(this.foodItems));
    localStorage.setItem('villaLuisetta_wineMenu', JSON.stringify(this.wineItems));
  }

  loadMenuData() {
    const savedFoodMenu = localStorage.getItem('villaLuisetta_foodMenu');
    const savedWineMenu = localStorage.getItem('villaLuisetta_wineMenu');
    
    if (savedFoodMenu) {
      this.foodItems = JSON.parse(savedFoodMenu);
    } else {
      this.initializeDefaultFoodMenu();
    }
    
    if (savedWineMenu) {
      this.wineItems = JSON.parse(savedWineMenu);
    } else {
      this.initializeDefaultWineMenu();
    }
  }

  initializeDefaultFoodMenu() {
    this.foodItems = [
      {
        id: 1,
        name: 'Antipasto della Casa',
        description: 'Selezione di salumi e formaggi locali',
        price: '€18',
        category: 'antipasti',
        available: true
      },
      {
        id: 2,
        name: 'Pasta alla Norma',
        description: 'Pasta con melanzane, pomodoro e ricotta salata',
        price: '€14',
        category: 'primi',
        available: true
      },
      {
        id: 3,
        name: 'Pesce del Giorno',
        description: 'Pesce fresco del giorno alla griglia',
        price: '€22',
        category: 'secondi',
        available: true
      }
    ];
    this.saveMenuData();
  }

  initializeDefaultWineMenu() {
    this.wineItems = [
      {
        id: 1,
        name: 'Cirò Rosso',
        type: 'rosso',
        region: 'Calabria',
        year: '2021',
        price: '€25',
        description: 'Vino rosso corposo del territorio calabrese',
        available: true
      },
      {
        id: 2,
        name: 'Greco di Bianco',
        type: 'bianco',
        region: 'Calabria',
        year: '2022',
        price: '€20',
        description: 'Vino bianco fresco e profumato',
        available: true
      }
    ];
    this.saveMenuData();
  }

  exportData() {
    const data = {
      foodMenu: this.foodItems,
      wineMenu: this.wineItems,
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `villa-luisetta-menu-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  importData(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          if (data.foodMenu) this.foodItems = data.foodMenu;
          if (data.wineMenu) this.wineItems = data.wineMenu;
          this.saveMenuData();
          alert('Dati importati con successo!');
        } catch (error) {
          alert('Errore nell\'importazione dei dati!');
        }
      };
      reader.readAsText(file);
    }
  }
}