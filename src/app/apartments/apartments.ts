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
      size: '30m²',
      images: [
        'rooms/Foto-stanza cilea/iniziale.jpeg',
        'rooms/Foto-stanza cilea/image26.jpeg',
        'rooms/Foto-stanza cilea/image27.jpeg',
        'rooms/Foto-stanza cilea/image33.jpeg',
        'rooms/Foto-stanza cilea/image34.jpeg',
        'rooms/Foto-stanza cilea/image35.jpeg',
        'rooms/Foto-stanza cilea/image36.jpeg',
        'rooms/Foto-stanza cilea/image38.jpeg'
      ]
    },
    {
      id: 2,
      name: 'MARINELLA',
      description: '',
      price: '€65/persona/notte',
      category: 'classic',
      size: '20m²',
      images: [
        'rooms/Foto-stanza marinella/iniziale.jpeg',
        'rooms/Foto-stanza marinella/image39.jpeg',
        'rooms/Foto-stanza marinella/image40.jpeg',
        'rooms/Foto-stanza marinella/image41.jpeg',
        'rooms/Foto-stanza marinella/image42.jpeg',
        'rooms/Foto-stanza marinella/image43.jpeg',
        'rooms/Foto-stanza marinella/image44.jpeg'
      ]
    },
    {
      id: 3,
      name: 'MANFROCE',
      description: '',
      price: '€80/persona/notte',
      category: 'superior',
      size: '30m²',
      images: [
        'rooms/Foto-stanza manfroce/iniziale.jpeg',
        'rooms/Foto-stanza manfroce/image9.jpeg',
        'rooms/Foto-stanza manfroce/image10.jpeg',
        'rooms/Foto-stanza manfroce/image13.jpeg',
        'rooms/Foto-stanza manfroce/image25.jpeg',
        'rooms/Foto-stanza manfroce/image38.jpeg',
        'rooms/Foto-stanza manfroce/image41.jpeg'
      ]
    },
    {
      id: 4,
      name: 'ROVAGLIOSO',
      description: '',
      price: '€65/persona/notte',
      category: 'classic',
      size: '20m²',
      images: [
        'rooms/Foto-stanza rovaglioso/iniziale.jpeg',
        'rooms/Foto-stanza rovaglioso/image3.jpeg',
        'rooms/Foto-stanza rovaglioso/image4.jpeg',
        'rooms/Foto-stanza rovaglioso/image4 (1).jpeg',
        'rooms/Foto-stanza rovaglioso/image5.jpeg',
        'rooms/Foto-stanza rovaglioso/image6.jpeg',
        'rooms/Foto-stanza rovaglioso/image7.jpeg'
      ]
    },
    {
      id: 5,
      name: 'ULIVARELLA',
      description: '',
      price: '€80/persona/notte',
      category: 'superior',
      size: '30m²',
      images: [
        'rooms/Foto-stanza ulivarella/iniziale.jpeg',
        'rooms/Foto-stanza ulivarella/image46.jpeg',
        'rooms/Foto-stanza ulivarella/image47.jpeg',
        'rooms/Foto-stanza ulivarella/image48.jpeg',
        'rooms/Foto-stanza ulivarella/image49.jpeg',
        'rooms/Foto-stanza ulivarella/image50.jpeg',
        'rooms/Foto-stanza ulivarella/image51.jpeg',
        'rooms/Foto-stanza ulivarella/image52.jpeg',
        'rooms/Foto-stanza ulivarella/image53.jpeg',
        'rooms/Foto-stanza ulivarella/image54.jpeg',
        'rooms/Foto-stanza ulivarella/image55.jpeg'
      ]
    },
    {
      id: 6,
      name: 'PIETRE NERE',
      description: '',
      price: '€80/persona/notte',
      category: 'superior',
      size: '30m²',
      images: [
        'rooms/Foto-stanza pietrenere/iniziale.jpeg',
        'rooms/Foto-stanza pietrenere/image57.jpeg',
        'rooms/Foto-stanza pietrenere/image58.jpeg',
        'rooms/Foto-stanza pietrenere/image59.jpeg',
        'rooms/Foto-stanza pietrenere/image60.jpeg',
        'rooms/Foto-stanza pietrenere/image61.jpeg',
        'rooms/Foto-stanza pietrenere/image62.jpeg',
        'rooms/Foto-stanza pietrenere/image63.jpeg',
        'rooms/Foto-stanza pietrenere/image64.jpeg',
        'rooms/Foto-stanza pietrenere/image65.jpeg'
      ]
    }
  ];

  // Carousel and modal states
  carouselIndexes: { [key: number]: number } = {};
  showModal = false;
  modalImages: string[] = [];
  modalCurrentIndex = 0;
  modalRoomName = '';

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

  // Initialize carousel index for a room
  getCarouselIndex(apartmentId: number): number {
    if (this.carouselIndexes[apartmentId] === undefined) {
      this.carouselIndexes[apartmentId] = 0;
    }
    return this.carouselIndexes[apartmentId];
  }

  // Get current image for carousel
  getCurrentImage(apartment: any): string {
    const index = this.getCarouselIndex(apartment.id);
    return apartment.images[index];
  }

  // Navigate carousel
  nextImage(apartmentId: number, event: Event): void {
    event.stopPropagation();
    const apartment = this.apartments.find(apt => apt.id === apartmentId);
    if (apartment) {
      const currentIndex = this.getCarouselIndex(apartmentId);
      this.carouselIndexes[apartmentId] = (currentIndex + 1) % apartment.images.length;
    }
  }

  prevImage(apartmentId: number, event: Event): void {
    event.stopPropagation();
    const apartment = this.apartments.find(apt => apt.id === apartmentId);
    if (apartment) {
      const currentIndex = this.getCarouselIndex(apartmentId);
      this.carouselIndexes[apartmentId] = currentIndex > 0 ? currentIndex - 1 : apartment.images.length - 1;
    }
  }

  // Open modal with all images
  openImageModal(apartment: any): void {
    this.modalImages = [...apartment.images];
    this.modalCurrentIndex = this.getCarouselIndex(apartment.id);
    this.modalRoomName = apartment.name;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  // Close modal
  closeModal(): void {
    this.showModal = false;
    document.body.style.overflow = 'auto';
  }

  // Navigate modal images
  nextModalImage(): void {
    this.modalCurrentIndex = (this.modalCurrentIndex + 1) % this.modalImages.length;
  }

  prevModalImage(): void {
    this.modalCurrentIndex = this.modalCurrentIndex > 0 ? this.modalCurrentIndex - 1 : this.modalImages.length - 1;
  }

  // Handle modal keyboard events
  onModalKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeModal();
    } else if (event.key === 'ArrowRight') {
      this.nextModalImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevModalImage();
    }
  }
}