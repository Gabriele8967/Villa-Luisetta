import { Component, inject, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { I18nService, type SupportedLanguage } from '../../services/i18n.service';
import { I18nPipe } from '../../pipes/i18n.pipe';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, I18nPipe],
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
             class="nav-link">{{ 'nav.rooms' | i18n }}</a>
          <a routerLink="/gallery" 
             routerLinkActive="active" 
             class="nav-link">{{ 'nav.gallery' | i18n }}</a>
          <a routerLink="/food" 
             routerLinkActive="active" 
             class="nav-link">{{ 'nav.menu' | i18n }}</a>
          <a routerLink="/cocktails" 
             routerLinkActive="active" 
             class="nav-link">{{ 'nav.bar' | i18n }}</a>
          <a routerLink="/enoteca" 
             routerLinkActive="active" 
             class="nav-link">{{ 'nav.enoteca' | i18n }}</a>
          <a routerLink="/reservations" 
             routerLinkActive="active" 
             class="nav-link cta-btn">{{ 'nav.book' | i18n }}</a>
          
          <!-- Language Selector Compatto -->
          <div class="language-selector-compact">
            <button 
              class="lang-current-btn" 
              (click)="toggleLanguageDropdown()"
              [attr.aria-expanded]="languageDropdownOpen"
              title="Cambia lingua">
              <span class="lang-flag">{{ getCurrentLanguageFlag() }}</span>
              <span class="lang-code">{{ getCurrentLanguageCode() }}</span>
              <span class="dropdown-arrow" [class.rotate]="languageDropdownOpen">▼</span>
            </button>
            
            <div class="lang-dropdown" [class.open]="languageDropdownOpen">
              <button 
                class="lang-option"
                [class.active]="i18nService.language === 'it'"
                (click)="switchLanguage('it')"
                title="Italiano">
                <span class="lang-flag">🇮🇹</span>
                <span class="lang-name">Italiano</span>
              </button>
              <button 
                class="lang-option"
                [class.active]="i18nService.language === 'en'"
                (click)="switchLanguage('en')"
                title="English">
                <span class="lang-flag">🇺🇸</span>
                <span class="lang-name">English</span>
              </button>
              <button 
                class="lang-option"
                [class.active]="i18nService.language === 'fr'"
                (click)="switchLanguage('fr')"
                title="Français">
                <span class="lang-flag">🇫🇷</span>
                <span class="lang-name">Français</span>
              </button>
            </div>
          </div>
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
              <span class="link-text">{{ 'nav.rooms' | i18n }}</span>
              <span class="link-arrow">→</span>
            </a>
            <a routerLink="/gallery" 
               routerLinkActive="active"
               class="mobile-nav-link" 
               (click)="closeMobileMenu()">
              <span class="link-text">{{ 'nav.gallery' | i18n }}</span>
              <span class="link-arrow">→</span>
            </a>
            <a routerLink="/food" 
               routerLinkActive="active"
               class="mobile-nav-link" 
               (click)="closeMobileMenu()">
              <span class="link-text">{{ 'nav.menu' | i18n }}</span>
              <span class="link-arrow">→</span>
            </a>
            <a routerLink="/cocktails" 
               routerLinkActive="active"
               class="mobile-nav-link" 
               (click)="closeMobileMenu()">
              <span class="link-text">{{ 'nav.bar' | i18n }}</span>
              <span class="link-arrow">→</span>
            </a>
            <a routerLink="/enoteca" 
               routerLinkActive="active"
               class="mobile-nav-link" 
               (click)="closeMobileMenu()">
              <span class="link-text">{{ 'nav.enoteca' | i18n }}</span>
              <span class="link-arrow">→</span>
            </a>
            <a routerLink="/reservations" 
               routerLinkActive="active"
               class="mobile-nav-link cta-mobile" 
               (click)="closeMobileMenu()">
              <span class="link-text">🕐 {{ 'nav.book' | i18n }}</span>
              <span class="link-arrow">→</span>
            </a>
            
            <!-- Mobile Language Selector -->
            <div class="mobile-language-selector">
              <button 
                class="mobile-lang-btn" 
                [class.active]="i18nService.language === 'it'"
                (click)="switchLanguage('it')"
                title="Italiano">🇮🇹 Italiano</button>
              <button 
                class="mobile-lang-btn" 
                [class.active]="i18nService.language === 'en'"
                (click)="switchLanguage('en')"
                title="English">🇺🇸 English</button>
              <button 
                class="mobile-lang-btn" 
                [class.active]="i18nService.language === 'fr'"
                (click)="switchLanguage('fr')"
                title="Français">🇫🇷 Français</button>
            </div>
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
  languageDropdownOpen = false;
  private router = inject(Router);
  i18nService = inject(I18nService);

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

  switchLanguage(language: SupportedLanguage): void {
    this.i18nService.setLanguage(language);
    this.closeMobileMenu();
    this.languageDropdownOpen = false;
  }

  toggleLanguageDropdown(): void {
    this.languageDropdownOpen = !this.languageDropdownOpen;
  }

  closeLanguageDropdown(): void {
    this.languageDropdownOpen = false;
  }

  getCurrentLanguageFlag(): string {
    const flags = { it: '🇮🇹', en: '🇺🇸', fr: '🇫🇷' };
    return flags[this.i18nService.language];
  }

  getCurrentLanguageCode(): string {
    return this.i18nService.language.toUpperCase();
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const languageSelector = target.closest('.language-selector-compact');
    
    if (!languageSelector && this.languageDropdownOpen) {
      this.languageDropdownOpen = false;
    }
  }
}