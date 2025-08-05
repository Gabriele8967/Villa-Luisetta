import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../shared/navigation/navigation.component';

@Component({
  selector: 'app-apartments',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    NavigationComponent
  ],
  templateUrl: './apartments.html',
  styleUrl: './apartments.css'
})
export class Apartments {
  apartments = [
    {
      id: 1,
      name: 'CILEA',
      description: '',
      price: '€80/persona/notte',
      category: 'superior',
      size: '30m²'
    },
    {
      id: 2,
      name: 'MARINELLA',
      description: '',
      price: '€65/persona/notte',
      category: 'classic',
      size: '20m²'
    },
    {
      id: 3,
      name: 'MANFROCE',
      description: '',
      price: '€80/persona/notte',
      category: 'superior',
      size: '30m²'
    },
    {
      id: 4,
      name: 'ROVAGLIOSO',
      description: '',
      price: '€65/persona/notte',
      category: 'classic',
      size: '20m²'
    },
    {
      id: 5,
      name: 'ULIVARELLA',
      description: '',
      price: '€80/persona/notte',
      category: 'superior',
      size: '30m²'
    },
    {
      id: 6,
      name: 'PIETRE NERE',
      description: '',
      price: '€80/persona/notte',
      category: 'superior',
      size: '30m²'
    }
  ];

  contactInfo = {
    email: 'villaluisettareservations@gmail.com'
  };

  scrollToContact() {
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  }

  getRoomType(apartmentId: number): string {
    const apartment = this.apartments.find(apt => apt.id === apartmentId);
    if (!apartment) return 'Standard';
    
    switch (apartment.category) {
      case 'superior': return 'Superior';
      case 'classic': return 'Standard';
      default: return 'Standard';
    }
  }

  getRoomTypeClass(apartmentId: number): string {
    const apartment = this.apartments.find(apt => apt.id === apartmentId);
    return apartment?.category || 'classic';
  }
}