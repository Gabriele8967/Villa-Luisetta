import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  src: string;
  alt: string;
  loaded: boolean;
}

@Component({
  selector: 'app-gallery',
  imports: [RouterModule, NavigationComponent, CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
  standalone: true,
})
export class Gallery implements OnInit, OnDestroy {
  images: GalleryImage[] = [
    { src: 'gallery/image0.jpeg', alt: 'Villa Luisetta', loaded: false },
    { src: 'gallery/image1.jpeg', alt: 'Villa Luisetta', loaded: false },
    { src: 'gallery/image2.jpeg', alt: 'Villa Luisetta', loaded: false },
    { src: 'gallery/image3.jpeg', alt: 'Villa Luisetta', loaded: false },
    { src: 'gallery/image4.jpeg', alt: 'Villa Luisetta', loaded: false },
    { src: 'gallery/image5.jpeg', alt: 'Villa Luisetta', loaded: false },
    { src: 'gallery/image6.jpeg', alt: 'Villa Luisetta', loaded: false },
    { src: 'gallery/image7.jpeg', alt: 'Villa Luisetta', loaded: false },
    { src: 'gallery/image8.jpeg', alt: 'Villa Luisetta', loaded: false },
    { src: 'gallery/image9.jpeg', alt: 'Villa Luisetta', loaded: false }
  ];

  selectedImageIndex: number | null = null;
  isLightboxOpen = false;
  isImageLoading = false;
  touchStartX = 0;
  touchEndX = 0;

  get selectedImage(): GalleryImage | null {
    return this.selectedImageIndex !== null ? this.images[this.selectedImageIndex] : null;
  }

  ngOnInit() {
    this.preloadImages();
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  preloadImages() {
    this.images.forEach((image, index) => {
      const img = new Image();
      img.onload = () => {
        this.images[index].loaded = true;
      };
      img.src = image.src;
    });
  }

  openLightbox(index: number) {
    this.selectedImageIndex = index;
    this.isLightboxOpen = true;
    this.isImageLoading = true;
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      this.isImageLoading = false;
    }, 300);
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    this.selectedImageIndex = null;
    this.isImageLoading = false;
    document.body.style.overflow = '';
  }

  nextImage() {
    if (this.selectedImageIndex === null) return;
    
    this.isImageLoading = true;
    this.selectedImageIndex = (this.selectedImageIndex + 1) % this.images.length;
    
    setTimeout(() => {
      this.isImageLoading = false;
    }, 200);
  }

  prevImage() {
    if (this.selectedImageIndex === null) return;
    
    this.isImageLoading = true;
    this.selectedImageIndex = this.selectedImageIndex === 0 ? this.images.length - 1 : this.selectedImageIndex - 1;
    
    setTimeout(() => {
      this.isImageLoading = false;
    }, 200);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (!this.isLightboxOpen) return;
    
    switch (event.key) {
      case 'Escape':
        this.closeLightbox();
        break;
      case 'ArrowRight':
        this.nextImage();
        break;
      case 'ArrowLeft':
        this.prevImage();
        break;
    }
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    if (!this.isLightboxOpen) return;
    
    const swipeDistance = this.touchStartX - this.touchEndX;
    const swipeThreshold = 50;
    
    if (swipeDistance > swipeThreshold) {
      this.nextImage();
    } else if (swipeDistance < -swipeThreshold) {
      this.prevImage();
    }
  }

  onImageLoad(index: number) {
    this.images[index].loaded = true;
  }

  getCurrentImageNumber(): string {
    if (this.selectedImageIndex === null) return '';
    return `${this.selectedImageIndex + 1} / ${this.images.length}`;
  }
}