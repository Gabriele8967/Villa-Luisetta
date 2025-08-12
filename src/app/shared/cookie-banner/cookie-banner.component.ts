import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="cookie-banner" *ngIf="showBanner">
      <div class="cookie-content">
        <div class="cookie-text">
          <p>
            <strong>Informativa Cookie:</strong> Questo sito utilizza solo cookie tecnici necessari 
            per il funzionamento. Non utilizziamo cookie di profilazione. 
            <a routerLink="/cookie-policy" class="cookie-link">Maggiori informazioni</a>
          </p>
        </div>
        <div class="cookie-actions">
          <button class="cookie-btn accept" (click)="acceptCookies()">
            Ho capito
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(26, 32, 44, 0.98);
      backdrop-filter: blur(10px);
      border-top: 2px solid var(--french-laundry-gold);
      z-index: 1000;
      padding: 1rem;
      box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
    }

    .cookie-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }

    .cookie-text {
      flex: 1;
    }

    .cookie-text p {
      margin: 0;
      color: var(--pure-white);
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .cookie-link {
      color: var(--french-laundry-gold);
      text-decoration: underline;
      transition: color 0.3s ease;
    }

    .cookie-link:hover {
      color: #ffcc80;
    }

    .cookie-actions {
      flex-shrink: 0;
    }

    .cookie-btn {
      background: var(--french-laundry-gold);
      color: var(--primary-burgundy);
      border: none;
      padding: 0.8rem 2rem;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 0.9rem;
    }

    .cookie-btn:hover {
      background: #ffcc80;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(201, 169, 97, 0.3);
    }

    @media (max-width: 768px) {
      .cookie-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
      
      .cookie-text p {
        font-size: 0.8rem;
      }
      
      .cookie-btn {
        padding: 0.7rem 1.5rem;
        font-size: 0.8rem;
      }
    }
  `]
})
export class CookieBannerComponent implements OnInit {
  showBanner = false;

  ngOnInit() {
    // Mostra il banner se l'utente non ha ancora accettato i cookie
    const cookiesAccepted = this.getCookieValue('villa-luisetta-cookies-accepted') || 
                           localStorage.getItem('villa-luisetta-cookies-accepted');
    if (!cookiesAccepted) {
      this.showBanner = true;
    }
  }

  private getCookieValue(name: string): string | null {
    try {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      return match ? match[2] : null;
    } catch (error) {
      return null;
    }
  }

  acceptCookies() {
    try {
      // Set cookie con scadenza e sicurezza
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      
      // Usa cookie invece di localStorage per maggiore compatibilità
      document.cookie = `villa-luisetta-cookies-accepted=true; expires=${expiryDate.toUTCString()}; path=/; secure; samesite=strict`;
      
      // Fallback localStorage
      localStorage.setItem('villa-luisetta-cookies-accepted', 'true');
      
      this.showBanner = false;
    } catch (error) {
      console.error('Error setting cookies:', error);
      this.showBanner = false;
    }
  }
}