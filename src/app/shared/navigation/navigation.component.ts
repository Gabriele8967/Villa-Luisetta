import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="global-nav" [class.menu-open]="mobileMenuOpen">
      <div class="nav-container">
        <!-- Logo -->
        <div class="logo" routerLink="/" (click)="closeMobileMenu()">
          <span class="logo-text">Villa Luisetta</span>
          <span class="logo-subtitle">Apartments & Winery</span>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="nav-links desktop-only">
          <a routerLink="/apartments" 
             routerLinkActive="active" 
             class="nav-link">Stanze</a>
          <a routerLink="/gallery" 
             routerLinkActive="active" 
             class="nav-link">Gallery</a>
          <a routerLink="/food" 
             routerLinkActive="active" 
             class="nav-link">Menu</a>
          <a routerLink="/cocktails" 
             routerLinkActive="active" 
             class="nav-link">Cocktail</a>
          <a routerLink="/enoteca" 
             routerLinkActive="active" 
             class="nav-link">Enoteca</a>
        </div>
        
        <!-- Mobile Hamburger -->
        <button class="mobile-menu-toggle mobile-only" 
                (click)="toggleMobileMenu()"
                [class.active]="mobileMenuOpen"
                aria-label="Menu di navigazione"
                [attr.aria-expanded]="mobileMenuOpen">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
      
      <!-- Mobile Navigation Overlay -->
      <div class="mobile-nav-overlay" 
           [class.open]="mobileMenuOpen"
           (click)="closeMobileMenu()">
        <div class="mobile-nav-content" (click)="$event.stopPropagation()">
          <div class="mobile-nav-header">
            <div class="mobile-logo">
              <span class="logo-text">Villa Luisetta</span>
              <span class="logo-subtitle">Apartments & Winery</span>
            </div>
            <button class="close-btn" 
                    (click)="closeMobileMenu()"
                    aria-label="Chiudi menu">
              <span class="close-icon">×</span>
            </button>
          </div>
          
          <div class="mobile-nav-links">
            <a routerLink="/apartments" 
               routerLinkActive="active"
               class="mobile-nav-link" 
               (click)="closeMobileMenu()">
              <span class="link-text">Stanze</span>
              <span class="link-arrow">→</span>
            </a>
            <a routerLink="/gallery" 
               routerLinkActive="active"
               class="mobile-nav-link" 
               (click)="closeMobileMenu()">
              <span class="link-text">Gallery</span>
              <span class="link-arrow">→</span>
            </a>
            <a routerLink="/food" 
               routerLinkActive="active"
               class="mobile-nav-link" 
               (click)="closeMobileMenu()">
              <span class="link-text">Menu</span>
              <span class="link-arrow">→</span>
            </a>
            <a routerLink="/cocktails" 
               routerLinkActive="active"
               class="mobile-nav-link" 
               (click)="closeMobileMenu()">
              <span class="link-text">Cocktail</span>
              <span class="link-arrow">→</span>
            </a>
            <a routerLink="/enoteca" 
               routerLinkActive="active"
               class="mobile-nav-link" 
               (click)="closeMobileMenu()">
              <span class="link-text">Enoteca</span>
              <span class="link-arrow">→</span>
            </a>
          </div>
          
          <div class="mobile-nav-footer">
            <p class="contact-info">Via Roma 86, Palmi</p>
            <p class="contact-info">villaluisettareservations&#64;gmail.com</p>
          </div>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit, OnDestroy {
  mobileMenuOpen = false;
  private router = inject(Router);

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    
    // Gestione body scroll
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  // Auto-close menu su route change
  ngOnInit() {
    this.router.events.subscribe(() => {
      this.closeMobileMenu();
    });
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }
}