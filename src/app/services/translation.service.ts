import { Injectable, signal } from '@angular/core';

export type Language = 'it' | 'en';

export interface Translations {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = signal<Language>('it');
  
  private translations: Record<Language, Translations> = {
    it: {
      // Home Page
      'home.hero.title': 'Un nuovo concept di ospitalità e degustazione, immerso tra l\'arte e la storia della città di Palmi',
      'home.button.rooms': 'Stanze',
      'home.button.rooms.subtitle': 'Soggiorna con comfort',
      'home.button.gallery': 'Gallery',
      'home.button.gallery.subtitle': 'Scopri la bellezza',
      'home.button.food': 'Aperitivi',
      'home.button.food.subtitle': 'Esperienza culinaria',
      'home.button.bar': 'Bar',
      'home.button.bar.subtitle': 'Gin, Amari e Grappe',
      
      // Navigation
      'nav.rooms': 'Stanze',
      'nav.gallery': 'Gallery',
      'nav.menu': 'Menu',
      'nav.bar': 'Bar', 
      'nav.enoteca': 'Enoteca',
      'nav.book': 'Prenota',
      
      // Footer
      'footer.description': 'Tradizione in evoluzione nel cuore dell\'eleganza italiana',
      'footer.follow': 'Seguici',
      'footer.map.hint': '📍 Ottieni indicazioni',
      
      // Reservations
      'reservations.title': 'Prenota il Tuo Tavolo',
      'reservations.subtitle': 'Scegli l\'orario perfetto per la tua esperienza culinaria a Villa Luisetta',
      'reservations.book.whatsapp': 'Prenota via WhatsApp',
      'reservations.policy.title': 'Politica di Puntualità',
      'reservations.policy.text': 'Si prega di rispettare l\'orario di prenotazione. Trascorsi 15 minuti dall\'orario concordato, il tavolo verrà rilasciato per consentire l\'accoglienza di altri ospiti',
      'reservations.slot.label': 'Prenotazione',
      'reservations.slot.notice': 'Il tavolo deve essere liberato entro la fine dell\'orario prenotato',
      'reservations.info.title': 'Informazioni Prenotazioni',
      'reservations.info.confirm.title': 'Conferma Immediata',
      'reservations.info.confirm.text': 'Riceverai conferma della prenotazione tramite WhatsApp',
      'reservations.info.menu.title': 'Menu Completo',
      'reservations.info.menu.text': 'Tutti i nostri menu sono disponibili in ogni fascia oraria',
    },
    
    en: {
      // Home Page  
      'home.hero.title': 'A new concept of hospitality and tasting, immersed in the art and history of the city of Palmi',
      'home.button.rooms': 'Rooms',
      'home.button.rooms.subtitle': 'Stay with comfort',
      'home.button.gallery': 'Gallery',
      'home.button.gallery.subtitle': 'Discover the beauty',
      'home.button.food': 'Aperitifs',
      'home.button.food.subtitle': 'Culinary experience',
      'home.button.bar': 'Bar',
      'home.button.bar.subtitle': 'Gin, Bitters and Grappa',
      
      // Navigation
      'nav.rooms': 'Rooms',
      'nav.gallery': 'Gallery',
      'nav.menu': 'Menu',
      'nav.bar': 'Bar',
      'nav.enoteca': 'Wine Shop',
      'nav.book': 'Book',
      
      // Footer
      'footer.description': 'Tradition in evolution in the heart of Italian elegance',
      'footer.follow': 'Follow us',
      'footer.map.hint': '📍 Get directions',
      
      // Reservations
      'reservations.title': 'Book Your Table',
      'reservations.subtitle': 'Choose the perfect time for your culinary experience at Villa Luisetta',
      'reservations.book.whatsapp': 'Book via WhatsApp',
      'reservations.policy.title': 'Punctuality Policy',
      'reservations.policy.text': 'Please respect your reservation time. After 15 minutes from the agreed time, the table will be released to allow other guests to be accommodated',
      'reservations.slot.label': 'Reservation',
      'reservations.slot.notice': 'The table must be vacated by the end of the reserved time slot',
      'reservations.info.title': 'Reservation Information',
      'reservations.info.confirm.title': 'Immediate Confirmation',
      'reservations.info.confirm.text': 'You will receive booking confirmation via WhatsApp',
      'reservations.info.menu.title': 'Complete Menu',
      'reservations.info.menu.text': 'All our menus are available during every time slot',
    }
  };

  get language() {
    return this.currentLanguage();
  }

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
    localStorage.setItem('selectedLanguage', lang);
  }

  translate(key: string): string {
    const currentLang = this.currentLanguage();
    return this.translations[currentLang][key] || key;
  }

  // Inizializza la lingua dal localStorage o dal browser
  initializeLanguage() {
    const saved = localStorage.getItem('selectedLanguage') as Language;
    const browserLang = navigator.language.startsWith('en') ? 'en' : 'it';
    const initialLang = saved || browserLang;
    this.setLanguage(initialLang);
  }
}